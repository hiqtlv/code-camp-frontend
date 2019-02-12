import React, { Component } from "react";
import "./App.css";
import "../Assets/Icons";
import Mocks from "../Assets/Mocks";

import SideMenu from "../Components/SideMenu/SideMenu";
import Main from "../Components/Main/Main";
import Login from "./Login/Login";

class App extends Component {
  constructor(...args) {
    super(...args);
    this.userData = {};
  }

  state = {
    isLoaded: false,
    isLoggedIn: true
  };

  getUsers = () => {
    return fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(json => {
        Mocks.users.forEach(user => {
          user.id = json.length + 1;
          json.push(user);
        });
        this.userData = json;
        return json;
      });
  };

  logIn = (e, values) => {
    e.preventDefault();
    e.stopPropagation();

    this.setState({ isLoaded: false });
    setTimeout(() => {
      let user = this.userData.find(i => i.email === values.email);
      let valid = false;
      if (user) {
        valid = true;
      }
      this.setState({
        isLoggedIn: valid
      });
      this.setState({ isLoaded: true });
    }, 1200);
  };

  logOut = e => {
    this.setState({ isLoaded: false });
    this.getUsers().then(() => {
      setTimeout(() => {
        this.setState({ isLoaded: true, isLoggedIn: false });
      }, 500);
    });
  };

  componentDidMount() {
    this.setState({ isLoaded: false });
    this.getUsers().then(() => {
      setTimeout(() => {
        this.setState({ isLoaded: true });
      }, 500);
    });
  }

  render() {
    let mainView = (
      <div className="App">
        <Login
          isReady={this.state.isLoaded}
          login={this.logIn}
          isLoggedIn={this.state.isLoggedIn && this.state.isLoaded}
        />
      </div>
    );

    if (this.state.isLoggedIn && this.state.isLoaded) {
      mainView = (
        <div className="App">
          <SideMenu
            logout={this.logOut}
            isLoggedIn={this.state.isLoggedIn && this.state.isLoaded}
          />
          <Main
            isLoggedIn={this.state.isLoggedIn && this.state.isLoaded}
            users={this.userData}
          />
        </div>
      );
    }

    return mainView;
  }
}

export default App;
