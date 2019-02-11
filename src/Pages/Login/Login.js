import React from "react";
import "./Login.css";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const Login = props => {
  if (!props.isLoggedIn) {
    console.log(props);
    return (
      <div className="App-login panel">
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Button onClick={props.login} variant="primary" type="button">
            Login
          </Button>
        </Form>
      </div>
    );
  }
  return false;
};

export default Login;
