import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Loadable from "react-loadable";
import Spinner from "./Spinner";

const Route1 = Loadable({
  loader: () => import("./Route1"),
  loading: Spinner,
  delay: 3000
});

const Route2 = Loadable({
    loader: () => import("./Route2"),
    loading: Spinner,
    delay: 3000
  });

// const Route1 = lazy(() => {
//     return Promise.all([
//         import("./Route1"),
//         new Promise((resolve) => setTimeout(resolve, 3000)),
//     ]).then(([moduleExports]) => moduleExports);
// })

// const Route2 = lazy(() => {
//     return Promise.all([
//         import("./Route2"),
//         new Promise((resolve) => setTimeout(resolve, 3000)),
//     ]).then(([moduleExports]) => moduleExports);
// })

function ReactRouterDemo(props) {
  return (
    <Router>
        {/* <Suspense fallback={<Spinner />}> */}
      <Switch>
        <Route path="/" exact component={() => <Route1 />} />
        <Route path="/route2" exact component={() => <Route2 />}/>
      </Switch>
      {/* </Suspense> */}
    </Router>
  );
}

export default ReactRouterDemo;
