import React from "react";
import "./gameOver.css";

class GameOver extends React.Component {
  componentDidMount() {
    const username = this.props.name;
    // const score = this.props.score;
    fetch(`http://localhost:3001/api/users/${username}`, {
      method: "GET",

      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((json) => console.log(json.score));
  }
  render() {
    return (
      <div className="gameOver">
        <h1>{this.props.name}</h1>
        <h1>Game Over</h1>
        <h2> Your score: {this.props.score}</h2>
        <h2>High score: {this.props.score}</h2>

        <div className="buttons">
          <button
            className="ui left attached button"
            type="button"
            onClick={(e) => {
              e.preventDefault();
              window.location.href = "http://localhost:3000";
            }}
          >
            Home
          </button>
          <button
            className="right attached ui button"
            type="button"
            onClick={(e) => {
              e.preventDefault();
              window.location.href = "http://localhost:3000/game";
            }}
          >
            Try again
          </button>
        </div>
      </div>
    );
  }
}

export default GameOver;
