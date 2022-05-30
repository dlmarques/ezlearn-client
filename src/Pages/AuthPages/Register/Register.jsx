import React, { useState } from "react";
import { Modal, Button, Text, Input, Row, Card } from "@nextui-org/react";
import {
  HiOutlineMail,
  HiOutlineLockClosed,
  HiOutlineUser,
} from "react-icons/hi";
import { useAuth } from "../../../contexts/AuthContext";
import { auth } from "../../../firebase-config";
import {sendEmailVerification, updateProfile} from "firebase/auth"


const Register = ({registerVisible, closeHandler, setError, error}) => {
  const [registerName, setRegisterName] = useState("");
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [registerConfirmPassword, setRegisterConfirmPassword] = useState("");
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
          registerPassword);
         
          await sendEmailVerification(auth.currentUser).catch((err) => 
          console.log(err)
         ) 
         
         await updateProfile(auth.currentUser, {displayName: registerName }).catch((err) => 
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
            onChange={(e) => setRegisterName(e.target.value)}
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
