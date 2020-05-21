import React from "react";
import { NavLink } from "react-router-dom";
import "./Navigationitem.css";

const navigationItem = props => {

  return (
    <li>
      <NavLink className="NavigationItem" to={props.link} exact={props.exact}>
        {props.children}
      </NavLink>
    </li>
  );
};

export default navigationItem;
