import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navigation/Navbar/Navbar";
//import SideDrawer from "./components/Navigation/SideDrawer/SideDrawer";
//import BackDrop from "./components/Backdrop/Backdrop";
import Home from "./components/Home/Home";
//import ProductList from "./components/ProductList/ProductList";
//import Default from "./components/Default/Default";
//import Details from "./components/Details/Details";
//import About from "./components/About/About";
//import Cart from "./components/Cart/Cart";
//import Modal from "./components/Modal/Modal";

class App extends Component {
  

  render() {
    return (
      <div className="App">
          <Navbar  />
          <Switch>
            <Route path="/" exact component={Home} />
          </Switch>
      </div>
    );
  }
}

export default App;
