import React, {useState, useEffect} from 'react'
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import timeGridPlugin from "@fullcalendar/timegrid";
import './calendar.scss'
import { useAuth } from '../../../../../contexts/Context';

const CalendarComponent = () => {
  const {userID} = useAuth()
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
        .then((response) => response.json())
        .then((actualEvents) => setEvents(actualEvents));
    }, [])
    
  return (
    <>
     <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin, timeGridPlugin]}
        initialView="dayGridMonth"
        events={
          events &&
          events.map((event) => {
            return { title: event.event, start: event.start, end: event.end,  id: event._id };
          })
        }
      />
    </>
  )
}

export default CalendarComponent