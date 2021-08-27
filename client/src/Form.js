import React from "react";

//componentDidMount

class Form extends React.Component {
  state = { userinput: "" };

  render() {
    return (
      <div>
        <h2>Signup</h2>
        <form>
          <div>
            <label>User Name:</label>
            <input
              placeholder="User Name"
              name="userName"
              type="userName"
              id="userName"
            />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input
              placeholder="******"
              name="password"
              type="password"
              id="password"
            />
          </div>
          <div>
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    );
  }
}

export default Form;
