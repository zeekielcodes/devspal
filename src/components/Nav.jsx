import React, { useContext } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo3.png";
import { ContextSource } from "./AppContext";

function Nav() {
  const { state } = useContext(ContextSource);
  return (
    <nav className="pad">
      <Link to="/">
        <img src={logo} className="h-4 md:h-auto" alt="" />
      </Link>
      <ul>
        {/* <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li> */}
        {!state.isAuthenticated ? (
          <li>
            <Link to="/login">Sign in</Link>
          </li>
        ) : (
          <Link to="/dashboard">
            <img
              src={
                state.user.photoURL
                  ? state.user.photoURL
                  : "https://cdn-icons-png.flaticon.com/512/149/149071.png"
              }
              className="h-[30px] w-[30px] rounded-full"
              alt=""
            />
          </Link>
        )}
      </ul>
    </nav>
  );
}

export default Nav;
