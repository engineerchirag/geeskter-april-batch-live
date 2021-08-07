import React, { useRef, createRef } from "react";

function UncontrolledComponent(props) {
  const emailRef = useRef("");
  const passwordRef = useRef("");

  let onSubmit = (event) => {
    event.preventDefault();
    alert(`Email: ${emailRef.current.value}. Password: ${passwordRef.current.value}`)
  };

  return (
    <form
      onSubmit={(event) => onSubmit(event)}
      style={{ display: "flex", flexDirection: "column" }}
    >
      <label>Email</label>
      <input
        type="email"
        style={{ width: "200px", marginBottom: "5px" }}
        ref={emailRef}
        required
      />
      <label>Password</label>
      <input
        type="password"
        style={{ width: "200px", marginBottom: "5px" }}
        ref={passwordRef}
        required
      />
      <button type="submit" style={{ width: "100px" }}>
        Submit
      </button>
    </form>
  );
}

// class UncontrolledComponent extends React.Component {
//   constructor(props) {
//     super(props);
//     this.emailRef = createRef();
//     this.passwordRef = createRef();
//   }

//   onSubmit = (event) => {
//     event.preventDefault();
//     alert(
//       `Email: ${this.emailRef.current.value}. Password: ${this.passwordRef.current.value}`
//     );
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
//           style={{ width: "200px", marginBottom: "5px" }}
//           ref={this.emailRef}
//           required
//         />
//         <label>Password</label>
//         <input
//           type="password"
//           style={{ width: "200px", marginBottom: "5px" }}
//           ref={this.passwordRef}
//           required
//         />
//         <button type="submit" style={{ width: "100px" }}>
//           Submit
//         </button>
//       </form>
//     );
//   }
// }

export default UncontrolledComponent;
