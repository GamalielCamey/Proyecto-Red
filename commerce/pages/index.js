import Link from "next/link";
import {signOut, getSession} from "next-auth/react";

export default function Home({session}) {
  console.log(session);
  return (
    <div>
      <h1>Hello World</h1>
      {session ? <h1>{`Hello ${session.user.name}`}</h1> : null}
      {session ? (
        <button onClick={() => signOut()}>SignOut</button>
      ) : (
        <Link href="/signin">
          <button>SignIn</button>
        </Link>
      )}
    </div>
  );
}

export const getServerSideProps = async (context) => {
  const session = await getSession(context);
  return {
    props: {
      session: session,
    },
  };
};
