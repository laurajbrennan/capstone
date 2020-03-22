import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../contexts/UserContext";
import { AuthContext } from "../../contexts/AuthContext";
import { Redirect } from "react-router-dom";
import axios from "axios";

export default function Login() {
  const { loginUser } = useContext(UserContext);
  const { toggleAuth } = useContext(AuthContext);
  const [toBrowse, setToBrowse] = useState(false);
  const login = user1 => {
    axios.get("/users").then(res => {
      let userArray = res.data;
      let userFound = userArray.find(user => {
        return user.username === user1.username;
      });
      if (userFound) {
        loginUser(userFound);
        toggleAuth();
        setToBrowse(true);
      } else {
        return window.alert("Username not found, please try again.");
      }
    });
  };

  const handleLogin = event => {
    event.preventDefault();
    let user = {
      username: event.target.username.value
    };
    console.log(user);
    login(user);
    document.querySelector(".login__form").reset();
  };

  return (
    <section className="login">
      {toBrowse ? <Redirect to="/browse" /> : null}
      <form className="login__form" action="submit" onSubmit={handleLogin}>
        <span className="login__title">Login to your Waste Not account</span>

        <div className="login__input">
          <h3 className="login__label">USERNAME</h3>
          <input
            className="login__username"
            placeholder="Username"
            name="username"
          ></input>
        </div>

        <div className="login__input">
          <h3 className="login__label">PASSWORD</h3>
          <input
            className="login__password"
            placeholder="Password"
            name="password"
          ></input>
        </div>
        <Link to="/signup">
          <span className="login__signup-link">
            Need an account? Sign up here.
          </span>
        </Link>
        <button type="submit" className="login__submit-button">
          Login
        </button>
      </form>
    </section>
  );
}
