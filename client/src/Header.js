import React from "react";
import "./styles/header.css";

function Header(props) {
  return (
    <div className="header">
      <ul>
        <li>Home</li>
        <li>about</li>
        <li>contact</li>
      </ul>
    </div>
  );
}

export default Header;
