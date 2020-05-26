import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import { LessonProvider } from "./context";
import Navbar from "./components/Navigation/Navbar/Navbar";
import Home from "./components/Home/Home";
import Lessons from "./components/Lessons/Lessons";
import "./App.css";


class App extends Component {
  

  render() {
    return (
      <LessonProvider>
        <div className="App">
            <Navbar  />
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/lessons" component={Lessons} />
            </Switch>
        </div>
      </LessonProvider>
    );
  }
}

export default App;
