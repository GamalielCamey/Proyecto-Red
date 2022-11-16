import {useState} from "react";

const Signin = () => {
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
      <form className="signin__form" onSubmit={(e) => addUser(e)}>
        <input
          className="signin__form-input"
          type="text"
          onChange={(e) => setName(e.target.value)}
          value={name}
        ></input>
        <input
          type="text"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        ></input>
        <input
          type="text"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        ></input>
        <button type="submit">Create User</button>
      </form>
    </div>
  );
};

export default Signin;
