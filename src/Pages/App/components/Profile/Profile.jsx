import React from "react";
import "./profile.scss";
import { Modal, Text, User, Input } from "@nextui-org/react";
import { useDispatch, useSelector } from "react-redux";
import { profileUIActions } from "../../../../store/UI/ProfileModal/ProfileModal";
import { useAuth } from "../../../../contexts/Context";
const Profile = ({ username }) => {
  const dispatch = useDispatch();
  const { currentUser } = useAuth();
  const open = useSelector((state) => state.profileUI.isOpened);
  const avatar = useSelector((state) => state.auth.avatar);
  const firstName = useSelector((state) => state.auth.firstName);
  const lastName = useSelector((state) => state.auth.lastName);
  const role = useSelector((state) => state.auth.role);
  const email = currentUser._delegate.email;

  const closeModal = () => {
    dispatch(profileUIActions.close());
  };

  return (
    <Modal
      closeButton
      open={open}
      onClose={closeModal}
      css={{ backgroundColor: "#393e46", paddingBottom: '20px' }}
      blur
    >
      <Modal.Header>
        <Text css={{ fontSize: "1.3vw", color: "#eee" }}>Profile</Text>
      </Modal.Header>
      <Modal.Body>
        <User src={avatar} name={`${firstName} ${lastName}`}>
          <User.Link>@{username}</User.Link>
        </User>
        <Input disabled placeholder={`@${username}`} className='input-disabled' />
        <Input disabled placeholder={email} className='input-disabled' />
        <Input disabled placeholder={role}  className='input-disabled' />
      </Modal.Body>
    </Modal>
  );
};

export default Profile;
