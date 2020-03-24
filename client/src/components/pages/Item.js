import React, { Component } from "react";
import axios from "axios";
import { UserContext } from "../../contexts/UserContext";
import { Link } from "react-router-dom";
import Message from "../Message";

export class Item extends Component {
  state = {
    loading: true,
    user: {},
    item: {}
  };
  static contextType = UserContext;

  componentDidMount() {
    const { user } = this.context;
    axios.get(`/items/${this.props.match.params.id}`).then(res => {
      this.setState({
        item: res.data,
        loading: false,
        user: user[0]
      });
      console.log(this.state.user);
    });
  }

  showMessage = () => {
    if (this.state.user.username === "") {
      console.log("not logged in");
      return (
        <div className="an-item__message">
          <Link className="an-item__login" to="/login">
            Please login to leave a message
          </Link>
        </div>
      );
    } else {
      console.log("logged in!");
      return (
        <div className="an-item__messages">
          <Message user={this.state.user} item={this.state.item} />
        </div>
      );
    }
  };

  render() {
    if (this.state.loading) {
      return (
        <>
          <h1>Loading...</h1>
        </>
      );
    } else {
      return (
        <>
          <section className="an-item" key={this.state.item.id}>
            <header className="an-item__header">
              {this.state.item.type === "OFFERED: " ? (
                <div className="item__icon--offered"></div>
              ) : (
                <div className="item__icon--wanted"></div>
              )}
              <span>{this.state.item.title}</span>
            </header>
            <main className="an-item__body">
              <p>{this.state.item.description}</p>
              <div className="an-item__footer">
                <span className="an-item__footer-text">
                  {this.state.item.area}
                </span>
                <span className="an-item__footer-text">
                  Posted (placeholder for timestamp)
                </span>
              </div>
            </main>
            {this.showMessage()}
          </section>
        </>
      );
    }
  }
}

export default Item;
