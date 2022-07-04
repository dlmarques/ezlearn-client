import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Input, Button } from "@nextui-org/react";
import "./courses.scss";

//UI Components
import Course from "./components/Course";
import AddCourse from "./components/AddCourse";

//State management
import { useAuth } from "../../../../contexts/Context";
import { addCourseModalActions } from "../../../../store/UI/AddCourseModal/AddCourseModal";

const Courses = () => {
  const dispatch = useDispatch();
  const { getCourses } = useAuth();

  const [coursesData, setCoursesData] = useState();
  const [input, setInput] = useState('')
  const courses = useSelector((state) => state.courses.courses);
  const role = useSelector((state) => state.auth.role)

  const openAddCourseModal = () => dispatch(addCourseModalActions.openAddCourseModal())

  useEffect(() => {
    getCourses().then((coursesData) => setCoursesData(coursesData || []));
  }, [courses]);

  

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
            onChange={e => setInput(e.target.value)}
          />
         {role === 'Student' && <Button
            auto
            css={{
              backgroundColor: "#00adb5",
            }}
            onClick={openAddCourseModal}
          >
            Add Course
          </Button>}
        </div>
        <AddCourse />
        <div className="courses">
          {coursesData &&
            coursesData
            .filter((val) => {
              if(input == ''){
                return val
              }else if(val.courseName.toLowerCase().includes(input.toLowerCase())){
                return val
              }
            })
            .map((course, id) => (
              <Course
                key={id}
                img={course.image}
                title={course.courseName}
                duration={course.duration}
              />
            ))
          
          }
        </div>
      </div>
    </>
  );
};

export default Courses;
