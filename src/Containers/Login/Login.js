import React from "react";
import "./Login.css";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const Login = props => {
  if (!props.isLoggedIn) {
    let email = "";
    let pw = "";
    let loading = null;

    const classes = ["App-login", "panel"];
    if (!props.isReady) {
      loading = (
        <div className="loading">
          <div className="chasing-dots">
            <div className="dot1" />
            <div className="dot2" />
          </div>
        </div>
      );
    }

    return (
      <div className={classes.join(" ")}>
        <Form onSubmit={e => props.login(e, { email: email, pw: pw })}>
          <Form.Group controlId="formEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              onChange={e => {
                email = e.target.value;
              }}
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          {/* <Form.Group controlId="formPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={e => {
                pw = e.target.value;
              }}
            />
          </Form.Group> */}
          <Button variant="primary" type="submit">
            Login
          </Button>
        </Form>
        {loading}
      </div>
    );
  }
  return false;
};

export default Login;
