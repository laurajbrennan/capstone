import React, { Component } from "react";
import axios from "axios";

export class Item extends Component {
  state = { loading: true, user: {}, item: {} };

  componentDidMount() {
    console.log("component did mount ran");
    axios.get(`/items/${this.props.match.params.id}`).then(res => {
      console.log(res.data);
      this.setState({
        item: res.data,
        loading: false
      });
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
