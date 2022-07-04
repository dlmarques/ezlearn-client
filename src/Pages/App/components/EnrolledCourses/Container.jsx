import React, { useState, useEffect } from "react";
import { Container, Text } from "@nextui-org/react";
import "./mycourses.scss";
import { useAuth } from "../../../../contexts/Context";
import Course from "./components/Course";

const ContainerChart = () => {
  const [coursesData, setCoursesData] = useState();
  const { getCourses } = useAuth();
  useEffect(() => {
    getCourses().then((coursesData) => setCoursesData(coursesData || []));
  }, []);

  return (
    <>
      <Container
        css={{
          backgroundColor: "#393E46",
          borderRadius: "14px",
          width: "39%",
          minHeight: "100%",
          paddingTop: "20px",
          display: "flex",
          flexDirection: 'column',
          alignItems: 'flex-start',
          gap: '30px'
        }}
      >
        <Text
          css={{
            textAlign: "center",
            width: "100%",
            fontSize: "2rem",
            color: "#eee",
          }}
        >
          Enrolled Courses
        </Text>
        {coursesData && coursesData.map((course, id) => 
        <Course key={id} image={course.image} name={course.courseName} />
        )}
      </Container>
    </>
  );
};

export default ContainerChart;
