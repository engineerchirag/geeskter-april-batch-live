import React, { useState } from "react";

function ControlledComponent(props) {
  const [formInput, setFormInput] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  let onSubmit = (event) => {
    event.preventDefault();
    if (formInput.password === formInput.confirmPassword) {
        alert("Success")
        return
    }
    alert("Incorrect password")
  };

  let formUpdater = (event, action) => {
    const text = event.target.value;
    switch (action) {
      case "email":
        setFormInput((prevSate) => {
          return {
            ...prevSate,
            email: text,
          };
        });
        break;
      case "password":
        setFormInput((prevSate) => {
          return {
            ...prevSate,
            password: text,
          };
        });
        break;
      case "confirmPassword":
        setFormInput((prevSate) => {
          return {
            ...prevSate,
            confirmPassword: text,
          };
        });
        break;
    }
  };

  return (
    <form
      onSubmit={(event) => onSubmit(event)}
      style={{ display: "flex", flexDirection: "column" }}
    >
      <label>Email</label>
      <input
        type="email"
        value={formInput.email}
        onChange={(event) => formUpdater(event, "email")}
        style={{ width: "200px", marginBottom: "5px" }}
        required
      />
      <label>Password</label>
      <input
        type="password"
        value={formInput.password}
        onChange={(event) => formUpdater(event, "password")}
        style={{ width: "200px", marginBottom: "5px" }}
        required
      />
      <label>Confirm Password</label>
      <input
        type="password"
        value={formInput.confirmPassword}
        onChange={(event) => formUpdater(event, "confirmPassword")}
        style={{ width: "200px", marginBottom: "5px" }}
        required
      />
      <button type="submit" style={{ width: "100px" }}>
        Submit
      </button>
    </form>
  );
}

// class ControlledComponent extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       email: "",
//       password: "",
//       confirmPassword: "",
//     };
//     this.formUpdater = this.formUpdater.bind(this);
//     this.onSubmit = this.onSubmit.bind(this);
//   }

//   onSubmit = (event) => {
//     event.preventDefault();
//     if (this.state.password === this.state.confirmPassword) {
//       alert("Success");
//       return;
//     }
//     alert("Incorrect password");
//   };

//   formUpdater = (event, action) => {
//       console.log(this);
//     const text = event.target.value;
//     switch (action) {
//       case "email":
//         this.setState({
//           email: text,
//         });
//         break;
//       case "password":
//         this.setState({
//           password: text,
//         });
//         break;
//       case "confirmPassword":
//         this.setState({
//           confirmPassword: text,
//         });
//         break;
//     }
//   };

//   render() {
//     return (
//       <form
//         onSubmit={(event) => this.onSubmit(event)}
//         style={{ display: "flex", flexDirection: "column" }}
//       >
//         <label>Email</label>
//         <input
//           type="email"
//           value={this.state.email}
//           onChange={(event) => this.formUpdater(event, "email")}
//           style={{ width: "200px", marginBottom: "5px" }}
//           required
//         />
//         <label>Password</label>
//         <input
//           type="password"
//           value={this.state.password}
//           onChange={(event) => this.formUpdater(event, "password")}
//           style={{ width: "200px", marginBottom: "5px" }}
//           required
//         />
//         <label>Confirm Password</label>
//         <input
//           type="password"
//           value={this.state.confirmPassword}
//           onChange={(event) => this.formUpdater(event, "confirmPassword")}
//           style={{ width: "200px", marginBottom: "5px" }}
//           required
//         />
//         <button type="submit" style={{ width: "100px" }}>
//           Submit
//         </button>
//       </form>
//     );
//   }
// }

export default ControlledComponent;
