import React from 'react'
import { Modal, Button, Text, Input, Row, Checkbox } from "@nextui-org/react";
import {HiOutlineMail, HiOutlineLockClosed} from "react-icons/hi"

const Login = ({logInVisible, closeHandler}) => {
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
                    contentLeft={<HiOutlineMail />}
                    />
                        <Input 
                    clearable 
                    bordered 
                    fullWidth
                    color="primary"
                    size="lg"
                    placeholder="Password"
                    type="password"
                    contentLeft={<HiOutlineLockClosed />}
                    />
                    <Row justify="space-between">
                      <Checkbox>
                        <Text size={14}>
                          Remember me?
                        </Text>
                      </Checkbox>
                      <Text size={14}>Forgot Pasword?</Text>
                    </Row>
                  </Modal.Body>
                  <Modal.Footer>
                    <Button auto flat color="error" onClick={closeHandler}>
                      Close
                    </Button>
                    <Button auto onClick={closeHandler}>
                      Sign In
                    </Button>
                  </Modal.Footer>
                </Modal>

    </>
  )
}

export default Login