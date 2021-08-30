import React from "react";
import GameOver from "./GameOver";
import "./game.css";

class Game extends React.Component {
  state = {
    characterTop: 0,
    opening: 0,
    birdPosition: 0,
    jumping: 0,
    blockPosition: 100,
    holePosition: 0,
    score: 0,
    gameOver: false,
  };

  intervalScore = 0;
  componentDidMount() {
    const hole = document.getElementById("hole");
    const character = document.getElementById("character");
    const block = document.getElementById("block");

    // creates the hole in a random position
    hole.addEventListener("animationiteration", () => {
      let random = -Math.floor(Math.random() * 300 + 150);
      this.setState({ opening: random });
      hole.style.top = random + "px";
    });

    this.intervalScore = setInterval(() => {
      let playerScore = this.state.score;
      this.setState({ score: playerScore + 1 });
    }, 10);
    //gravity simulator
    let birdFall = this.state.birdPosition;
    this.start = setInterval(() => {
      const blockLeft = window.getComputedStyle(block).getPropertyValue("left");
      const holeTop = parseInt(
        window.getComputedStyle(hole).getPropertyValue("top")
      );
      this.setState({ holePosition: holeTop });
      this.setState({ blockPosition: parseInt(blockLeft) });

      if (this.state.jumping === 0) {
        birdFall++;
        this.setState({ birdPosition: birdFall });
        character.style.top = birdFall + "px";
      } else {
        birdFall -= 20;
        this.setState({ birdPosition: birdFall });
        character.style.top = birdFall + "px";
      }
      //hit detections
      if (
        this.state.birdPosition > 470 ||
        (this.state.blockPosition < 40 && this.state.blockPosition > -30)
      ) {
        if (
          this.state.birdPosition < this.state.holePosition + 500 ||
          this.state.birdPosition > this.state.holePosition + 650
        ) {
          this.setState({ gameOver: true });
        }
      }
    }, 10);
    console.log(this.props.name);
  }

  //jumping function
  jump = () => {
    this.setState({ jumping: 1 });
    setTimeout(() => {
      this.setState({ jumping: 0 });
    }, 20);
  };

  render() {
    let win_loss = this.state.gameOver;
    if (win_loss) {
      clearInterval(this.intervalScore);
      const score = this.state.score;
      const name = this.props.name;
      return <GameOver score={score} name={name} />;
    } else
      return (
        <div>
          <div id="game" onClick={this.jump}>
            <span>{this.props.name} Score: </span>
            <span id="score"> {this.state.score}</span>
            <hr />
            <div id="block"></div>
            <div id="hole"></div>
            <div
              id="character"
              style={{ top: `${this.state.birdPosition}px` }}
            ></div>
          </div>
        </div>
      );
  }
}

export default Game;
