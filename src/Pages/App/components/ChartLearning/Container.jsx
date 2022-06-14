import React from "react";
import {
  Container,
  Row,
  Col,
  Text,
  Grid,
  Popover,
  Button,
} from "@nextui-org/react";
import ChartLearning from "./ChartLearning";
import {MdOutlineKeyboardArrowDown} from "react-icons/md"
import {FaCircle} from "react-icons/fa"

const ContainerChart = () => {
  return (
    <>
      <Container
        css={{
          backgroundColor: "#393E46",
          borderRadius: "14px",
          width: "650px",
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
            Learning time
          </Text>
          <Popover >
            <Popover.Trigger>
              <Button auto css={{backgroundColor: "transparent", fontSize: "16px"}}>
                Today <MdOutlineKeyboardArrowDown/>
              </Button>
            </Popover.Trigger>
            <Popover.Content>
              <Text css={{ p: "$10" }}>
                Last 7 days
              </Text>
              <Text css={{ p: "$10" }}>
                Last Month
              </Text>
              <Text css={{ p: "$10" }}>
                Last Year
              </Text>
            </Popover.Content>
          </Popover>
        </Row>
        <Row css={{ display: "flex", justifyContent: "center" }}>
          <ChartLearning />
        </Row>
        <Row css={{paddingBottom: "30px", paddingTop: "30px"}}>
            <Container css={{display: "flex", alignItems: "center", gap: "2px"}}>
                <Text> <FaCircle style={{color: "#007cb5"}}/> </Text> <Text css={{color: "#eeeeee"}}>Reading</Text>
            </Container>
            <Container css={{display: "flex", alignItems: "center", gap: "2px"}}>
                <Text> <FaCircle style={{color: "#00C49F"}}/> </Text> <Text css={{color: "#eeeeee"}}>Writing</Text>
            </Container>
            <Container css={{display: "flex", alignItems: "center", gap: "2px"}}>
                <Text> <FaCircle style={{color: "#FFBB28"}}/> </Text> <Text css={{color: "#eeeeee"}}>Video</Text>
            </Container>
        </Row>
      </Container>
    </>
  );
};

export default ContainerChart;
