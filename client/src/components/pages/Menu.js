import React from "react";
import { Link } from "react-router-dom";
import X from "../../assets/icons/x.svg";

export default function Menu() {
  return (
    <section className="menu">
      <Link className="menu__exit" to="/">
        <img className="menu__exit-icon" src={X} />
      </Link>
      <span className="menu__title">Waste Not</span>
      <div className="menu__list">
        <p>Menu goes here</p>
      </div>
    </section>
  );
}
