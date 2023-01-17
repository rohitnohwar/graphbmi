import React, { Suspense } from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
// import Main from "./Main";
// import Graph from "./Graph";
const Main = React.lazy(() => import('./Components/Main/Main.js'));
const Graph = React.lazy(() => import('./Components/Graph/Graph.js'));

// function App() {
//   return (
//     <Router>
//   <div>
//   <Switch>
//     <Route path="/" exact component={Main} />
//     <Route path="/graph" exact component={Graph} />
//   </Switch>
//   </div>
//   </Router>
//   );
// }

function App() {
  return (
    <Router>
  <div>
  <Suspense fallback={<div style={{margin:'auto', textAlign:'center',fontSize:'30px', fontWeight:'800'}}>Loading...</div>}>
  <Switch>
    <Route path="/" exact component={Main} />
    <Route path="/graph" exact component={Graph} />
  </Switch>
  </Suspense>
  </div>
  </Router>
  );
}

export default App;
