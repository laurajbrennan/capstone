import React, { Component } from "react";
import axios from "axios";

export class NewItem extends Component {
  state = { loading: true, user: {}, items: [] };

  componentDidMount() {
    let user = localStorage.getItem("user");
    console.log(user);
    // localStorage.setItem("user", user);
    let userParsed = JSON.parse(user)[0];
    console.log(userParsed);
    this.setState({ user: userParsed });
  }

  render() {
    const createNewItem = item => {
      axios.post("/items", {
        ownedBy: item.ownedBy,
        title: item.title,
        type: item.type,
        description: item.description,
        area: item.area
      });
    };

    const newItem = event => {
      event.preventDefault();
      let item = {
        ownedBy: this.state.user.username,
        title: event.target.title.value,
        type: event.target.type.value,
        description: event.target.description.value,
        area: event.target.area.value
      };
      console.log(item);
      createNewItem(item);
      document.querySelector(".newitem__form").reset();
    };

    return (
      <div className="newitem">
        <form className="newitem__form" action="submit" onSubmit={newItem}>
          <span className="newitem__title">Create a new post</span>

          <div className="newitem__input">
            <h3 className="newitem__label">POST TITLE</h3>
            <input
              className="newitem__post-title"
              placeholder="ex: Wooden Coffee Table"
              name="title"
            ></input>
          </div>

          <div className="newitem__input">
            <h3 className="newitem__label">OFFERED OR WANTED</h3>
            <input type="radio" name="type" value="OFFERED: "></input>
            <label className="newitem__label" htmlFor="offered">
              Offered
            </label>
            <input type="radio" name="type" value="WANTED: "></input>
            <label className="newitem__label" htmlFor="wanted">
              Wanted
            </label>
          </div>

          <div className="newitem__input">
            <h3 className="newitem__label">TEXT OF YOUR POST</h3>
            <textarea
              className="newitem__text"
              type="textarea"
              placeholder="ex: I've got a wooden coffee table that doesn't work in my living room anymore, who wants it?"
              name="description"
            ></textarea>
          </div>

          <div className="newitem__input newitem__input--area">
            <h3 className="newitem__label">NEIGHBOURHOOD</h3>
            <span className="newitem__explain">
              Pick the neighbourhood where you would be most likely to give away
              or pick up your item(s). This can be where you live, where you
              work, or just where you would feel comfortable meeting.
            </span>
            <div className="dropdown"></div>
            <select className="newitem__area" name="area">
              <option value="">Choose from:</option>
              <option value="Downtown">Downtown Vancouver</option>
              <option value="North Vancouver">North Vancouver</option>
              <option value="West Vancouver">West Vancouver</option>
              <option value="Burnaby">Burnaby</option>
              <option value="Surrey">Surrey</option>
              <option value="Coquitlam">Coquitlam</option>
              <option value="New Westminster">New Westminster</option>
              <option value="UBC">UBC</option>
            </select>
          </div>

          <button type="submit" className="newitem__submit-button">
            Post your item
          </button>
        </form>
      </div>
    );
  }
}

export default NewItem;
