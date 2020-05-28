import React, { Component } from "react";
import "./Home.css";
import home from "../../assets/home.jpg";
import { NavLink } from "react-router-dom";

export default class Home extends Component {
  render() {
    return (
      <div className="home-container">
        <img src={home} alt="la ville de Québec" className="home-img" />
        <div className="home-overlay" />
        <div className="home-headding">
          <h1 className="home-title">Bem-vindo(a) ao site dedicado a quem quer aprender francês québécois</h1>
          <NavLink to="/lessons">
            <button className="home-button">Lições</button>
          </NavLink>
        </div>
      </div>
    );
  }
}
