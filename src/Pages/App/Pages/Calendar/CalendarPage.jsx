import React, { useState } from 'react'
import Todo from '../../components/Todo/Todo'
import Calendar from '../../components/Calendar/Calendar'
import './calendarpage.scss'
import InsertDate from '../../components/Calendar/InsertDate'

const CalendarPage = ({userID}) => {

  return (
    <>
    <div className="calendar-container">
    <Calendar userID={userID} />
    <div className="column-two">
    <Todo userID={userID} editable={true} /> 
    </div>
    </div>
    </>
  )
}

export default CalendarPage