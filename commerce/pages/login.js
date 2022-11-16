import {useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {signIn, getProviders} from "next-auth/react";
import {
  faEnvelope,
  faKey,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";

export default function Login({providers}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await signIn("credentials", {
      email: email,
      password: password,
      callbackUrl: "/",
    });
  };

  // const auth0 = Object.values(providers).filter(
  //   (provider) => provider.id === "auth0"
  // );

  return (
    <div className="signin">
      <h2>Login</h2>
      <form className="signin__form" onSubmit={(e) => handleSubmit(e)}>
        <div className="signin__form__textbox">
          <input
            type="text"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            required
          />
          <label>Email</label>
          <FontAwesomeIcon
            className="signin__form__textbox-icon"
            icon={faEnvelope}
          />
        </div>
        <div className="signin__form__textbox">
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            required
          />
          <label>Password</label>
          <FontAwesomeIcon
            className="signin__form__textbox-icon"
            icon={faKey}
          />
        </div>

        <button type="submit">
          Go! <FontAwesomeIcon icon={faArrowRight} />
        </button>

        {/* <button onClick={() => signIn(auth0[0].id)}>
        Sign in with {auth0[0].name}
      </button> */}
      </form>
    </div>
  );
}

// export async function getServerSideProps(context) {
//   const providers = await getProviders();
//   return {
//     props: {providers},
//   };
// }
