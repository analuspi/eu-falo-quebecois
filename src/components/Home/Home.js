import React, { Component } from "react";
import "./Home.css";
import home from "../../assets/home.jpg";
import { NavLink } from "react-router-dom";

export default class Home extends Component {
  render() {
    return (
      <div className="Container">
        <img src={home} alt="home" className="Img" />
        <div className="Overlay" />
        <div className="Headding">
          <h1 className="Title">Benvindo(a) ao site dedicado a quem quer aprender francês québécois</h1>
          <NavLink to="/lessons">
            <button className="Btn">Lições</button>
          </NavLink>
        </div>
      </div>
    );
  }
}
