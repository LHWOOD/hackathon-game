import React from "react";

function GameOver(props) {
  return (
    <div>
      Game Over <p>{props.score}</p>
      <button
        type="button"
        onClick={(e) => {
          e.preventDefault();
          window.location.href = "http://localhost:3000";
        }}
      >
        return to main
      </button>
    </div>
  );
}

export default GameOver;
