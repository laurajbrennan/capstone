import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../contexts/UserContext";
import { Redirect } from "react-router-dom";

export default function Signup() {
  const { updateUser } = useContext(UserContext);
  const [toBrowse, setToBrowse] = useState(false);
  const newUser = event => {
    event.preventDefault();
    let user = {
      name: event.target.name.value,
      username: event.target.username.value,
      email: event.target.email.value
    };
    updateUser(user);
    console.log(user);
    document.querySelector(".signup__form").reset();
    setToBrowse(true);
  };

  return (
    <div className="signup">
      {toBrowse ? <Redirect to="/browse" /> : null}
      <form className="signup__form" action="submit" onSubmit={newUser}>
        <h1 className="signup__title">Sign up for a Waste Not account</h1>
        <div className="signup__input">
          <h3 className="signup__label">YOUR NAME</h3>
          <input
            className="signup__name"
            placeholder="Your name goes here"
            name="name"
            required
          />
        </div>
        <div className="signup__input">
          <h3 className="signup__label">CHOOSE A USERNAME</h3>
          <input
            className="signup__username"
            placeholder="Username"
            name="username"
            required
          />
        </div>
        <div className="signup__input">
          <h3 className="signup__label">YOUR EMAIL</h3>
          <input
            className="signup__email"
            placeholder="you@youremail.com"
            name="email"
            required
          />
        </div>
        <div className="signup__input">
          <h3 className="signup__label">CHOOSE A PASSWORD</h3>
          <input
            className="signup__password"
            placeholder="Must be at least 8 characters, letters and numbers"
            name="password"
            required
          />
        </div>
        <Link to="/login">
          <span className="signup__login-link">
            Already have an account? Log in here.
          </span>
        </Link>
        <button type="submit" className="signup__submit-button">
          Create account and login
        </button>
      </form>
    </div>
  );
}

// const createNewUser = user => {
//   axios
//     .post("/users", {
//       name: user.name,
//       username: user.username,
//       email: user.email
//     })
//     .then(axios.get(`/users/${user.username}`))
//     .then(res => {
//       console.log(res);
//       // setUser(res);
//     });
// };
