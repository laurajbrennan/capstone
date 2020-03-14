import React, { Component } from "react";
import "./styles/main.css";
import "./index.css";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Menu from "./components/pages/Menu";
import Home from "./components/pages/Home";
import Browse from "./components/pages/Browse";
import Messages from "./components/pages/Messages";
import Login from "./components/pages/Login";
import Signup from "./components/pages/Signup";

class App extends Component {
  state = { isLoggedIn: false, loading: true, user: {}, items: [] };

  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route path="/" exact>
              <Header />
              <Home />
            </Route>

            <Route path="/menu" exact>
              <Menu />
            </Route>

            <Route path="/browse" exact>
              <Header />
              <Browse />
            </Route>

            <Route path="/messages" exact>
              <Header />
              <Messages />
            </Route>

            <Route path="/login" exact>
              <Header />
              <Login />
            </Route>

            <Route path="/signup" exact>
              <Header />
              <Signup />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
