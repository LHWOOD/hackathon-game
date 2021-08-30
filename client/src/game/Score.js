import React from "react";
import Game from "./Game";

class Score extends React.Component {
  componentDidMount() {
    const username = this.props.name;

    fetch(`http://localhost:3001/api/users/${username}`, {
      method: "GET",
      body: JSON.stringify({
        score,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log(username);
  }

  render() {
    <div>
      <h2>High Score: {score}</h2>
    </div>;
  }
}

export default Score;
