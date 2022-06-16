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
  const [selected, setSelected] = useState(new Set(["Today"]))
  
  const selectedValue = useMemo(
    () => Array.from(selected).join(", ").replaceAll("_", " "),
    [selected]
  )

  return (
    <>
      <Container
        css={{
          backgroundColor: "#393E46",
          borderRadius: "14px",
          width: "59%",
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
          <Dropdown >
            <Dropdown.Button css={{backgroundColor: "transparent", fontSize: "16px"}}>
              {selectedValue}
            </Dropdown.Button>
            <Dropdown.Menu
            aria-label="Single selection actions"
            color="secondary"
            disallowEmptySelection
            selectionMode="single"
            selectedKeys={selected}
            onSelectionChange={setSelected}
            >
              <Dropdown.Item key="Today" css={{ p: "$10", cursor: "pointer" }}>
                Today
              </Dropdown.Item>
              <Dropdown.Item key="Last 7 days" css={{ p: "$10", cursor: "pointer" }}>
                Last 7 days
              </Dropdown.Item>
              <Dropdown.Item key="Last month" css={{ p: "$10", cursor: "pointer" }}>
                Last Month
              </Dropdown.Item>
              <Dropdown.Item key="Last year" css={{ p: "$10", cursor: "pointer" }}>
                Last Year
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
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
