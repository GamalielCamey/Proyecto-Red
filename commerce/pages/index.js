import {useState} from "react";

export default function Home() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [users, setUsers] = useState("");

  const getUsers = async (e) => {
    e.preventDefault();
    try {
      await fetch(`api/getUsers`, {
        method: "GET",
        headers: {"Content-Type": "application/json"},
      })
        .then((response) => response.json())
        .then((data) => setUsers(data));
    } catch (error) {}
  };

  const addUser = async (e) => {
    e.preventDefault();
    try {
      const body = {name, email};
      await fetch(`api/user`, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(body),
      });
    } catch (error) {}
  };

  return (
    <div>
      {users
        ? users.map((user) => (
            <div>
              <h1>{user.name}</h1>
              <p>{user.email}</p>
            </div>
          ))
        : null}
      <form onSubmit={(e) => addUser(e)}>
        <input
          type="text"
          onChange={(e) => setName(e.target.value)}
          value={name}
        ></input>
        <input
          type="text"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        ></input>
        <button type="submit">Create User</button>
      </form>

      <button onClick={(e) => getUsers(e)}>Get users</button>
    </div>
  );
}
