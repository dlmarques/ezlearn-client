import React from "react";

//UI components
import { Grid, Row, Text } from "@nextui-org/react";
import { FiUser } from "react-icons/fi";
import { BsCalendarDate } from "react-icons/bs";
import { BiLogOut } from "react-icons/bi";
import { IoSettingsOutline } from "react-icons/io5";
import Profile from "../Profile/Profile";

//State Management
import { useAuth } from "../../../../contexts/Context";
import { useDispatch } from "react-redux";
import { changeProfileModalActions } from "../../../../store/UI/ChangeProfileModal/ChangeProfileModal";
import { profileUIActions } from "../../../../store/UI/ProfileModal/ProfileModal";

const ProfileBox = () => {
  const dispatch = useDispatch();
  const { currentUser, logout } = useAuth();
  const username = currentUser._delegate.displayName;
  
  const openChangeProfile = () => dispatch(changeProfileModalActions.openModal())

  const openProfile = () => {
    dispatch(profileUIActions.open())
  }

  return (
    <>
      <Grid.Container>
        <Row css={{ display: "flex", justifyContent: "center", padding: "0" }}>
          <Text
            css={{
              color: "#00ADB5",
              fontSize: "1.5em",
              padding: "0",
              paddingTop: "10px",
            }}
          >
            Welcome {currentUser && username}
          </Text>
        </Row>
        <Row>
          <Text
            css={{
              color: "#eeeeee",
              display: "flex",
              alignItems: "center",
              gap: "5px",
              fontSize: "20px",
              paddingLeft: "10px",
              paddingBottom: "10px",
              paddingTop: "10px",
              cursor: "pointer",
              transition: "all .3s ease",
              "&:hover": {
                color: "#eeeeeec9",
              },
            }}
            onClick={openProfile}
          >
            <FiUser />
            Profile
          </Text>
        </Row>
        <Row>
            <Text
              css={{
                color: "#eeeeee",
                display: "flex",
                alignItems: "center",
                gap: "5px",
                fontSize: "20px",
                paddingLeft: "10px",
                paddingBottom: "10px",
                cursor: "pointer",
                transition: "all .3s ease",
                "&:hover": {
                  color: "#eeeeeec9",
                },
              }}
            >
              <BsCalendarDate />
              <a href="/app/calendar" style={{textDecoration: 'none', color: '#eee'}}>Calendar</a>
            </Text>
        </Row>
        <Row>
          <Text
            css={{
              color: "#eeeeee",
              display: "flex",
              alignItems: "center",
              gap: "5px",
              fontSize: "20px",
              paddingLeft: "10px",
              paddingBottom: "10px",
              cursor: "pointer",
              transition: "all .3s ease",
              "&:hover": {
                color: "#eeeeeec9",
              },
            }}
            onClick={openChangeProfile}
          >
            <IoSettingsOutline />
            Settings
          </Text>
        </Row>
        <Row>
          <Text
            css={{
              color: "#eeeeee",
              display: "flex",
              alignItems: "center",
              gap: "5px",
              fontSize: "20px",
              paddingLeft: "10px",
              paddingBottom: "10px",
              cursor: "pointer",
              transition: "all .3s ease",
              "&:hover": {
                color: "#eeeeeec9",
              },
            }}
            onClick={logout}
          >
            <BiLogOut />
            Logout
          </Text>
        </Row>
      </Grid.Container>
      <Profile username={username} />
    </>
  );
};

export default ProfileBox;
