import React, { Component } from "react";
import { Link } from "react-router-dom";

export class Home extends Component {
  state = { isLoggedIn: false, loading: true, user: {}, items: [] };
  render() {
    return (
      <main className="home">
        <div className="home__callout">
          <span className="home__callout-text">
            Waste Not is a <br />
            zero-waste, zero-dollar <br />
            exchange network.
          </span>
        </div>
        <div className="home__explainer">
          <p className="home__text">
            Have things you don’t need? Offer them on our message boards, and
            someone will be glad to take them off your hands.
          </p>
          <p className="home__text">
            Need things you don’t have? Take a look at what other people have
            offered, and get them for free.
          </p>
        </div>
        <div className="home__action-container">
          <Link to="/browse">
            <button className="button-dark">Browse the network</button>
          </Link>
          <div className="home__id-container">
            <Link to="/login">
              <button className="home__login button-light">Login</button>
            </Link>
            <Link to="/signup">
              <button className="home__signup button-light">Sign up</button>
            </Link>
          </div>
        </div>
      </main>
    );
  }
}

export default Home;
