import React from "react";
import logo from "../assets/images/logo3.png";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="pad">
      <img src={logo} alt="" />
      <div>
        <p>&copy; {new Date().getFullYear()} | DevsPal, All rights reserved.</p>
        <Link to="/privacy">Privacy</Link>
      </div>
    </footer>
  );
}

export default Footer;
