import React, {useState, useMemo} from "react";
import {
  Container,
  Row,
  Text,
  Popover,
  Button,
  Dropdown
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
          width: "59%",
          minHeight: "100%",
          display: "flex",
          alignItems: "center"
        }}
      >
        <Text css={{textAlign: "center", width: "100%", fontSize: "2rem", color: "#eee"}}>
          Coming Soon...
        </Text>
      </Container>
    </>
  );
};

export default ContainerChart;
