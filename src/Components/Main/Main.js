import React, { Component } from "react";
import "./Main.css";

class Login extends Component {
  constructor(args) {
    super(args);
    this.state = {
      isLoggedIn: args.isLoggedIn
    };
    console.log(args);
  }

  render() {
    let template = false;
    if (this.state.isLoggedIn) {
      template = (
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
    return template;
  }
}

// const Login = props => {
//   if (props.isLoggedIn) {
//     return (
//       <div className="App-main">
//         <header className="App-header">
//           <p>header</p>
//         </header>
//         <div className="App-content container">
//           <h1>Hello World</h1>
//         </div>
//         <footer className="App-footer">
//           <p>footer</p>
//         </footer>
//       </div>
//     );
//   }
//   return false;
// };

export default Login;
