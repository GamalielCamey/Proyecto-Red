import {signIn, getProviders} from "next-auth/react";

export default function Signin({providers}) {
  return (
    <div className="signin">
      <h2>Login</h2>
      {Object.values(providers).map((provider) => (
        <div className="signin__form" key={provider.name}>
          <button
            onClick={() =>
              signIn(provider.id, {
                callbackUrl: `${window.location.origin}`,
              })
            }
          >
            Sign in with {provider.name}
          </button>
        </div>
      ))}
    </div>
  );
}

export async function getServerSideProps(context) {
  const providers = await getProviders(context);

  return {
    props: {providers},
  };
}
