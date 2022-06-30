import React from 'react'
import { Text, Grid, Row, Avatar } from "@nextui-org/react";

const NotificationItem = ({avatar, name, message, time}) => {
  return (
    <>
    <Grid.Container>
        <Row css={{paddingTop: "20px", paddingLeft: "20px" , width: "100%", display: "flex", justifyContent: "flex-start", alignItems: "center", gap: "10px"}}>
            <Avatar
            squared
            src={avatar}
            />
            <Text >
                <Row>
                    <Text css={{color: "#eeeeee", fontSize: "15px", fontWeight: "700"}}>{name}</Text>
                </Row>
                <Row>
                    <Text css={{color: "#eeeeee", fontSize: "14px"}}>
                        {message}
                    </Text>
                </Row>
                <Row>
                <Text css={{color: "#eeeeee", fontSize: "13px", fontWeight: "300"}}>{time} hour ago</Text>
                </Row>
            </Text>
        </Row>
    </Grid.Container>
    </>
  )
}

export default NotificationItem