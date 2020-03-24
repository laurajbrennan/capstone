import React, { Component } from "react";

export class Messages extends Component {
  state = {
    user: this.props.user,
    conversations: this.props.conversations
  };

  render() {
    const username = this.state.user.username;
    const messages = this.state.conversations.filter(
      message => message.sentBy === username
    );
    const showMessages = messages.map(message => {
      if (message.sentBy === username) {
        return (
          <div className="message__container" key={message.id}>
            <div className="message__labels">
              <span className="message__sender">Sent by: {username}</span>
              <span className="message__sent-date">
                Date sent: (placeholder)
              </span>
            </div>

            <p className="message__sent-text">{message.text}</p>
          </div>
        );
      }
    });

    return <div>{showMessages}</div>;
  }
}

export default Messages;
