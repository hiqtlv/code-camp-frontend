import React from "react";
import "./SideMenu.css";

import Button from "react-bootstrap/Button";

const SideMenu = props => {
  if (props.isLoggedIn) {
    return (
      <aside className="App-aside">
        <header>
          <h1>Menu</h1>
        </header>
        <Button
          className="logout"
          onClick={props.logout}
          variant="primary"
          type="button"
        >
          Logout
        </Button>
      </aside>
    );
  }
  return false;
};

export default SideMenu;
