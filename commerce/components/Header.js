import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
  faArrowRightFromBracket,
  faArrowRightToBracket,
  faCartShopping,
  faChevronDown,
  faUser,
  faX,
} from "@fortawesome/free-solid-svg-icons";
import {useState, forwardRef} from "react";
import Link from "next/link";
import {signOut} from "next-auth/react";

const Dropdown = forwardRef((props, ref) => {
  return (
    <>
      {props.session ? (
        <div className="dropdown">
          <Link className="dropdown__item" href="#" onClick={() => signOut()}>
            Logout <FontAwesomeIcon icon={faArrowRightFromBracket} />
          </Link>
          <Link className="dropdown__item" href="#">
            Profile <FontAwesomeIcon icon={faUser} />
          </Link>
        </div>
      ) : (
        <div className="dropdown">
          <Link className="dropdown__item" href="/signin">
            Login <FontAwesomeIcon icon={faArrowRightToBracket} />
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
          {open ? (
            <FontAwesomeIcon
              style={{
                borderRadius: "50%",
                width: "8px",
                color: "rgb(255 255 255 / 40%)",
                marginRight: "5px",
              }}
              icon={faX}
            />
          ) : (
            <FontAwesomeIcon
              style={{
                borderRadius: "50%",
                width: "10px",
                color: "rgb(255 255 255 / 40%)",
                marginRight: "5px",
              }}
              icon={faChevronDown}
            />
          )}
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
          {open ? (
            <FontAwesomeIcon
              style={{
                borderRadius: "50%",
                width: "8px",
                color: "rgb(255 255 255 / 40%)",
                marginRight: "5px",
              }}
              icon={faX}
            />
          ) : (
            <FontAwesomeIcon
              style={{
                borderRadius: "50%",
                width: "10px",
                color: "rgb(255 255 255 / 40%)",
                marginRight: "5px",
              }}
              icon={faChevronDown}
            />
          )}
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
