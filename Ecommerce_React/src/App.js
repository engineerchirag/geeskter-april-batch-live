import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "./components/Main";
import PageNotFound from "./components/PageNotFound";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Main} />
        <Route component={PageNotFound} />
      </Switch>
    </Router>
  );
}

export default App;
