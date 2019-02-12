import React, { Component } from "react";

class ErrorBoundary extends Component {
  state = {
    hasError: false,
    errorMessage: "",
    info: ""
  };

  componentDidCatch = (error, info) => {
    this.setState({
      hasError: true,
      errorMessage: error,
      info: info
    });
  };
  render() {
    if (this.state.hasError) {
      return (
        <div>
          <h1>You have encountered an error!</h1>
          <p>{this.state.errorMessage}</p>
          <p>{this.state.info}</p>
        </div>
      );
    } else {
      return this.props.children;
    }
  }
}

export default ErrorBoundary;
