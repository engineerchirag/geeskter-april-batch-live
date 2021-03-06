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
// import ListAndKeys from "./listAndKeys/ListAndKeys";
// import LifeCycle from "./lifeCycleMethods/LifeCycle";
// import RefDemo from "./ref/RefDemo";
// import ControlledComponent from "./controlledComponent/ControlledComponent";
// import UncontrolledComponent from "./uncontrolledComponent/UncontrolledComponent";
// import Main from "./renderProps/Main";
// import Main from "./context/Main";
// import ReactRouterDemo from "./reactRouterDom/ReactRouterDemo";
// import StyledComponent from "./styledComponents/StyledComponent";
// import CssModule from "./cssModules/CssModule";
import Wrapper from "./reactLoadable/Wrapper"
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
    {/* <ListAndKeys /> */}
    {/* <LifeCycle /> */}
    {/* <RefDemo /> */}
    {/* <ControlledComponent /> */}
    {/* <UncontrolledComponent /> */}

    {/* RenderPropsMain */}
    {/* <Main /> */}

    {/* ContextMain */}
    {/* <Main /> */} 

    {/* <ReactRouterDemo /> */}
    {/* <StyledComponent /> */}
    {/* <CssModule /> */}
    <Wrapper />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
