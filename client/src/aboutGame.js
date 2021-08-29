import React from "react";
import gameimg from "./images/game.gif";
import "./styles/aboutGame.css";

function aboutGame(props) {
  return (
    <div className="container">
      <img src={gameimg} alt="game" />

      <div className="about">
        <h3>Flappy Jet</h3>
        <p>
          Developed with SQL.Sequelize, Express, React.js, and Node.js by Nathan
          Brailsford and Hutson Wood. Flappy jet is our version of "Flappy
          Bird". While the jet is falling, click the game screen to have the jet
          go up and fly through the openings.
        </p>
        <a href="https://github.com/LHWOOD/hackathon-game">
          <i class="code icon"></i>
        </a>
      </div>
    </div>
  );
}

export default aboutGame;
