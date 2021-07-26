import React from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Main from "./Main";
import Graph from "./Graph";

function App() {
  return (
    <Router>
  <div>
  <Switch>
    <Route path="/" exact component={Main} />
    <Route path="/graph" exact component={Graph} />
  </Switch>
  </div>
  </Router>
  );
}

export default App;
