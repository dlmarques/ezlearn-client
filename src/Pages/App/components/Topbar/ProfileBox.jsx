import React from 'react'
import { Button, Input, Popover, Container, User, Grid, Row, Text} from "@nextui-org/react";
import {FiUser} from "react-icons/fi"
import { BsCalendarDate} from 'react-icons/bs'
import { BiLogOut} from 'react-icons/bi'
import { IoSettingsOutline} from 'react-icons/io5'

const ProfileBox = () => {
  return (
    <>
    <Grid.Container>
        <Row css={{display: "flex", justifyContent: "center", padding: "0"}}>
            <Text css={{color: "#00ADB5", padding: "0", paddingTop: "10px"}}>Welcome Jane</Text>
        </Row>
        <Row>
            <Text css={{color: "#eeeeee", display: "flex", alignItems: "center", gap:"5px", fontSize: "18px", paddingLeft: "10px", paddingBottom: "10px", paddingTop: "10px", cursor: "pointer", transition: "all .3s ease" ,'&:hover':{
                color: "#eeeeeec9"
            }}}>
                <FiUser/>
                Profile</Text>
        </Row>
        <Row>
            <Text css={{color: "#eeeeee", display: "flex", alignItems: "center", gap:"5px", fontSize: "18px", paddingLeft: "10px", paddingBottom: "10px", cursor: "pointer", transition: "all .3s ease" ,'&:hover':{
                color: "#eeeeeec9"
            }}}>
                <BsCalendarDate/>
                Calendar</Text>
        </Row>
        <Row>
            <Text css={{color: "#eeeeee", display: "flex", alignItems: "center", gap:"5px", fontSize: "18px", paddingLeft: "10px", paddingBottom: "10px", cursor: "pointer", transition: "all .3s ease" ,'&:hover':{
                color: "#eeeeeec9"
            }}}>
                <IoSettingsOutline/>
                Settings</Text>
        </Row>
        <Row>
            <Text css={{color: "#eeeeee", display: "flex", alignItems: "center", gap:"5px", fontSize: "18px", paddingLeft: "10px", paddingBottom: "10px",  cursor: "pointer", transition: "all .3s ease" ,'&:hover':{
                color: "#eeeeeec9"
            }}}>
                <BiLogOut/>
                Logout</Text>
        </Row>
    </Grid.Container>
    </>
  )
}

export default ProfileBox