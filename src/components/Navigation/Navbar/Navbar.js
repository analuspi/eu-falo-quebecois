import React from "react";
import { NavLink } from "react-router-dom";
import NavigationItems from "../Navigationitems/Navigationitems";
import logo from "../../../assets/logo.jpg";
import "./Navbar.css";

const Navbar = props => (
  <header className="Navbar">
    <nav className="Navigation">
      <div className="Navbar-brand">
          <img src= {logo} alt="logo" />
          <NavLink to="/" exact className="Logo">
            <div>Eu falo québécois</div>
          </NavLink>
      </div>
        <NavigationItems />
    </nav>
  </header>
);
export default Navbar;
