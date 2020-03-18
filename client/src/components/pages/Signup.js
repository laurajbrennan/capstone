import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export class Signup extends Component {
  state = { isLoggedIn: false, loading: true, user: {}, items: [] };

  render() {
    const createNewUser = user => {
      axios
        .post("/users", {
          name: user.name,
          username: user.username,
          email: user.email
        })
        .then(this.setState({ user: { user }, isLoggedIn: true }));
    };

    const newUser = event => {
      event.preventDefault();
      let user = {
        name: event.target.name.value,
        username: event.target.username.value,
        email: event.target.email.value
      };
      console.log(user);
      createNewUser(user);
      document.querySelector(".signup__form").reset();
    };

    return (
      <div className="signup">
        <form className="signup__form" action="submit" onSubmit={newUser}>
          <h1 className="signup__title">Sign up for a Waste Not account</h1>
          <div className="signup__input">
            <h3 className="signup__label">YOUR NAME</h3>
            <input
              className="signup__name"
              placeholder="Your name goes here"
              name="name"
            ></input>
          </div>
          <div className="signup__input">
            <h3 className="signup__label">CHOOSE A USERNAME</h3>
            <input
              className="signup__username"
              placeholder="Username"
              name="username"
            ></input>
          </div>

          <div className="signup__input">
            <h3 className="signup__label">YOUR EMAIL</h3>
            <input
              className="signup__email"
              placeholder="you@youremail.com"
              name="email"
            ></input>
          </div>
          <div className="signup__input">
            <h3 className="signup__label">CHOOSE A PASSWORD</h3>
            <input
              className="signup__password"
              placeholder="Must be at least 8 characters, letters and numbers"
              name="password"
            ></input>
          </div>
          <Link to="/login">
            <span className="signup__login-link">
              Already have an account? Log in here.
            </span>
          </Link>
          <button type="submit" className="signup__submit-button">
            Create account
          </button>
        </form>
      </div>
    );
  }
}

export default Signup;
