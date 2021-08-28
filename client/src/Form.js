import React from "react";
import "./styles/form.css";

// function Signup(props) {
//   const [formState, setFormState] = useState({
//     password: "",
//     username: "",
//   });

//componentDidMount
// async function newUserHandler(event) {
//   event.preventDefault();

//   const username = document.querySelector("#userName").value.trim();
//   const password = document.querySelector("#password").value.trim();

//   const response = await fetch(`/api/Users`, {
//     method: "POST",
//     body: JSON.stringify({
//       username,
//       password,
//     }),
//     headers: {
//       "Content-Type": "application/json",
//     },
//   });

//   if (response.ok) {
//     document.location.replace("/game");
//   } else {
//     alert("Failed to create account. Check your credentials.");
//   }
// }

// document
//   .querySelector(".create-account")
//   .addEventListener("submit", newUserHandler);

// class Form extends React.Component {
//   state = { userinput: "" };

//   render() {
//     return (
//       <div>
//         <h2>Signup</h2>
//         <form onSubmit={newUserHandler}>
//           <div>
//             <label>User Name:</label>
//             <input
//               placeholder="User Name"
//               name="userName"
//               type="userName"
//               id="userName"
//               onChange={handleChange}
//             />
//           </div>
//           <div>
//             <label htmlFor="password">Password:</label>
//             <input
//               placeholder="******"
//               name="password"
//               type="password"
//               id="password"
//               onChange={handleChange}
//             />
//           </div>
//           <div>
//             <button type="submit">Submit</button>
//           </div>
//         </form>
//       </div>
//     );
//   }
// }

class Form extends React.Component {
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
    const name = this.state.value;

    await fetch(`http://localhost:3001/api/users`, {
      method: "POST",
      body: JSON.stringify({
        name,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log(name);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label id="userName">
          User Name: type="text" value={this.state.value}
          onChange={this.handleChange}
          />
        </label>
        {/* <label id="password">
          Password:
          <input
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
          />
        </label> */}
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default Form;
