import React, { Component } from "react";
import { Link } from "react-router-dom";

class Main extends Component {
  render() {
    return (
      <div>
        <h1>
          <Link to="/">redux</Link>
        </h1>
      </div>
    );
  }
}

export default Main;
