import React from "react";
import { Link } from "react-router-dom";
import X from "../../assets/icons/x.svg";

export default function Menu() {
  return (
    <section className="menu">
      <Link className="menu__exit" to="/">
        <img className="menu__exit-icon" src={X} alt="exit menu icon" />
      </Link>
      <Link to="/">
        <span className="menu__title">Waste Not</span>
      </Link>
      <div className="menu__list">
        <span className="menu__link menu__link--bold">
          {/* {isAuthenticated
                  ? "You are logged in"
                  : "You are not logged in"} */}
        </span>
        <Link to="/login" className="menu__link">
          Log into your account
        </Link>
        <Link to="/signup" className="menu__link">
          Sign up for Waste Not
        </Link>
        <Link to="/browse" className="menu__link">
          Browse items
        </Link>
        <Link to="/new" className="menu__link">
          Post a new offer or request
        </Link>
        <Link to="/messages" className="menu__link">
          My messages
        </Link>
      </div>
    </section>
  );
}
//   </AuthContext.Consumer>
// );
// }
