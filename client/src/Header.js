import React from "react";
import "./styles/header.css";

function Header(props) {
  return (
    <div className="header">
      <ul>
        {/* <li>Home</li>
        <li href="#aboutUs">About</li> */}
        <li>
          <a href="http://localhost:3000/game">Quick Play</a>
        </li>
        <li>
          <a href="http://localhost:3000/form">Sign In</a>
        </li>
        <li>
          <a href="http://localhost:3000/signup">Sign Up</a>
        </li>
      </ul>
    </div>
  );
}

export default Header;
