import React from "react";
import "./gameOver.css";

function GameOver(props) {
  return (
    <div className="gameOver">
      <h1>Game Over</h1>
      <h2> Your score: {props.score}</h2>
      <div className="buttons">
        <button
          class="ui left attached button"
          type="button"
          onClick={(e) => {
            e.preventDefault();
            window.location.href = "http://localhost:3000";
          }}
        >
          Home
        </button>
        <button
          class="right attached ui button"
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

export default GameOver;
