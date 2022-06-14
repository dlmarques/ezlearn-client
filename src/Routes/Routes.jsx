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
          <InfoProvider>
            <Switch>
              <PrivateRoute path="/app">
                <App />
              </PrivateRoute>
              <Route path="/">
                <Page />
              </Route>
            </Switch>
          </InfoProvider>
        </AuthProvider>
      </Router>
    </>
  );
};

export default Routes;
