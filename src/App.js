import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navigation/Navbar/Navbar";
import Home from "./components/Home/Home";
import Lessons from "./components/Lessons/Lessons";


class App extends Component {
  

  render() {
    return (
      <div className="App">
          <Navbar  />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/lessons" component={Lessons} />
          </Switch>
      </div>
    );
  }
}

export default App;
