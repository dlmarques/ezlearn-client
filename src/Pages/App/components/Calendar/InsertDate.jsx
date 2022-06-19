import React from 'react'
import { useState } from 'react'
import { Modal, Button, Text, Input } from "@nextui-org/react";
import './insertdate.scss'


const InsertDate = ({userID, visible, setVisible, startDate, endDate, load, setLoad}) => {
const [event, setEvent] = useState("")

const closeHandler = () => {
  setVisible(false)
  setEvent("")
  setLoad(load + 1)
}

  async function addEvent(){
    try {
      fetch("http://localhost:3001/api/calendar/addEvent", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({
          id: userID,
          event: event,
          start: startDate,
          end: endDate,
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
          <Input
            clearable
            bordered
            fullWidth
            color="primary"
            size="lg"
            placeholder="Event title"
            value={event}
            aria-label="insert event title"
            onChange={(e) => setEvent(e.target.value)}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button auto flat color="error" onClick={closeHandler}>
            Close
          </Button>
          <Button auto onClick={addEvent}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default InsertDate