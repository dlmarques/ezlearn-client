import React from 'react'
import { Text, Button, Grid, Row } from "@nextui-org/react";
import NotificationItem from './NotificationItem';
import {FiPlusCircle} from "react-icons/fi"

const Notifications = () => {
  return (
    <>
    <Grid.Container
    css={{borderRadius: "15px"}}
    >
        <Row css={{paddingBottom: "10px"}}>
            <Text css={{color: "#eeeeee", paddingLeft: "10px", fontWeight: "500"}}>
                Notifications
            </Text>
        </Row>
        <Row css={{backgroundColor: "#22283188"}}>
            <Text css={{color: "#eeeeee", paddingLeft: "10px", fontWeight: "300"}}>New</Text>
        </Row>
        <Row>
            <NotificationItem avatar="https://i.pravatar.cc/150?u=a042581f4e29026024d" name="John Smith" message="Your task changed an issue from In progress to Review" time="1"/>
        </Row>
        <Row>
        <NotificationItem avatar="https://i.pravatar.cc/150?u=a042581f4e29026704d" name="Jane Williams" message="Your task changed an issue from In progress to Review" time="4"/>
        </Row>
     
        <Row css={{display: "flex", justifyContent: "center", paddingTop: "10px"}}>
            <Text css={{color: "#eeeeee", fontWeight: "700", display: "flex", alignItems: "center", gap: "5px", fontSize: "18px"}}>
                <FiPlusCircle/> See More
            </Text>
        </Row>
    </Grid.Container>
    </>
  )
}

export default Notifications