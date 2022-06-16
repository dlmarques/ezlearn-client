import { Avatar, Container, Row, Text } from '@nextui-org/react'
import React from 'react'
import {HiDotsHorizontal} from "react-icons/hi"

const TasksContainer = () => {
  return (
    <>
    <Container
      css={{
        backgroundColor: "#393E46",
        borderRadius: "14px",
        width: "30%",
        height: "350px"
      }}
    >
    <Row css={{display: "flex", alignItems:"center", justifyContent: "space-between", paddingBottom: "20px", paddingTop: "20px", width: "100%"}}>
        <Container >
        <Text css={{color: "#eeeeee", fontWeight: "500", fontSize: "2rem"}}>Upcoming Tasks</Text>
        <Text css={{color: "#bbbbbb", fontWeight: "300"}}>Friday 20th June 2022</Text>
        </Container>
    </Row>
    <Row css={{paddingTop:"20px", display: "flex", alignItems: "center"}}>
        <Avatar
        src='https://cdn-icons-png.flaticon.com/512/1414/1414305.png'
        size="lg"
        />
        <Container>
        <Text css={{color: "#eeeeee", fontWeight: "500", cursor: "pointer"}}>
            Discussion Algortihm
        </Text>
        <Text css={{color: "#bbbbbb", fontWeight: "300"}}>
            08:00AM - 15:30PM
        </Text>
        </Container>
    </Row>
    <Row css={{paddingTop:"40px", display: "flex", alignItems: "center"}}>
        <Avatar
        src='https://cdn-icons-png.flaticon.com/512/1414/1414296.png'
        size="lg"
        />
        <Container>
        <Text css={{color: "#eeeeee", fontWeight: "500", cursor: "pointer"}}>
            Simple Landing Page Design
        </Text>
        <Text css={{color: "#bbbbbb", fontWeight: "300"}}>
            09:00AM - 12:30PM
        </Text> 
        </Container>
    </Row>
    <Row css={{display: "flex", justifyContent:"center", paddingTop: "40px", cursor: "pointer"}}>
        <Text css={{color: "#00ADB5"}}>
            See all
        </Text>
    </Row>
    </Container>
    </>
  )
}

export default TasksContainer