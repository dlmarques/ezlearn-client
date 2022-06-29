import React, {useState} from 'react'
import { Modal, Button, Text, Input} from "@nextui-org/react";
import { HiOutlineMail } from "react-icons/hi";
import { useAuth } from '../../../../contexts/Context';

const ResetModal = ({resetModal, closeReset}) => {
    const {sendPasswordReset} = useAuth();
    const [email, setEmail] = useState();
    const [loading, setLoading] = useState();


    async function resetPassword(){
      try {
        setLoading(true)
        if(email){
          await sendPasswordReset(email)
          console.log("sent");
          setLoading(false)
          closeReset();
        }else{
          console.log("put your email");
        }
      } catch (error) {
        console.error(error);
      }
    }
  return (
    <>
    <Modal closeButton blur open={resetModal} onClose={closeReset}>
          <Modal.Header>
            <Text id="modal-title" size={18}>
             Reset your password
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
          </Modal.Body>
          <Modal.Footer>
          <Button auto flat color="error" onClick={closeReset}>
              Close
            </Button>
            <Button auto disabled={loading} onClick={resetPassword}>
              Submit
            </Button> 
          </Modal.Footer>
        </Modal>
    </>
  )
}

export default ResetModal