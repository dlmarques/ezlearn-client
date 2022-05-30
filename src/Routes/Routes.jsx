import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import App from "../Pages/App/App";
import Page from "../Pages/LandingPage/Page";
import { AuthProvider } from "../contexts/AuthContext";
import PrivateRoute from "./PrivateRoute";

const Routes = () => {
  return (
    <>
      <Router>
        <AuthProvider>
          <Switch>
            <PrivateRoute path="/app">
              <App />
            </PrivateRoute>
            <Route path="/">
              <Page />
            </Route>
          </Switch>
        </AuthProvider>
      </Router>
    </>
  );
};

export default Routes;
