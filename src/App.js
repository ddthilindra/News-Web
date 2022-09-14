import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Footer from "./Component/Footer";
import NavBar from "./Component/NavBar";
import Category from "./Pages/Category";
import Gallery from "./Pages/Gallery";
import Home from "./Pages/Home"
import SportNews from "./Pages/SportNews";
import TechNews from "./Pages/TechNews";


function App() {
  return (
      <Router>
        <NavBar/>
        <Switch>
          <Route path="/" exact component={Home} />          
          <Route path="/sport" exact component={SportNews} />          
          <Route path="/tech" exact component={TechNews} />          
          <Route path="/gallery" exact component={Gallery} />          
          <Route path="/category/:category" exact component={Category} />          
        </Switch>
        <Footer/>
      </Router>
  );
}

export default App;