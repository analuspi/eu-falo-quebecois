import React from "react";
import NavigationItems from "../Navigationitems/Navigationitems";
import logo from "../../../assets/logo.jpg";
import "./Navbar.css";

const Navbar = props => (
  <header className="Navbar">
    <nav className="Navigation">
      <div className="Navbar-brand">
          <img src= {logo} alt="logo" />
          <div className="Logo">Eu falo québécois</div>
      </div>
        <NavigationItems />
    </nav>
  </header>
);
export default Navbar;
