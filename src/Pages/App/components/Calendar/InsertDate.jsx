import React from 'react'
import { useState } from 'react'
import { Input, Button } from '@nextui-org/react';
import './insertdate.scss'


const InsertDate = ({userID, setInsertedEvent, insertedEvent}) => {
const [date, setDate] = useState("")
const [event, setEvent] = useState("")

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
          date: date,
        }),
      })
      setInsertedEvent(insertedEvent + 1)
      setDate("")
      setEvent("")
    } catch (error) {
      
    }
  }

  return (
    <>
    <div className="insertDate-container">
        <h1>Add event</h1>
        <Input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
        <Input type="text" value={event} placeholder="Event Name" onChange={(e) => setEvent(e.target.value)} />
        <Button auto css={{backgroundColor: "#00adb5", fontSize: "1rem", fontWeight: "300"}} onClick={addEvent}>Add Event</Button>
    </div>
    </>
  )
}

export default InsertDate