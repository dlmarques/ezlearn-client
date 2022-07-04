import { Button } from "@nextui-org/react";
import React from "react";

const Course = ({image, name}) => {
  return (
    <div className="course-dashboard">
      <div className="image">
        <img src={image} alt="" />
      </div>
      <div className="text">
        <h3>{name}</h3>
      </div>
      <Button auto css={{ backgroundColor: '#00adb5'}}>Back to course</Button>
    </div>
  );
};

export default Course;
