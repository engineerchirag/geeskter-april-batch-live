import React, { useState } from "react";
import { students } from "./Users";

function ListAndKeys(props) {
  const [users, setUsers] = useState(JSON.parse(JSON.stringify(students)));

  let deleteUser = (index) => {
    setUsers((prevUsers) => {
      let temp = JSON.parse(JSON.stringify(prevUsers));
      temp.splice(index, 1);
      return temp;
    });
  };

  const listUsers = users.map((user, index) => (
    <div key={index} style={{ display: "flex", flexDirection: "row" }}>
      <b>Name: {user.fName}</b>
      <b>Passed: {user.passed.toString().toUpperCase()}</b>
      <button onClick={() => deleteUser(index)}>Delete</button>
    </div>
  ));

  return <div>{listUsers}</div>;
}

// class ListAndKeys extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       users: JSON.parse(JSON.stringify(students)),
//     };
//   }

//   deleteUser = (index) => {
//     let temp = JSON.parse(JSON.stringify(this.state.users));
//     temp.splice(index, 1);
//     this.setState({
//       users: temp,
//     });
//   };

//   render() {
//     const { users } = this.state;
//     const listUsers = users.map((user, index) => (
//       <div key={index} style={{ display: "flex", flexDirection: "row" }}>
//         <b>Name: {user.fName}</b>
//         <b>Passed: {user.passed.toString().toUpperCase()}</b>
//         <button onClick={() => this.deleteUser(index)}>Delete</button>
//       </div>
//     ));
//     return <div>{listUsers}</div>;
//   }
// }

export default ListAndKeys;
