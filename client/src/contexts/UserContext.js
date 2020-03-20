import React, { Component, createContext } from "react";

export const UserContext = createContext();

export default class UserContextProvider extends Component {
  state = {
    user: {}
  };
  setUser = userData => {
    this.setState({ user: userData });
  };
  render() {
    return (
      <UserContext.Provider value={{ ...this.state, setUser: this.setUser }}>
        {this.props.children}
      </UserContext.Provider>
    );
  }
}
