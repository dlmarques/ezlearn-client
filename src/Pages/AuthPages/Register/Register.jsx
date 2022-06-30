import React, { useState } from "react";
import {useSelector, useDispatch} from 'react-redux'
import "./Register.scss"
import { auth } from "../../../firebase-config";

//UI Components
import { Modal, Button, Text, Input, Row } from "@nextui-org/react";
import {
  HiOutlineMail,
  HiOutlineLockClosed,
  HiOutlineUser,
} from "react-icons/hi";

//state management
import { useAuth } from "../../../contexts/Context";
import {sendEmailVerification, updateProfile} from "firebase/auth"
import { registerModalActions } from "../../../store/UI/RegisterModal/RegisterUI";


const Register = () => {
  const dispatch = useDispatch();
  const { signup, logout } = useAuth()

  //states
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [registerConfirmPassword, setRegisterConfirmPassword] = useState("");
  const [role, setRole] = useState("");
  const [loading, setLoading] = useState(false);
  const registerIsVisible = useSelector((state) => state.registerUI.registerIsVisible)
  
  
  const closeRegisterModal = () => dispatch(registerModalActions.closeRegisterModal())

  const validatePassword = () => {
    let isValid = true;
    if(registerPassword !== '' && registerConfirmPassword !== ''){
      if(registerPassword !== registerConfirmPassword){
        isValid = false;
        //erro
      }
    }
    return isValid
  }

  const register = async (e) => {
    if(validatePassword()){
      try{
        setLoading(true)
        await signup(
          registerEmail, 
          registerPassword,
          firstName,
          lastName,
          role);
         await updateProfile(auth.currentUser, {displayName: username }).catch((err) => 
          console.log(err)
         ) 
         await logout();
         
         await sendEmailVerification(auth.currentUser).catch((err) => 
         console.log(err)
        ) 
        
        closeRegisterModal(); 
      }catch(err){
        console.error(err.message)
      }
      setLoading(false)
    }else{
      console.log('error on registration')
    }
  
  }

  return (
    <>
      <Modal closeButton open={registerIsVisible} onClose={closeRegisterModal}>
        <Modal.Header>
          <Text id="modal-title" size={18}>
            Welcome to <b>EzLearn</b>
          </Text>
        </Modal.Header>
        <Modal.Body>
          <Row css={{gap: "10px"}}>
          <Input
            clearable
            bordered
            fullWidth
            color="primary"
            size="lg"
            placeholder="First Name"
            type="text"
            aria-label="username"
            contentLeft={<HiOutlineUser />}
            onChange={(e) => setFirstName(e.target.value)}
          />
           <Input
            clearable
            bordered
            fullWidth
            color="primary"
            size="lg"
            placeholder="Last Name"
            type="text"
            aria-label="username"
            contentLeft={<HiOutlineUser />}
            onChange={(e) => setLastName(e.target.value)}
          />
          </Row>
          <Input
            clearable
            bordered
            fullWidth
            color="primary"
            size="lg"
            placeholder="Username"
            type="text"
            aria-label="username"
            contentLeft={<HiOutlineUser />}
            onChange={(e) => setUsername(e.target.value)}
          />
          <Input
            clearable
            bordered
            fullWidth
            color="primary"
            size="lg"
            placeholder="Email"
            type="email"
            aria-label="email"
            contentLeft={<HiOutlineMail />}
            onChange={(e) => setRegisterEmail(e.target.value)}
          />
          <Input
            clearable
            bordered
            fullWidth
            color="primary"
            size="lg"
            placeholder="Password"
            type="password"
            aria-label="password"
            contentLeft={<HiOutlineLockClosed />}
            onChange={(e) => setRegisterPassword(e.target.value)}

          />
          <Input
            clearable
            bordered
            fullWidth
            color="primary"
            size="lg"
            placeholder="Confirm Password"
            type="password"
            aria-label="password"
            contentLeft={<HiOutlineLockClosed />}
            onChange={(e) => setRegisterConfirmPassword(e.target.value) }
          />
          <select name="" id="select" onChange={(e) => setRole(e.target.value)}>
            <option hidden selected>Choose your role</option>
            <option value="Seller">Seller</option>
            <option value="Student">Student</option>
          </select>
        </Modal.Body>
        <Modal.Footer>
          <Button auto flat color="error" onClick={closeRegisterModal} disabled={loading}>
            Close
          </Button>
          <Button auto onClick={register}>
            Sign Up
          </Button>
        </Modal.Footer>
      </Modal>
      
    </>
  );
};

export default Register;
