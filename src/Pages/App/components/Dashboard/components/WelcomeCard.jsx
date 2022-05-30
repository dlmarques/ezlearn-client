import React from 'react'
import { Card, Container, Grid, Image, Text } from "@nextui-org/react";
import learn from "../../../../../img/learn.png"

const WelcomeCard = () => {
  return (
    <>
    <Card css={{backgroundColor: "#00ADB5", width: "1100px", height: "250px", display: "flex", alignItems: "center", flexDirection: "row"}} >
        <Container>
        <Text css={{fontWeight: "700", fontSize: "2.7rem", color: "#eeeeee"}}>Welcome back Jane!</Text>
        <Text css={{paddingTop: "50px", color: "#eeeeee", fontSize: "23px"}}>You have complete 5 lessons in last day!</Text>
        <Text css={{color: "#eeeeee", fontSize: "23px"}}>Start you day learning!</Text>
        </Container>
        <Container>
            <Image
                src={learn}
                css={{height: "200px"}}
            />
        </Container>
          </Card>
          
    </>
  )
}

export default WelcomeCard