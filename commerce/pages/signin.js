import {signIn, getProviders} from "next-auth/react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGoogle} from "@fortawesome/free-brands-svg-icons";
import {faGithub} from "@fortawesome/free-brands-svg-icons";
import {faDiscord} from "@fortawesome/free-brands-svg-icons";

export default function Signin({providers}) {
  return (
    <div className="signin">
      <h2>Login</h2>
      {Object.values(providers).map((provider) => {
        return (
          <div className="signin__form" key={provider.name}>
            <button
              className="signin__form-BTN"
              onClick={() =>
                signIn(provider.id, {
                  callbackUrl: `${window.location.origin}`,
                })
              }
            >
              Sign in with {provider.name}
              <FontAwesomeIcon
                icon={
                  provider.name === "Google"
                    ? faGoogle
                    : provider.name === "GitHub"
                    ? faGithub
                    : faDiscord
                }
              />
            </button>
          </div>
        );
      })}
    </div>
  );
}

export async function getServerSideProps(context) {
  const providers = await getProviders(context);

  return {
    props: {providers},
  };
}
