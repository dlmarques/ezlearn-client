import React, {useState} from 'react'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './calendar.scss'

const CalendarComponent = ({selector}) => {
    const [date, setDate] = useState(new Date())
  return (
    <>
    <Calendar onChange={setDate} className={selector} value={date}/>
    </>
  )
}

export default CalendarComponent