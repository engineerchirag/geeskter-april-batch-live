import React from "react";

function LoggedInPage(props) {
  const { toogleUserLogin } = props;
  return (
    <div>
      User is logged in.
      <button onClick={() => toogleUserLogin(false)}>LOG OUT</button>
    </div>
  );
}

export default LoggedInPage;
