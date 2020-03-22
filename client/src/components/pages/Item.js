import React, { Component } from "react";
import axios from "axios";
import { UserContext } from "../../contexts/UserContext";

export class Item extends Component {
  state = { loading: true, user: {}, item: {} };
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
            <p>{this.state.item.title}</p>
          </section>
        </>
      );
    }
  }
}

export default Item;
