import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard";
import SideBar from "./components/Sidebar/SideBar";
import TopBar from "./components/Topbar/TopBar";
import "./styles/app.scss";
import { useAuth } from "../../contexts/AuthContext";
import { Button, Input, Modal, Row, Text } from "@nextui-org/react";
import { useInfo } from "../../contexts/InfoContext";
const App = () => {
  const [closeSide, setCloseSide] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);
  const [visible, setVisible] = useState(false);
  const [userData, setUserData] = useState()
  const { currentUser } = useAuth();
  const { getUserInfo } = useInfo();
  const userID = currentUser._delegate.uid;
  const emailVerified = currentUser.emailVerified;

  useEffect(() => {
    getUserInfo(userID).then((data) => setUserData(data))
    //verify account
    if (emailVerified === false) {
      setVisible(true);
    }
    //set Sidebar size
    if (width <= 950) {
      setCloseSide(true);
    } else {
      setCloseSide(false);
    }
  }, width);



  const verify = () => {
    window.location.reload(false);
  };
  
  return (
    <>
      {!emailVerified === false ? (
        <Modal open={visible} width={800} justify="center">
          <Modal.Header>
            <Text b size={28}>
              Verify your email address
            </Text>
          </Modal.Header>
          <Modal.Body>
            <Row justify="center">
              <Text size={19} css={{ textAlign: "center" }}>
                To access platform, you need verify your email address
              </Text>
            </Row>
          </Modal.Body>
          <Modal.Footer justify="center">
            <Button auto color="primary" onClick={verify}>
              <Text css={{ color: "White", fontWeight: "500" }} size={18}>
                I already checked the email
              </Text>
            </Button>
          </Modal.Footer>
        </Modal>
      ) : (
        <>
          <div className="main-container-app">
            <div className="sidebar-app">
              {" "}
              <SideBar setCloseSide={setCloseSide} closeSide={closeSide} />{" "}
            </div>
            <div
              className={
                closeSide ? "content-container active" : "content-container"
              }
            >
              <div className="topbar">
                {" "}
                <TopBar
                  setCloseSide={setCloseSide}
                  closeSide={closeSide}
                  userData={userData && userData}
                />{" "}
              </div>
              <div className="content">
                <Switch>
                  <Route path="/app">
                    <Dashboard userData={userData}/>
                  </Route>
                </Switch>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default App;
