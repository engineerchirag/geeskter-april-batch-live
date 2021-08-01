import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import App from './App';
// import Jsx from './jsx/Jsx';
// import ClassComponent from "./components/ClassComponent";
// import FunctionalComponent from "./components/FunctionalComponent";
// import PropsDemo from "./props/PropsDemo";
// import Counter from "./states/Counter";
// import ConditionalRender from "./conditionalRendering.js/ConditionalRender";
import ListAndKeys from "./ListAndKeys/ListAndKeys";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Jsx /> */}
    {/* <ClassComponent /> */}
    {/* <FunctionalComponent /> */}
    {/* <PropsDemo /> */}
    {/* <Counter /> */}
    {/* <ConditionalRender /> */}
    <ListAndKeys />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
