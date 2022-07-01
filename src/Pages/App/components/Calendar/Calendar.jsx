import React, { useState, useEffect } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import timeGridPlugin from "@fullcalendar/timegrid";
import "./calendar.scss";
import InsertDate from "./InsertDate";
import DeleteEvent from "./DeleteEvent";
import { useAuth } from "../../../../contexts/Context";

const Calendar = () => {
  const {userID} = useAuth()
  const [events, setEvents] = useState();
  const [addVisible, setAddVisible] = useState(false);
  const [deleteVisible, setDeleteVisible] = useState(false);
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  const [publicID, setPublicID] = useState();
  const [taskTitle, setTaskTitle] = useState();
  const [load, setLoad] = useState(0);

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
  }, [load]);

  const selectDate = (e) => {
    setAddVisible(true)
    setStartDate(e.startStr)
    setEndDate(e.endStr)
  };

  const selectEvent = (e) => { 
    setDeleteVisible(true)
    setPublicID(e.event._def.publicId)
    setTaskTitle(e.event._def.title)
  };

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
        editable={true}
        selectable={true}
        selectMirror={true}
        select={selectDate}
        eventClick={selectEvent}
      />
      <InsertDate userID={userID} visible={addVisible} setVisible={setAddVisible} startDate={startDate} endDate={endDate} load={load} setLoad={setLoad} />
      <DeleteEvent visible={deleteVisible} setVisible={setDeleteVisible} id={publicID} title={taskTitle} load={load} setLoad={setLoad}/>
    </>
  );
};

export default Calendar;
