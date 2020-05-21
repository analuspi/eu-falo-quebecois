import React from "react";
import { NavLink } from "react-router-dom";
import NavigationItems from "../Navigationitems/Navigationitems";
import DrawerToggleButton from "../SideDrawer/DrawerToggleButton";
import "./Navbar.css";
import {ReactComponent as Logo} from "../../../assets/logo.svg";

const Navbar = props => (
  <header className="Navbar">
    <nav className="Navigation">
      <div className="ToggleButton">
        <DrawerToggleButton click={props.drawerClickHandler}/>
      </div>
      <div className="Logo">
        <NavLink to="/">
          <Logo />
        </NavLink>
      </div>
        <NavigationItems />
    </nav>
  </header>
);
export default Navbar;
