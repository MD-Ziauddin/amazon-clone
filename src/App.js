import React, { useEffect } from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

import "./styles/main.scss";

import Header from "./Header.component";
import Home from "./Home.component";
import Checkout from "./Checkout.component";
import Login from "./Login.component";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import Payment from "./Payment.component";

const promise = loadStripe(
  "pk_test_51IDW7yKPEKytxUhVTOmYN8qJyRIQmGN6UCDlmM3UAilTqDXfqtddSj3XTAYZ33YVWOlgQFZj7nj0ATuwzUq2VBEo00Xgq1PdqW"
);

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log("The user is ", authUser);

      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
