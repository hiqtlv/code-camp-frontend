import React, { Component } from "react";
import "./App.css";
import SideMenu from "../Components/SideMenu/SideMenu";
import Main from "../Components/Main/Main";
import Login from "./Login/Login";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";

import {
  faIgloo,
  faUser,
  faUserTie,
  faUserAstronaut,
  faUserNinja,
  faUserSecret,
  faUserNurse,
  faUserMd,
  faUserInjured,
  faUserGraduate,
  faFilter
} from "@fortawesome/free-solid-svg-icons";

library.add(
  faIgloo,
  faUser,
  faUserTie,
  faUserAstronaut,
  faUserNinja,
  faUserSecret,
  faUserNurse,
  faUserMd,
  faUserInjured,
  faUserGraduate,
  faFilter
);

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
    const appendage = [
      {
        id: 1,
        name: "Mirco Jakse",
        username: "NiM",
        email: "mirco.jakse@hiq.se",
        address: {
          street: "Regeringsgatan 20",
          suite: "9th Story",
          city: "Stockholm",
          zipcode: "111 53",
          geo: {
            lat: "59.3296487",
            lng: "18.0720103"
          }
        },
        phone: "+46 (0)8-588 900 00",
        website: "hiq.se",
        company: {
          name: "HiQ",
          catchPhrase: "Simplicity is the new innovation",
          bs:
            "We simplify peoples lives with the help of technology, design and communication."
        }
      },
      {
        id: 2,
        name: "Ernesto Garcia",
        username: "EG",
        email: "ernesto.garcia@hiq.se",
        address: {
          street: "Regeringsgatan 20",
          suite: "9th Story",
          city: "Stockholm",
          zipcode: "111 53",
          geo: {
            lat: "59.3296487",
            lng: "18.0720103"
          }
        },
        phone: "+46 (0)8-588 900 00",
        website: "hiq.se",
        company: {
          name: "HiQ",
          catchPhrase: "Simplicity is the new innovation",
          bs:
            "We simplify peoples lives with the help of technology, design and communication."
        }
      },
      {
        id: 3,
        name: "Jonas Henriksson",
        username: "JH",
        email: "jonas.henriksson@hiq.se",
        address: {
          street: "Regeringsgatan 20",
          suite: "9th Story",
          city: "Stockholm",
          zipcode: "111 53",
          geo: {
            lat: "59.3296487",
            lng: "18.0720103"
          }
        },
        phone: "+46 (0)8-588 900 00",
        website: "hiq.se",
        company: {
          name: "HiQ",
          catchPhrase: "Simplicity is the new innovation",
          bs:
            "We simplify peoples lives with the help of technology, design and communication."
        }
      }
    ];

    return fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(json => {
        appendage.forEach(user => {
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
    // return (
    //   <div className="App">
    //     <Login
    //       isReady={this.state.isLoaded}
    //       login={this.logIn}
    //       isLoggedIn={this.state.isLoggedIn && this.state.isLoaded}
    //     />
    //     <SideMenu
    //       logout={this.logOut}
    //       isLoggedIn={this.state.isLoggedIn && this.state.isLoaded}
    //     />
    //     <Main
    //       isLoggedIn={this.state.isLoggedIn && this.state.isLoaded}
    //       users={this.userData}
    //     />
    //   </div>
    // );

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
