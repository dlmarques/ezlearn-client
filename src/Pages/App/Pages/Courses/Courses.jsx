import React from "react";
import { Input, Button } from "@nextui-org/react";
import IMAGES from "../../../../img/images";
import "./courses.scss";
import Course from "./components/Course";


const Courses = () => {
  return (
    <>
      <div className="courses-container">
        <div className="operation-bar">
          <Input
            underlined
            labelPlaceholder="Search Courses"
            color="default"
            css={{
              width: "20vw",
            }}
          />
          <Button
            auto
            css={{
              backgroundColor: "#00adb5",
            }}
          >
            Add Course
          </Button>
        </div>
        <div className="courses">
            <Course img={IMAGES.course1} title='JavaScript Master Course' />
            <Course img={IMAGES.course2} title='React Crash Course'/>
            <Course img={IMAGES.course3} title='HTML Basics'/>
            <Course img={IMAGES.course4} title='CSS Master'/>
            <Course img={IMAGES.course5} title='Python Crash Course'/>
            <Course img={IMAGES.course6} title='Angular Crash Course'/>
            <Course img={IMAGES.course1} title='JavaScript Master Course' />
            <Course img={IMAGES.course2} title='React Crash Course'/>
        </div>
      </div>
    </>
  );
};

export default Courses;
