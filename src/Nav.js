import React from "react";
import "./App.css";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Nav(props) {
  const {isAgreement} = props
  const navStyle = {
    color: "white",
    textDecoration: "none",
  };
  const notify = () => toast.error("Kullanıcı Sözleşmesini Kabul Ediniz.");
  return (
    <nav>
      <h1>Logo</h1>
      <ul class="nav-links">
        <Link style={navStyle} to="/home">
          <li>Home</li>
        </Link>
        <Link style={navStyle} to="/about">
          <li>About</li>
        </Link>
        <Link style={navStyle} to="/private">
          <li disabled="true" onClick={isAgreement === "false" ? notify : null}>Private</li>
          <ToastContainer />
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;
