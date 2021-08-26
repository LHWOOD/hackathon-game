import React from "react";
import "./game.css";

class Game extends React.Component {
  state = { characterTop: 100, opening: 0, birdPosition: 100, jumping: 0 };

  componentDidMount() {
    const hole = document.getElementById("hole");
    const character = document.getElementById("character");

    // creates the hole in a random position
    hole.addEventListener("animationiteration", () => {
      let random = -Math.floor(Math.random() * 300 + 150);
      this.setState({ opening: random });
      hole.style.top = random + "px";
    });

    //gravity simulator
    let birdFall = this.state.birdPosition;
    setInterval(() => {
      if (this.state.jumping === 0) {
        birdFall++;
        this.setState({ birdPosition: birdFall });
        character.style.top = birdFall + "px";
      } else {
        birdFall -= 20;
        this.setState({ birdPosition: birdFall });
        character.style.top = birdFall + "px";
      }
    }, 10);
  }
  //jumping function
  jump = (event) => {
    this.setState({ jumping: 1 });

    setTimeout(() => {
      this.setState({ jumping: 0 });
    }, 20);
  };

  render() {
    return (
      <div id="game" onClick={this.jump}>
        <div id="block"></div>
        <div id="hole"></div>
        <div
          id="character"
          style={{ top: `${this.state.birdPosition}px` }}
        ></div>
      </div>
    );
  }
}

export default Game;
