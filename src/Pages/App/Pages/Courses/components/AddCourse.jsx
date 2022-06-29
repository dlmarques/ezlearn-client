import React, { useState } from "react";
import { useAuth } from "../../../../../contexts/Context";
import { Modal, Text, Input, Avatar, Button } from "@nextui-org/react";

const AddCourse = ({open, setOpen, setChanged, changed}) => {
  const { uploadPhoto, currentUser, id } = useAuth();
  const [courseName, setCourseName] = useState();
  const [duration, setDuration] = useState();
  const [photo, setPhoto] = useState();

  function closeModal(){
    setOpen(false)
  }

  async function addCourse() {
    try {
     await uploadPhoto(id, courseName, duration ,photo)
     setCourseName('')
     setDuration()
     setPhoto('')
     setChanged(changed + 1)
     closeModal()
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <Modal
        closeButton
        open={open}
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
