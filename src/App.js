import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Footer from "./Component/Footer";
import NavBar from "./Component/NavBar";
import Gallery from "./Component/Pages/Gallery";
import Home from "./Component/Pages/Home"
import SportNews from "./Component/Pages/SportNews";
import TechNews from "./Component/Pages/TechNews";


function App() {
  return (
      <Router>
        <NavBar/>
        <Switch>
          <Route path="/" exact component={Home} />          
          <Route path="/sport" exact component={SportNews} />          
          <Route path="/tech" exact component={TechNews} />          
          <Route path="/gallery" exact component={Gallery} />          
        </Switch>
        <Footer/>
      </Router>
  );
}

export default App;