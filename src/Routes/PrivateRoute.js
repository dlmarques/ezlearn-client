import React from "react";
import { Route } from "react-router-dom";
import { useAuth } from "../contexts/Context";
import Page from "../Pages/LandingPage/Page";

export default function PrivateRoute({ children, ...rest }) {
  const { currentUser } = useAuth();
  return(
    <Route {...rest} render={() => (currentUser ? children : <Page/>)} />
  ) 

}
