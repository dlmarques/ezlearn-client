import React from "react";
import { Container, Text } from "@nextui-org/react";


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
