import React, { useState } from "react";

//UI components
import { Modal, Text, Input, Button } from "@nextui-org/react";

//State management
import { useAuth } from "../../../../../contexts/Context";
import { useDispatch, useSelector } from "react-redux";
import { addCourseModalActions } from "../../../../../store/UI/AddCourseModal/AddCourseModal";


const AddCourse = () => {
  const dispatch = useDispatch();
  const { uploadPhoto, currentUser} = useAuth();
  const id = currentUser._delegate.uid;

  const [courseName, setCourseName] = useState();
  const [duration, setDuration] = useState();
  const [photo, setPhoto] = useState();
  const addCourseModalIsOpen = useSelector((state) => state.addCourseUI.addCourseModalIsVisible)

  

  const closeModal = () => dispatch(addCourseModalActions.closeAddCourseModal())

  async function addCourse() {
    try {
     await uploadPhoto(id,courseName, duration ,photo)
     setCourseName('')
     setDuration()
     setPhoto('')  
     closeModal()
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <Modal
        closeButton
        open={addCourseModalIsOpen}
        onClose={closeModal}
        css={{ backgroundColor: "#393E46", paddingBottom: '20px'  }}
      >
        <Modal.Header>
          <Text css={{ color: "#fff", fontSize: "28px" }}>Add Course</Text>
        </Modal.Header>
        <Modal.Body css={{ color: "#fff" }}>
          <label className="label">
            <input type="file" required onChange={(e) => setPhoto(e.target.files[0])} />
            <span>Course Photo</span>
          </label>
          <Input
            type="text"
            css={{ background: "transparent", paddingTop: '20px' }}
            value={courseName}
            label="Course Name"
            onChange={(e) => setCourseName(e.target.value)}
          /> 
          <Input
            type="number"
            css={{ background: "transparent", paddingTop: "20px" }}
            label="Duration"
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
          />         
        </Modal.Body>
        <Modal.Footer css={{display: "flex"}}>
          <Button css={{fontSize: "18px", width: "100%", backgroundColor: "#00ADB5"}} onClick={addCourse}>Submit</Button>
        </Modal.Footer>
      </Modal>
  );
};

export default AddCourse;
