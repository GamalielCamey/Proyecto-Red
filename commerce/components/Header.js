import Link from "next/link";

export default function Header({session}) {
  return (
    <div>
      {session ? (
        <div className="user">
          <h3>{`Hello ${session.user.name}`}</h3>
          <img
            style={{borderRadius: "50%", width: "30px"}}
            src={session.user.image}
            alt="user-img"
          />
        </div>
      ) : null}

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
