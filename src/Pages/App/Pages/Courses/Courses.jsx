import React, { useState, useEffect } from "react";
import { Input, Button } from "@nextui-org/react";
import "./courses.scss";
import Course from "./components/Course";
import AddCourse from './components/AddCourse'
import { useAuth } from "../../../../contexts/Context";


const Courses = () => {
  const {getCourses} = useAuth()
  const [openCourseHandler, setOpenCourseHandler] = useState(false);
  const [coursesData, setCoursesData] = useState()
  const [changed, setChanged] = useState(0)

  useEffect(() => {
    async function requestCourses(){
     await getCourses().then((coursesData) => setCoursesData(coursesData || []))
    }
    requestCourses();
  }, [changed])

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
            onClick={() => setOpenCourseHandler(true)}
          >
            Add Course
          </Button>
        </div>
        <AddCourse open={openCourseHandler} setOpen={setOpenCourseHandler} setChanged={setChanged} changed={changed} />
        <div className="courses">
            {coursesData && 
            coursesData.map((course) => 
            <Course img={course.image} title={course.courseName} duration={course.duration} />
            )}
        </div>
      </div>
    </>
  );
};

export default Courses;
