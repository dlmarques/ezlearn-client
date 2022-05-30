import React, { useState, useEffect } from 'react'
import { Switch, Route, } from "react-router-dom";
import Dashboard from './components/Dashboard/Dashboard';
import SideBar from './components/Sidebar/SideBar'
import TopBar from './components/Topbar/TopBar'
import './styles/app.scss'
import { useAuth } from '../../contexts/AuthContext';


const App = () => {
    const [closeSide, setCloseSide] = useState(false)
    const [width, setWidth] = useState(window.innerWidth)
    const {isLoggedIn} = useAuth();

    useEffect(() => {
      if(width <= 950){
        setCloseSide(true)
      }else{
        setCloseSide(false)
      }
  
    }, width)
    console.log(isLoggedIn);
  return (
    <>
    <div className="main-container-app">
        <div className="sidebar-app"> <SideBar setCloseSide={setCloseSide} closeSide={closeSide}/> </div>
        <div className="content-container">
            <div className="topbar"> <TopBar setCloseSide={setCloseSide} closeSide={closeSide} /> </div>
            <div className="content">
          <Switch>
            <Route path="/app">
            <Dashboard/>
            </Route>
          </Switch>
        </div>
        </div>
    </div>
    </>
  )
}

export default App