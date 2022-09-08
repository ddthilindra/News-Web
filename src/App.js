import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./Component/NavBar";
import Home from "./Component/Pages/Home"


function App() {
  return (
      <Router>
        <NavBar/>
        <Switch>
          <Route path="/" exact component={Home} />          
        </Switch>
      </Router>
  );
}

export default App;