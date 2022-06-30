import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

//UI Components
import { Modal, Button, Text, Input, Row, Checkbox } from "@nextui-org/react";
import { HiOutlineMail, HiOutlineLockClosed } from "react-icons/hi";
import ResetModal from "./components/ResetModal";

//State management
import { useAuth } from "../../../contexts/Context";
import { loginModalActions } from "../../../store/UI/LoginModal/LoginUI";
import { resetPasswordModalActions } from "../../../store/UI/ResetPasswordModal/ResetPasswordSlice";

const Login = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { login } = useAuth();

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const loginIsVisible = useSelector((state) => state.loginUI.loginIsVisible);

  function closeLoginModal() {
    dispatch(loginModalActions.closeLoginModal());
  }
  function openReset() {
    dispatch(resetPasswordModalActions.openResetModal());
  }
  async function submitLogin(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await login(email, password);
      history.push("/app");
      closeLoginModal();
      window.location.reload(false);
    } catch {
      setError("Failed to log in");
    }
    setLoading(false);
  }

  return (
    <>
      <Modal closeButton open={loginIsVisible} onClose={closeLoginModal}>
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
          {error && (
            <Button
              auto
              flat
              color="error"
              disabled
              className="animate__animated animate__shakeX"
            >
              {error}
            </Button>
          )}
          <Row justify="space-between">
            <Checkbox>
              <Text size={14}>Remember me?</Text>
            </Checkbox>
            <Text size={14} css={{ cursor: "pointer" }} onClick={openReset}>
              Forgot Pasword?
            </Text>
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button auto flat color="error" onClick={closeLoginModal}>
            Close
          </Button>
          <Button auto disabled={loading} onClick={submitLogin}>
            Sign In
          </Button>
        </Modal.Footer>
      </Modal>
      <ResetModal />
    </>
  );
};

export default Login;
