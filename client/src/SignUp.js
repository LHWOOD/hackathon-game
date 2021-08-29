import React from "react";
import "./styles/form.css";

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };

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

    await fetch(`http://localhost:3001/api/users/`, {
      method: "POST",
      body: JSON.stringify({
        username,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log(username);
    window.location.href = "http://localhost:3000/game";
  }

  render() {
    return (
      <>
        <h2>Sign up to play!</h2>
        <form onSubmit={this.handleSubmit} id="signup">
          <label>
            User Name:{" "}
            <input
              type="text"
              value={this.state.value}
              onChange={this.handleChange}
              href="/game"
            />
          </label>

          <input type="submit" value="Submit" />
        </form>
      </>
    );
  }
}

export default SignUp;
