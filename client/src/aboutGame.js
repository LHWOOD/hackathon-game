import React from "react";
import gameimg from "./images/game.jpg";
import "./styles/aboutGame.css";

function aboutGame(props) {
  return (
    <div className="container">
      <img src={gameimg} alt="game" />
      <div className="about">
        <h3>Flappy Jet</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div>
    </div>
  );
}

export default aboutGame;
