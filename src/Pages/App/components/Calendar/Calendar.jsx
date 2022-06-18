import React, { useState, useEffect } from 'react'
import FullCalendar from '@fullcalendar/react' 
import dayGridPlugin from '@fullcalendar/daygrid' 
import "./calendar.scss"


const Calendar = ({userID, insertedEvent}) => {
  const [events, setEvents] = useState()

  useEffect(() => {
    fetch("http://localhost:3001/api/calendar/getEvent", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({
          id: userID,
        }),
      })
      .then(response => response.json())
      .then(actualEvents => setEvents(actualEvents))
  }, [insertedEvent])




  return (
    <>
    <FullCalendar
        plugins={[ dayGridPlugin ]}
        initialView="dayGridMonth"
        events={events && events.map((event) => {
          return {title: event.event, date: event.date}
        })}
      />
    </>
  )
}

export default Calendar