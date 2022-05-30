import React, { useState } from "react";
import { Modal, Button, Text, Input, Row, Checkbox, Card } from "@nextui-org/react";
import { HiOutlineMail, HiOutlineLockClosed } from "react-icons/hi";
import { useAuth } from "../../../contexts/AuthContext";
import { Redirect, useHistory } from "react-router-dom";

const Login = ({ logInVisible, closeHandler }) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const { login, currentUser } = useAuth();
  const history = useHistory();

  async function submitLogin(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await login(email, password);
      history.push('/app')
      closeHandler();
    } catch {
      setError("Failed to log in");
    }
    setLoading(false);
  }

  return (
    <>
        
        <Modal closeButton open={logInVisible} onClose={closeHandler}>
          <Modal.Header>
            <Text id="modal-title" size={18}>
              Welcome back to <b>EzLearn</b>
            </Text>
          </Modal.Header>
          <Modal.Body>
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
              onChange={(e) => setEmail(e.target.value)}
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
              onChange={(e) => setPassword(e.target.value)}
            />
            { error &&  
            <Card color="error"className="animate__animated animate__shakeX">
              <Text css={{fontWeight: "bold", color: "white"}}> {error} </Text>
            </Card>
            }
            <Row justify="space-between">
              <Checkbox>
                <Text size={14}>Remember me?</Text>
              </Checkbox>
              <Text size={14}>Forgot Pasword?</Text>
            </Row>
          </Modal.Body>
          <Modal.Footer>
            <Button auto flat color="error" onClick={closeHandler}>
              Close
            </Button>
            <Button auto disabled={loading} onClick={submitLogin}>
              Sign In
            </Button>
          </Modal.Footer>
        </Modal>
      
    </>
  );
};

export default Login;
