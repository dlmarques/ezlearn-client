import React, { useEffect, useState } from "react";
import { Modal, Text, Input, Avatar, Button } from "@nextui-org/react";
import { useAuth } from "../../../../../contexts/AuthContext";
import { useInfo } from "../../../../../contexts/InfoContext";
import "./UpdateProfile.scss";

const UpdateProfile = ({ openChangeProfile, closeBox }) => {
  const { currentUser } = useAuth();
  const { getUserInfo, updatePhoto, uploadPhoto } = useInfo();
  const [ userPhoto, setUserPhoto] = useState();
  const [ currentPassword, setCurrentPassword] = useState();
  const [ newPassword, setNewPassword] = useState();
  const [ random, setRandom] = useState();


  const [userData, setUserData] = useState();

  const userID = currentUser._delegate.uid;
  const username = currentUser._delegate.displayName;

  useEffect(() => {
    getUserInfo(userID).then((data) => setUserData(data));
    
  });

  async function updatePicture(){
      try {
        await uploadPhoto(userPhoto, userID)
      } catch (error) {
        console.error(error);
      }
  }


  return (
    <>
      <Modal
        closeButton
        open={openChangeProfile}
        onClose={closeBox}
        blur
        css={{ backgroundColor: "#393E46" }}
      >
        <Modal.Header>
          <Text css={{ color: "#fff", fontSize: "28px" }}>Profile</Text>
        </Modal.Header>
        <Modal.Body css={{ color: "#fff" }}>
          <Avatar
            size="xl"
            src={userData && userData.avatar}
            css={{ margin: "auto", height: "150px", width: "150px" }}
          />
          <label class="label">
            <input type="file" required onChange={(e) => setUserPhoto(e.target.files[0])} />
            <span>Change Photo</span>
          </label>
          <Input
            type="text"
            css={{ background: "transparent" }}
            value={username}
            disabled
            label="Username"
          /> 
          <Button css={{fontSize: "18px",backgroundColor: "#00ADB5"}} onClick={updatePicture}>Save Photo</Button>
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
        </Modal.Body>
        <Modal.Footer css={{display: "flex"}}>
          <Button css={{fontSize: "18px", width: "100%", backgroundColor: "#00ADB5"}}>Save Password</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default UpdateProfile;
