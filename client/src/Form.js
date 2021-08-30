import React from "react";
//import Game from "./game/Game";
import "./styles/form.css";
import StartScreen from "./game/StartScreen";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "", submitted: false };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  async handleSubmit(event) {
    // alert("A name was submitted: " + this.state.value);
    event.preventDefault();
    const username = this.state.value;
    this.setState({ submitted: true });
    await fetch(`http://localhost:3001/api/users/login`, {
      method: "POST",
      body: JSON.stringify({
        username,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log(username);
    // window.location.href = "http://localhost:3000/game";
  }

  render() {
    if (this.state.submitted) {
      return <StartScreen name={this.state.value} />;
    } else
      return (
        <>
          <h2>Login to play!</h2>
          <form onSubmit={this.handleSubmit} id="login">
            <label>
              User Name:{" "}
              <input
                type="text"
                value={this.state.value}
                onChange={this.handleChange}
              />
            </label>

            <input type="submit" value="Submit" href="/game" />
          </form>
        </>
      );
  }
}

export default Form;
