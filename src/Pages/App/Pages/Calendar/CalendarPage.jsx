import React from 'react'
import Todo from '../../components/Todo/Todo'
import Calendar from '../../components/Calendar/Calendar'
import './calendarpage.scss'


const CalendarPage = () => {

  return (
    <>
    <div className="calendar-container">
    <Calendar />
    <div className="column-two">
    <Todo editable={true} /> 
    </div>
    </div>
    </>
  )
}

export default CalendarPage