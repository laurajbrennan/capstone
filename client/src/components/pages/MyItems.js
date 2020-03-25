import React, { Component } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { UserContext } from "../../contexts/UserContext";
import axios from "axios";
import { Link } from "react-router-dom";

export default class MyItems extends Component {
  state = { loading: true, user: {}, loggedIn: false, items: [] };
  static contextType = UserContext;

  componentDidMount() {
    console.log("componentdidmount");
    const { user } = this.context;
    if (user[0].username !== "") {
      axios.get("/items").then(array => {
        const newArray = array.data.filter(
          item => item.ownedBy === user[0].username
        );
        this.setState({
          loggedIn: true,
          loading: false,
          user: user[0],
          items: newArray
        });
      });
    } else {
      this.setState({ loading: false, loggedIn: false });
    }
  }

  render() {
    const makeItems = this.state.items.map(item => {
      console.log(item);
      return (
        <div className="myitems__item">
          {item.type === "OFFERED: " ? (
            <div className="item__icon--offered"></div>
          ) : (
            <div className="item__icon--wanted"></div>
          )}
          <Link
            className="myitems__link"
            key={item.id}
            to={`/browse/${item.id}`}
          >
            {item.title}
          </Link>
        </div>
      );
    });
    if (this.state.loading === true) {
      return <h1>Loading...</h1>;
    }
    if (!this.state.loggedIn) {
      console.log("not logged in");
      return (
        <main className="myitems">
          <Link className="myitems__link" to="/login">
            Please login to access your items
          </Link>
        </main>
      );
    } else {
      console.log("logged in?");
      return (
        <main className="myitems">
          <span className="myitems__title">My Posted Items</span>
          <div className="myitems__list">{makeItems}</div>
        </main>
      );
    }
  }
}
