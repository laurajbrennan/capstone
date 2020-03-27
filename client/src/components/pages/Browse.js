import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export class Browse extends Component {
  state = { loading: true, user: {}, items: [], area: {}, filteredItems: [] };

  componentDidMount() {
    axios.get("/items").then(response => {
      console.log(response);
      this.setState({
        loading: false,
        user: localStorage.getItem("user"),
        items: response.data,
        filteredItems: response.data
      });
      console.log(this.state.filteredItems);
    });
  }

  render() {
    const handleChange = e => {
      let area = e.target.value;
      console.log(area);
      let filteredItems = this.state.items.filter(item => item.area === area);
      console.log(filteredItems);
      if (filteredItems[0]) {
        this.setState({ area: area, filteredItems: filteredItems });
      } else {
        let filteredItems = this.state.items;
        this.setState({ area: "", filteredItems: filteredItems });
      }
    };
    const buildItems = this.state.filteredItems.map(item => {
      return (
        <div className="item" key={item.id}>
          <Link to={`/browse/${item.id}`} id={item.id}>
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
          {/* this filter for the list of items is not currently functional */}
          <form className="browse__form">
            <div className="browse__dropdown"></div>
            <select
              className="browse__filter"
              name="area"
              value={this.state.area}
              onChange={handleChange}
            >
              <option value="">Filter by neighbourhood</option>
              <option value="">View all</option>
              <option value="Downtown Vancouver">Downtown Vancouver</option>
              <option value="North Vancouver">North Vancouver</option>
              <option value="West Vancouver">West Vancouver</option>
              <option value="Burnaby">Burnaby</option>
              <option value="Surrey">Surrey</option>
              <option value="Coquitlam">Coquitlam</option>
              <option value="New Westminster">New Westminster</option>
              <option value="Richmond">Richmond</option>
              <option value="UBC">UBC</option>
            </select>
          </form>
          {buildItems}
        </section>
      );
    }
  }
}

export default Browse;
