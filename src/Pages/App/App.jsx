import React, { useState, useEffect } from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import "./styles/app.scss";

//UI Components
import Dashboard from "./Pages/Dashboard/Dashboard";
import SideBar from "./components/Sidebar/SideBar";
import TopBar from "./components/Topbar/TopBar";
import CalendarPage from "./Pages/Calendar/CalendarPage";
import Courses from "./Pages/Courses/Courses";

//State management
import { useAuth } from "../../contexts/Context";
import { useDispatch, useSelector } from "react-redux";
import { sidebarActions } from "../../store/UI/SideBar/sidebar";

const App = () => {
  const dispatch = useDispatch();
  let { path } = useRouteMatch();
  const { getUserInfo, userID } = useAuth();
  const width = window.innerWidth;
  const sidebar = useSelector((state) => state.sidebarUI.isOpened);

  const openSidebar = () => dispatch(sidebarActions.openSidebar());
  const closeSidebar = () => dispatch(sidebarActions.closeSidebar());

  useEffect(() => {

    const getData = async () => {
      await getUserInfo(userID)(dispatch);
    } 
    getData()

    //set Sidebar size
    if (width <= 950) {
      closeSidebar();
    } else {
      openSidebar();
    }
  }, [width]);

  return (
    <>
      <>
        <div className="main-container-app">
          <div className="sidebar-app">
            {" "}
            <SideBar/>{" "}
          </div>
          <div className={sidebar ? "topbar active" : "topbar"}>
            {" "}
            <TopBar/>{" "}
          </div>
          <div
            className={
              sidebar ? "content-container active" : "content-container"
            }
          >
            <Switch>
              <Route exact path={path}>
                <Dashboard />
              </Route>
              <Route path={`${path}/calendar`}>
                <CalendarPage />
              </Route>
              <Route path={`${path}/courses`}>
                <Courses />
              </Route>
            </Switch>
          </div>
        </div>
      </>
    </>
  );
};

export default App;
