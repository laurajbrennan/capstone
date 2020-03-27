import React, { useContext } from "react";
import { Link } from "react-router-dom";
import X from "../../assets/icons/x.svg";
import { UserContext } from "../../contexts/UserContext";

export default function Menu() {
  const { user, logoutUser } = useContext(UserContext);
  const fullLogout = () => {
    logoutUser();
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
        <span className="menu__link">
          {user[0].id === "" ? (
            <span className="menu__link--bold">You are not logged in yet</span>
          ) : (
            <span className="menu__link--bold" onClick={fullLogout}>
              Click here to log out
            </span>
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
      <footer className="menu__footer">
        <span className="menu__footer-text">
          &copy; Laura Brennan 2020, Capstone Project for the Web Development
          Diploma Program @{" "}
          <a
            href="http://www.brainstation.io"
            className="menu__footer-text menu__link--bold"
          >
            BrainStation
          </a>
        </span>
      </footer>
    </section>
  );
}
