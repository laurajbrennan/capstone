import React, { useContext } from "react";
import { Link } from "react-router-dom";
import X from "../../assets/icons/x.svg";
import { UserContext } from "../../contexts/UserContext";
import { AuthContext } from "../../contexts/AuthContext";

export default function Menu() {
  const { logoutUser } = useContext(UserContext);
  const { isAuthenticated, toggleAuth } = useContext(AuthContext);
  const fullLogout = () => {
    logoutUser();
    toggleAuth();
  };
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
          {isAuthenticated === false ? (
            "You are not logged in yet"
          ) : (
            <button
              className="menu__link menu__link--bold"
              onClick={fullLogout}
            >
              Click here to log out
            </button>
          )}
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
        <Link to="/myitems" className="menu__link">
          My items
        </Link>
      </div>
    </section>
  );
}
