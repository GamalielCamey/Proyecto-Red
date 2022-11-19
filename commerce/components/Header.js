import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCartShopping, faUser} from "@fortawesome/free-solid-svg-icons";
import {useState, forwardRef} from "react";
import Link from "next/link";
import {signOut} from "next-auth/react";

const Dropdown = forwardRef((props, ref) => {
  return (
    <>
      {props.session ? (
        <div className="dropdown">
          <Link className="dropdown__item" href="#" onClick={() => signOut()}>
            Signout
          </Link>
        </div>
      ) : (
        <div className="dropdown">
          <Link className="dropdown__item" href="/signin">
            Signin
          </Link>
        </div>
      )}
    </>
  );
});

export default function Header({session}) {
  const [open, setOpen] = useState(false);

  const toggle = () => {
    setOpen(!open);
  };

  return (
    <div className="navbar">
      <ul className="navbar__nav">
        <li className="navbar__nav__item">
          <Link
            href="#"
            onClick={() => toggle()}
            className="navbar__nav__item__button"
          >
            {session ? (
              <img
                className="navbar__nav__item__button-icon"
                style={{borderRadius: "50%", width: "30px"}}
                src={session.user.image}
                alt="user-img"
              />
            ) : (
              <FontAwesomeIcon
                className="navbar__nav__item__button-icon"
                icon={faUser}
                size="1x"
              />
            )}

            {open && <Dropdown session={session} />}
          </Link>
        </li>

        <li className="navbar__nav__item">
          <Link href="#" className="navbar__nav__item__button">
            <FontAwesomeIcon
              className="navbar__nav__item__button-icon"
              icon={faCartShopping}
              size="1x"
            />
          </Link>
        </li>
      </ul>
    </div>
  );
}
