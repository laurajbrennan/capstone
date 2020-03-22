import React, { Component } from "react";
import "./styles/main.css";
import "./index.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Menu from "./components/pages/Menu";
import Home from "./components/pages/Home";
import Browse from "./components/pages/Browse";
import Item from "./components/pages/Item";
import Messages from "./components/pages/Messages";
import Login from "./components/pages/Login";
import Signup from "./components/pages/Signup";
import NewItem from "./components/pages/NewItem";
import AuthContextProvider from "./contexts/AuthContext";
import UserContextProvider from "./contexts/UserContext";
// import { default as Chatkit } from "@pusher/chatkit-server";
// import { instanceKey, instanceLocator } from "./config";

class App extends Component {
  // createChatkitUser(username) {
  //   Chatkit.createChatkitUser({
  //     id: username,
  //     name: username
  //   })
  //     .then(currentUser => {
  //       this.setState({ currentUsername: username, currentId: username });
  //     })
  //     .catch(err => {
  //       if (err.status === 400) {
  //         this.setState({
  //           currentUsername: username,
  //           currentId: username
  //         });
  //       } else {
  //         console.log(err.status);
  //       }
  //     });
  // }
  // componentDidMount() {
  //   const messageManager = new Chatkit({
  //     instanceLocator: instanceLocator,
  //     instanceKey: instanceKey,
  //     userId: "26b1ca17-30f3-408a-8769-f1f722546caa"
  //     // tokenProvider: new Chatkit.TokenProvider({
  //     //   url: tokenUrl
  //     // })
  //   });

  //   messageManager.connect().then(currentUser => {
  //     currentUser.subscribeToRoom({
  //       roomId: "411f46fa-47d1-47a8-a1fd-a8975a7c9c08",
  //       messageLimit: 50,
  //       hooks: {
  //         onNewMessage: message => {
  //           console.log("message.text: ", message.text);
  //         }
  //       }
  //     });
  //   });
  // }

  render() {
    return (
      <div className="App">
        <UserContextProvider>
          <AuthContextProvider>
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

                <Route
                  path="/browse/:id"
                  exact
                  render={routerProps => (
                    <>
                      <Header />
                      <Item {...routerProps} />
                    </>
                  )}
                />

                <Route path="/new" exact>
                  <Header />
                  <NewItem />
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
          </AuthContextProvider>
        </UserContextProvider>
      </div>
    );
  }
}

export default App;
