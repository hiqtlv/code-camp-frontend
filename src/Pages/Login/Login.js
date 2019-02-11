import React from "react";
import "./Login.css";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const Login = props => {
  if (!props.isLoggedIn) {
    console.log(props);
    let email = "";
    let pw = "";
    return (
      <div className="App-login panel">
        <Form onSubmit={e => props.login(e, { email: email, pw: pw })}>
          <Form.Group controlId="formEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={e => {
                console.log(e.target.value);
                email = e.target.value;
              }}
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="formPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              value={pw}
              onChange={e => {
                console.log(e.target.value);
                pw = e.target.value;
              }}
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Login
          </Button>
        </Form>
      </div>
    );
  }
  return false;
};

export default Login;
