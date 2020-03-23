import React, { Component } from "react";
import axios from "axios";
import { UserContext } from "../../contexts/UserContext";
import { Link } from "react-router-dom";
import Message from "./Message";

export class Item extends Component {
  state = { loading: true, user: {}, item: {}, message: false };
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
    this.setState({ message: true });
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
          <section className="item" key={this.state.item.id}>
            <header className="item__header">
              {this.state.item.type === "OFFERED: " ? (
                <div className="item__icon--offered"></div>
              ) : (
                <div className="item__icon--wanted"></div>
              )}
              <span>{this.state.item.title}</span>
            </header>
            <main className="item__body">
              <p>{this.state.item.description}</p>
              <div className="item__footer">
                <span>{this.state.item.area}</span>
              </div>
              <div className="item__message-container">
                {this.state.user.id === "" ? (
                  <Link to="/login">
                    <button>Send a message</button>
                  </Link>
                ) : (
                  <button onClick={this.showMessage}>Send a message</button>
                )}
              </div>
              <div
                className="item__message"
                display={this.state.message === false ? "none" : "block"}
              >
                <Message user={this.state.user} item={this.state.item} />
              </div>
            </main>
          </section>
        </>
      );
    }
  }
}

export default Item;
