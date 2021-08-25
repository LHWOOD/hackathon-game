import React from "react";
import "./game.css";

class Game extends React.Component {
  state = { characterTop: 100, opening: 0, birdPosition: 100 };

  componentDidMount() {
    const hole = document.getElementById("hole");
    const character = document.getElementById("character");

    hole.addEventListener("animationiteration", () => {
      let random = -Math.floor(Math.random() * 300 + 150);
      this.setState({ opening: random });
      hole.style.top = random + "px";
    });

    setInterval(() => {
      let birdFall = this.state.birdPosition;

      character.style.top = birdFall + "px";
      this.setState({ birdPosition: -3 });
      console.log(this.state.birdPosition);
    }, 10);
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
