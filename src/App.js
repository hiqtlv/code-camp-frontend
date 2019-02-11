import React, { Component } from "react";
import "./App.css";
import SideMenu from "./Components/SideMenu/SideMenu";
import Main from "./Components/Main/Main";
import Login from "./Pages/Login/Login";

class App extends Component {
  constructor(...args) {
    super(...args);
    console.log(arguments);
    this.state = {
      isLoggedIn: false
    };
    this.userData = {};
  }

  getUsers = () => {
    return [
      {
        username: "NiM",
        email: "mirco.jakse@hiq.se"
      },
      {
        username: "EG",
        email: "ernesto.garcia@hiq.se"
      },
      {
        username: "JH",
        email: "jonas.henriksson@hiq.se"
      }
    ];
  };

  logIn = (e, values) => {
    e.preventDefault();
    e.stopPropagation();

    let user = this.getUsers().filter(i => i.email === values.email);
    let valid = false;
    if (user.length === 1) {
      valid = true;
    }
    console.log(valid, values, user, this.getUsers());
    this.setState({
      isLoggedIn: valid
    });
  };
  logOut = e => {
    this.setState({
      isLoggedIn: false
    });
  };

  render() {
    return (
      <div className="App">
        <Login
          login={this.logIn.bind(this)}
          isLoggedIn={this.state.isLoggedIn}
        />
        <SideMenu
          logout={this.logOut.bind(this)}
          isLoggedIn={this.state.isLoggedIn}
        />
        <Main isLoggedIn={this.state.isLoggedIn} />
      </div>
    );
  }
}

export default App;
