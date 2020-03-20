import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export class Browse extends Component {
  state = { isLoggedIn: false, loading: true, user: {}, items: [] };

  componentDidMount() {
    axios.get("/items").then(response => {
      // console.log(response.data);
      this.setState({
        items: response.data,
        loading: false
      });
    });
  }

  render() {
    const buildItems = this.state.items.map(item => {
      // console.log(item);
      return (
        <div className="item" key={item.id}>
          <Link to={`/browse/${item.id}`} exact>
            {item.type === "OFFERED: " ? (
              <div className="item__icon--offered"></div>
            ) : (
              <div className="item__icon--wanted"></div>
            )}
            <div className="item__text">
              <div className="item__container">
                <span className="item__type">{item.type}</span>
                <span className="item__title">{item.title}</span>
              </div>
              <p className="item__area">{item.area}</p>
            </div>
          </Link>
        </div>
      );
    });

    if (this.state.loading) {
      return <h1>Loading...</h1>;
    } else {
      return (
        <section className="browse">
          <button className="browse__filter">
            Placeholder for drop-down menu to filter by neighbourhood
          </button>
          {buildItems}
        </section>
      );
    }
  }
}

export default Browse;
