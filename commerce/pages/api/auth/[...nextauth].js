import NextAuth from "next-auth";
import Auth0Provider from "next-auth/providers/auth0";
import CredentialsProvider from "next-auth/providers/credentials";
import {PrismaClient} from "@prisma/client";

const prisma = new PrismaClient();

export const authOptions = {
  // Configure one or more authentication providers

  providers: [
    // Auth0Provider({
    //   clientId: process.env.AUTH0_CLIENT_ID,
    //   clientSecret: process.env.AUTH0_CLIENT_SECRET,
    //   issuer: process.env.AUTH0_DOMAIN,
    // }),
    CredentialsProvider({
      // The name to display on the sign in form (e.g. 'Sign in with...')
      name: "credentials",
      // The credentials is used to generate a suitable form on the sign in page.
      // You can specify whatever fields you are expecting to be submitted.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: {
        // email: {type: "text"},
        // password: {type: "text"},
      },
      async authorize(credentials, req) {
        // You need to provide your own logic here that takes the credentials
        // submitted and returns either a object representing a user or value
        // that is false/null if the credentials are invalid.
        // e.g. return { id: 1, name: 'J Smith', email: 'jsmith@example.com' }
        // You can also use the `req` object to obtain additional parameters
        // (i.e., the request IP address)

        const {email, password} = credentials;

        const user = await prisma.user.findUnique({
          where: {
            email: email,
          },
        });

        if (user.password === password) {
          return user;
        }

        // If no error and we have user data, return it
        // if (credentials.password === user.password && user) {
        //   return user;
        // }
        // // Return null if user data could not be retrieved
        // return null;
      },
    }),

    // ...add more providers here
  ],
  pages: {
    signIn: "/login",
  },
};
export default NextAuth(authOptions);
