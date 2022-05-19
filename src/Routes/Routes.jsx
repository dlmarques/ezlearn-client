import React from 'react'
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"

import Register from '../AuthPages/Register/Register'

import App from '../App/App'

import Page from '../Page'
import Dashboard from '../App/components/Dashboard/Dashboard'
const Routes = () => {
  return (
    <>
    <Router>
        <Switch>
            <Route path="/app">
              <App/>
            </Route>
            <Route path="/">
            <Page/>
            </Route>
        </Switch>
    </Router>
    </>
  )
}

export default Routes