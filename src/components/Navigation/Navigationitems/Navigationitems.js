import React from "react";
import Navigationitem from "./Navigationitem/Navigationitem";
import "./Navigationitems.css";

const navigationItems = () => {
  return (
    <ul className="NavigationItems">      
      <Navigationitem link="/lessons">Lições</Navigationitem>
      <Navigationitem link="/about">Sobre</Navigationitem>
      <Navigationitem link="/cooperate">Colabore</Navigationitem>
    </ul>
  );
};

export default navigationItems;
