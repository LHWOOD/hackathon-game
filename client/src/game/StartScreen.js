import React from "react";
import Game from "./Game";
import StartImage from "../images/startScreen.jpg";
import "./startScreen.css";

class StartScreen extends React.Component {
  state = { startGame: false };

  handleSubmit = () => {
    this.setState({ startGame: true });
  };

  render() {
    if (this.state.startGame) {
      return <Game name={this.props.name} />;
    } else console.log(this.props.name);

    return (
      <div id="gameImage" onClick={this.handleSubmit}>
        <img src={StartImage} alt="Start game" />
      </div>
    );
  }
}

export default StartScreen;
