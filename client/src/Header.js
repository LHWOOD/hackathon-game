import React from "react";
import Form from "./Form";
import "./styles/header.css";

function Header(props) {
  return (
    <div className="header">
      <ul>
        <li>Home</li>
        <li>about</li>
        <li>
          <Form />
        </li>
      </ul>
    </div>
  );
}

export default Header;
