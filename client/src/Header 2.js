import React from "react";
import "./styles/header.css";

function Header(props) {
  return (
    <div className="header">
      <ul>
        <li>Home</li>
        <li>about</li>
        <li>sign in</li>
      </ul>
    </div>
  );
}

export default Header;
