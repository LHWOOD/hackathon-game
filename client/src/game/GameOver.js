import React from "react";
import "./gameOver.css";

// await fetch(`http://localhost:3001/api/users/${username}`, {
//   method: "GET",
//   body: JSON.stringify({
//     username,
//   }),
//   headers: {
//     "Content-Type": "application/json",
//   },
// });
// console.log(username);

function GameOver(props) {
  async function highscore() {
    const score = props.score;
    // const username = props.username;

    await fetch(`http://localhost:3001/api/users/JohnDoe`, {
      method: "PUT",
      body: JSON.stringify({
        score,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
  // highscore();

  // console.log(props.score);

  return (
    <div className="gameOver">
      <h1>Game Over</h1>
      <h2> Your score: {props.score}</h2>

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

export default GameOver;
