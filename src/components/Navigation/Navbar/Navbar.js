import React from "react";
import { NavLink } from "react-router-dom";
import NavigationItems from "../Navigationitems/Navigationitems";
import logo from "../../../assets/logo.jpg";
import "./Navbar.css";

const Navbar = props => (
  <header className="navbar">
    <nav className="navbar-navigation">
      <div className="navbar-brand">
          <img src= {logo} alt="logo" />
          <NavLink to="/" exact className="navbar-logo">
            <div>Eu Falo Québécois</div>
          </NavLink>
      </div>
        <NavigationItems />
    </nav>
  </header>
);
export default Navbar;
