import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export class Login extends Component {
  state = { isLoggedIn: false, loading: true, user: {}, items: [] };

  render() {
    const login = user1 => {
      axios.get("/users").then(res => {
        let userArray = res.data;
        console.log(userArray);
        let userFound = userArray.find(user => {
          return user.username === user1.username;
        });
        if (userFound) {
          this.setState({ user: { userFound }, isLoggedIn: true });
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
      <div className="login">
        <form className="login__form" action="submit" onSubmit={handleLogin}>
          <h1 className="login__title">Login to your Waste Not account</h1>

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
      </div>
    );
  }
}

export default Login;
