import React, { useState } from "react";
import { Modal, Button, Text, Input, Row, Card, Radio } from "@nextui-org/react";
import {
  HiOutlineMail,
  HiOutlineLockClosed,
  HiOutlineUser,
} from "react-icons/hi";
import "./Register.scss"
import { useAuth } from "../../../contexts/AuthContext";
import { auth } from "../../../firebase-config";
import {sendEmailVerification, updateProfile} from "firebase/auth"


const Register = ({registerVisible, closeHandler, setError, error}) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [registerConfirmPassword, setRegisterConfirmPassword] = useState("");
  const [role, setRole] = useState("");
  const [loading, setLoading] = useState(false);
  const [finished, setFinished] = useState(false);
  const { signup, logout } = useAuth()
  


  const validatePassword = () => {
    let isValid = true;
    if(registerPassword !== '' && registerConfirmPassword !== ''){
      if(registerPassword !== registerConfirmPassword){
        isValid = false;
        setError('Passwords does not match')
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
         
          await sendEmailVerification(auth.currentUser).catch((err) => 
          console.log(err)
         ) 
         
         await updateProfile(auth.currentUser, {displayName: username }).catch((err) => 
          console.log(err)
         ) 
         await logout();
         
          closeHandler(); 
          setFinished(true)
      }catch(err){
        console.error(err.message)
        setFinished(false)
      }
      setLoading(false)
    }else{
      console.log('error on registration')
      setFinished(false)
    }
  
  }

  const closeVerifyBox = () => {
      setFinished(false)
  }

  return (
    <>
      <Modal closeButton open={registerVisible} onClose={closeHandler}>
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
          <Row justify="space-between">
          { error &&  
            <Card color="error"className="animate__animated animate__shakeX">
              <Text css={{fontWeight: "bold", color: "white"}}> {error} </Text>
            </Card>
          }
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button auto flat color="error" onClick={closeHandler} disabled={loading}>
            Close
          </Button>
          <Button auto onClick={register}>
            Sign Up
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal closeButton open={finished} onClose={closeVerifyBox}>
        <Modal.Header css={{display: "flex", justifyContent: "center"}}>
            <img src="https://svgshare.com/i/B1t.svg" alt="" style={{height: "150px"}} />
        </Modal.Header>
        <Modal.Body>
          <Text css={{fontSize: "22px", textAlign: "center", fontWeight: "300"}}>Check your email inbox and verify your account!</Text>
        </Modal.Body>
      </Modal>
      
    </>
  );
};

export default Register;
