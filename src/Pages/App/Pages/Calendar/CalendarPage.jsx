import React, { useState } from 'react'
import Todo from '../../components/Todo/Todo'
import Calendar from '../../components/Calendar/Calendar'
import './calendarpage.scss'
import InsertDate from '../../components/Calendar/InsertDate'

const CalendarPage = ({userID}) => {
  const [insertedEvent, setInsertedEvent] = useState(0)

  return (
    <>
    <div className="calendar-container">
    <Calendar userID={userID} insertedEvent={insertedEvent} />
    <div className="column-two">
    <InsertDate userID={userID} setInsertedEvent={setInsertedEvent} insertedEvent={insertedEvent} />
    <Todo userID={userID}/> 
    </div>
    </div>
    </>
  )
}

export default CalendarPage