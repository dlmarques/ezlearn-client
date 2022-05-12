import React, { useEffect, useState } from "react";
import { Modal, Button, Text, Input, Row, Checkbox } from "@nextui-org/react";
import {
  HiOutlineMail,
  HiOutlineLockClosed,
  HiOutlineUser,
} from "react-icons/hi";

const Register = ({ registerVisible, closeHandler }) => {
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
            contentLeft={<HiOutlineUser />}
          />
          <Input
            clearable
            bordered
            fullWidth
            color="primary"
            size="lg"
            placeholder="Email"
            type="email"
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
          <Input
            clearable
            bordered
            fullWidth
            color="primary"
            size="lg"
            placeholder="Confirm Password"
            type="password"
            contentLeft={<HiOutlineLockClosed />}
          />
          <Row justify="space-between">
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button auto flat color="error" onClick={closeHandler}>
            Close
          </Button>
          <Button auto onClick={closeHandler}>
            Sign Up
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Register;
