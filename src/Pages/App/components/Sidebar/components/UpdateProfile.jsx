import React, { useState } from "react";
import "./UpdateProfile.scss";

//UI Components
import { Modal, Text, Input, Button } from "@nextui-org/react";

//State management
import { useAuth } from "../../../../../contexts/Context";
import { useDispatch, useSelector } from "react-redux";
import { changeProfileModalActions } from "../../../../../store/UI/ChangeProfileModal/ChangeProfileModal";

const UpdateProfile = () => {
  const dispatch = useDispatch()
  const { changePassword, logout, username } = useAuth();
  const [ currentPassword, setCurrentPassword] = useState();
  const [ newPassword, setNewPassword] = useState();
  const [ error, setError] = useState();
  const changeProfileUI = useSelector((state) => state.changeProfileUI.isOpened)


  const closeModal = () => dispatch(changeProfileModalActions.closeModal())

  async function updatePassword(){
    try{
      if(currentPassword && newPassword){
        await changePassword(newPassword);
        setError()
        console.log("done");
        logout()
      }else{
        setError("Complete all inputs")
      }
    }catch(err){
      console.error(err);
      setError()
    }
  }

  return (
    <>
      <Modal
        closeButton
        open={changeProfileUI}
        onClose={closeModal}
        blur
        css={{ backgroundColor: "#393E46" }}
      >
        <Modal.Header>
          <Text css={{ color: "#fff", fontSize: "28px" }}>Profile</Text>
        </Modal.Header>
        <Modal.Body css={{ color: "#fff" }}>
          <Input
            type="text"
            css={{ background: "transparent" }}
            value={username} 
            disabled
            label="Username"
          /> 
          <Text css={{ color: "#fff", fontSize: "24px", textAlign: "center" }}>Change Password</Text>
          <Input
            type="password"
            css={{ background: "transparent", paddingTop: "20px" }}
            label="Current Password"
            onChange={(e) => setCurrentPassword(e.target.value)}
          />         
          <Input
            type="password"
            css={{ background: "transparent" }}
            label="New Password"
            onChange={(e) => setNewPassword(e.target.value)}
          />
           {error && error}
        </Modal.Body>
        <Modal.Footer css={{display: "flex"}}>
          <Button css={{fontSize: "18px", width: "100%", backgroundColor: "#00ADB5"}} onClick={updatePassword}>Save Password</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default UpdateProfile;
