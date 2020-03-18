import React from "react";
import { Link } from "react-router-dom";
import X from "../../assets/icons/x.svg";

export default function Menu(props) {
  // if (props.isLoggedIn === false) {
  //   return (
  //     <section className="menu">
  //       <Link className="menu__exit" to="/">
  //         <img className="menu__exit-icon" src={X} />
  //       </Link>
  //       <span className="menu__title">Waste Not</span>
  //       <div className="menu__list">
  //         <Link to="/login">Log into your account</Link>
  //         <Link to="/signup">Sign up for Waste Not</Link>
  //         <Link to="/browse">Browse items</Link>
  //       </div>
  //     </section>
  //   );
  // } else {
  return (
    <section className="menu">
      <Link className="menu__exit" to="/">
        <img className="menu__exit-icon" src={X} alt="exit menu icon" />
      </Link>
      <span className="menu__title">Waste Not</span>
      <div className="menu__list">
        <Link to="/login" className="menu__link">
          Log into your account
        </Link>
        <Link to="/signup" className="menu__link">
          Sign up for Waste Not
        </Link>
        <Link to="/browse" className="menu__link">
          Browse items
        </Link>
        <Link to="/messages" className="menu__link">
          My messages
        </Link>
      </div>
    </section>
  );
  // }
}
