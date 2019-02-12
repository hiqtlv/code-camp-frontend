import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import _ from "lodash";

import "./Main.css";

import Users from "../Users/Users";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      something: true,
      filteredUsers: []
    };
  }

  filterUsers = val => {
    let list = [];
    // if (val.length > 0) {
    list = _.filter(this.props.users, user => {
      return user.name.indexOf(val) > -1 || user.email.indexOf(val) > -1;
    });
    // }
    this.setState({
      filteredUsers: list
    });

    return list;
  };

  componentDidMount() {
    this.filterUsers("");
  }

  render() {
    let template = false;
    if (this.props.isLoggedIn) {
      template = (
        <div className="App-main">
          <header className="App-header">
            <p>header</p>
          </header>
          <div className="App-content">
            <h1>UserList</h1>
            <Form className="container">
              <Form.Group controlId="formEmail">
                <Form.Label>Filter</Form.Label>
                <InputGroup>
                  <InputGroup.Prepend>
                    <InputGroup.Text id="inputGroupPrepend">
                      <FontAwesomeIcon icon="filter" />
                    </InputGroup.Text>
                  </InputGroup.Prepend>
                  <Form.Control
                    type="text"
                    placeholder="Filter Users"
                    onChange={e => this.filterUsers(e.target.value)}
                  />
                </InputGroup>
              </Form.Group>
            </Form>
            <div className="inside">
              <Users users={this.state.filteredUsers} />
            </div>
          </div>
          <footer className="App-footer">
            <p>footer</p>
          </footer>
        </div>
      );
    }
    return template;
  }
}

export default Login;
