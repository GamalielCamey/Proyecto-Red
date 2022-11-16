import {useState} from "react";
import {signIn} from "next-auth/react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faKey,
  faUserCircle,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

export default function Signin() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const addUser = async (e) => {
    e.preventDefault();
    try {
      const body = {name, email, password};
      await fetch(`api/user`, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(body),
      });
    } catch (error) {}
  };

  const handleSubmit = (e) => {
    addUser(e);
    signIn();
  };

  return (
    <div className="signin">
      <h2>Sign Up</h2>
      <form className="signin__form" onSubmit={(e) => handleSubmit(e)}>
        <div className="signin__form__textbox">
          <input
            type="text"
            onChange={(e) => setName(e.target.value)}
            value={name}
            required
          />
          <label>Name</label>
          <FontAwesomeIcon
            className="signin__form__textbox-icon"
            icon={faUserCircle}
          />
        </div>
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
            type="text"
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
        <p>
          Already signed in?<Link href="/login">Login</Link>
        </p>
        <button type="submit">
          Create User <FontAwesomeIcon icon={faArrowRight} />
        </button>
      </form>
    </div>
  );
}
