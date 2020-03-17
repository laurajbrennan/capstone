import React, { Component } from "react";
import InputMessage from "../InputMessage";

export class Message extends Component {
  state = { isLoggedIn: false, loading: true, user: {}, items: [] };
  render() {
    return (
      <div>
        <InputMessage />
      </div>
    );
  }
}

export default Message;
