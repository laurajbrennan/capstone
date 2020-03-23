import React from "react";
import axios from "axios";
import { UserContext } from "../../contexts/UserContext";

export default function Message(props) {
  const postMessage = e => {
    e.preventDefault();
    let newMessage = {
      sentBy: props.user.username,
      item: props.item.id,
      itemOwner: props.item.ownedBy,
      text: e.target.message.value
    };
    axios({
      method: "put",
      url: `http://localhost:5000/items/${props.item.id}`,
      headers: { "Access-Control-Allow-Origin": "*" },
      data: newMessage 
    });
    document.querySelector(".message__form").reset();
  };
  return (
    <div>
      <div className="message__input">
        <form action="submit" className="message__form" onSubmit={postMessage}>
          <textarea
            className="message__text"
            type="textarea"
            name="message"
            placeholder="Type your message to the post's author here"
          ></textarea>
          <button type="submit" className="message__submit">
            Send
          </button>
        </form>
      </div>
    </div>
  );
}
