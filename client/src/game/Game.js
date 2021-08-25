import React from "react";
import "./game.css";

class Game extends React.Component {
  state = { characterTop: 100 };
  componentDidMount() {
    const hole = document.getElementById("hole");
    const character = document.getElementById("character");

    hole.addEventListener("animationiteration", () => {
      let random = -(Math.random() * 300 + 150);
      console.log(random);
      hole.style.top = random + "px";
    });
    parseInt(window.getComputedStyle(character).getPropertyValue("top"));
  }

  render() {
    return (
      <div id="game">
        <div id="block"></div>
        <div id="hole"></div>
        <div id="character"></div>
      </div>
    );
  }
}

export default Game;
