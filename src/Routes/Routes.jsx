import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import App from "../Pages/App/App";
import Page from "../Pages/LandingPage/Page";
import { AuthProvider } from "../contexts/AuthContext";
import PrivateRoute from "./PrivateRoute";
import { InfoProvider } from "../contexts/InfoContext";

const Routes = () => {
  return (
    <>
      <Router>
        <AuthProvider>
          <Switch>
            <InfoProvider>
            <PrivateRoute path="/app">
              <App />
            </PrivateRoute>
            </InfoProvider>
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
