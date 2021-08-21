import React, { useState } from "react";
import LoggedInPage from "./LoggedInPage";
import SignInPage from "./SignInPage";

function ConditionalRender(props) {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    let toogleUserLogin = (value) => {
        setIsLoggedIn(value)
    }
    return isLoggedIn ? <LoggedInPage toogleUserLogin={toogleUserLogin}/> : <SignInPage toogleUserLogin={toogleUserLogin}/>;
}

// class ConditionalRender extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       isLoggedIn: false,
//     };
//   }

//   toogleUserLogin = (value) => {
//     this.setState({ isLoggedIn: value });
//   };

//   render() {
//     const { isLoggedIn } = this.state;
//     return isLoggedIn ? (
//       <LoggedInPage toogleUserLogin={this.toogleUserLogin} />
//     ) : (
//       <SignInPage toogleUserLogin={this.toogleUserLogin} />
//     );
//   }
// }

export default ConditionalRender;
