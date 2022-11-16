import {useState} from "react";
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

  // const [users, setUsers] = useState("");

  // const getUsers = async (e) => {
  //   e.preventDefault();
  //   try {
  //     await fetch(`api/getUsers`, {
  //       method: "GET",
  //       headers: {"Content-Type": "application/json"},
  //     })
  //       .then((response) => response.json())
  //       .then((data) => setUsers(data));
  //   } catch (error) {}
  // };

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

  return (
    <div className="signin">
      <h2>Sign Up</h2>
      <form className="signin__form" onSubmit={(e) => addUser(e)}>
        <div className="signin__form__textbox">
          <input
            type="text"
            onChange={(e) => setName(e.target.value)}
            value={name}
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
