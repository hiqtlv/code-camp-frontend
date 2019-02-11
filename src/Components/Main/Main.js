import React from "react";
import "./Main.css";

const Login = props => {
  if (props.isLoggedIn) {
    return (
      <div className="App-main">
        <header className="App-header">
          <p>header</p>
        </header>
        <div className="App-content container">
          <h1>Hello World</h1>
        </div>
        <footer className="App-footer">
          <p>footer</p>
        </footer>
      </div>
    );
  }
  return false;
};

export default Login;
