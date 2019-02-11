import React, { Component } from "react";
import "./App.css";
import SideMenu from "./Components/SideMenu/SideMenu";
import Main from "./Components/Main/Main";
import Login from "./Pages/Login/Login";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false
    };
  }

  logIn = e => {
    this.setState({
      isLoggedIn: true
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
