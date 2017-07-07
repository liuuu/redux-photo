import React, { Component } from "react";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import Main from "./components/Main";
import PhotoGrid from "./components/PhotoGrid";
import Single from "./components/Single";

import store from "./store";
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div>
            <Route path="/" exact component={PhotoGrid} />
            <Route path="/view/:postId" component={Single} />
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
