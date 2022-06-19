import React from "react";
import { Modal, Button, Text } from "@nextui-org/react";

const DeleteEvent = ({ visible, setVisible, id, title, load, setLoad }) => {
  const closeHandler = () => {
    setVisible(false);
    setLoad(load + 1)
  };

  async function deleteEvent() {
    try {
      fetch("http://localhost:3001/api/calendar/deleteEvent", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({
          _id: id,
        }),
      })
      closeHandler()
    } catch (error) {
        console.error(error);
    }
  }

  return (
    <>
      <Modal
        closeButton
        blur
        aria-labelledby="modal-title"
        open={visible}
        onClose={closeHandler}
      >
        <Modal.Header>
          <Text id="modal-title" size={18}>
            Add Event
          </Text>
        </Modal.Header>
        <Modal.Body>
          <Text>
            Are you sure that you want delete <strong>{title}</strong>?
          </Text>
        </Modal.Body>
        <Modal.Footer>
          <Button auto flat color="error" onClick={closeHandler}>
            Close
          </Button>
          <Button auto onClick={deleteEvent}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default DeleteEvent;
