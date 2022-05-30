import React from 'react'
import {
    Container,
    Row,
    Col,
    Text,
    Grid,
    Popover,
    Button,
  } from "@nextui-org/react";
  import {MdOutlineKeyboardArrowDown} from "react-icons/md"
  import {FaCircle} from "react-icons/fa"
import ChartActivity from './ChartActivity';
  

const ContainerActivity = () => {
  return (
    <>
          <Container
        css={{
          backgroundColor: "#393E46",
          borderRadius: "14px",
          width: "550px",
          height: "350px"
        }}
      >
        <Row css={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingTop: "20px" }}>
          <Text
            css={{
              color: "#eeeeee",
              fontSize: "2rem",
              fontWeight: "500",
            }}
          >
            My Activity
          </Text>
        </Row>
        <Row css={{display: "flex", justifyContent: "center", paddingTop: "20px"}}>
          <ChartActivity />
        </Row>
        <Row css={{ paddingTop: "100px"}}>
            <Container css={{display: "flex", alignItems: "center", gap: "2px"}}>
            <Text css={{color: "#eeeeee", fontSize: "18px"}}>Jan</Text>
            </Container>
            <Container css={{display: "flex", alignItems: "center", gap: "2px"}}>
                <Text css={{color: "#eeeeee",  fontSize: "18px"}}>Feb</Text>
            </Container>
            <Container css={{display: "flex", alignItems: "center", gap: "2px"}}>
                 <Text css={{color: "#eeeeee",  fontSize: "18px"}}>Mar</Text>
            </Container>
            <Container css={{display: "flex", alignItems: "center", gap: "2px"}}>
                 <Text css={{color: "#eeeeee",  fontSize: "18px"}}>Apr</Text>
            </Container>
            <Container css={{display: "flex", alignItems: "center", gap: "2px"}}>
                 <Text css={{color: "#eeeeee",  fontSize: "18px"}}>May</Text>
            </Container>
            <Container css={{display: "flex", alignItems: "center", gap: "2px"}}>
                 <Text css={{color: "#eeeeee",  fontSize: "18px"}}>Jun</Text>
            </Container>
        </Row>
      </Container>
    </>
  )
}

export default ContainerActivity