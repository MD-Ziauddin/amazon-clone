import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./styles/main.scss";

import Header from "./Header.component";
import Home from "./Home.component";
import Checkout from "./Checkout.component";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/checkout">
            <Checkout />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
