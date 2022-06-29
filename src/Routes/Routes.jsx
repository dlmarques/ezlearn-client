import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import App from "../Pages/App/App";
import Page from "../Pages/LandingPage/Page";
import { ContextProvider } from "../contexts/Context";
import PrivateRoute from "./PrivateRoute";

const Routes = () => {
  return (
    <>
      <Router>
        <ContextProvider>
            <Switch>
              <PrivateRoute path="/app">
                <App />
              </PrivateRoute>
              <Route path="/">
                <Page />
              </Route>
            </Switch>
        </ContextProvider>
      </Router>
    </>
  );
};

export default Routes;
