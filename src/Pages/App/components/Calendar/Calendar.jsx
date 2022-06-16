import React from 'react'
import Todo from '../Todo/Todo'
import "./calendar.scss"

const Calendar = ({userID}) => {

  return (
    <>
    <Todo userID={userID} />    
    </>
  )
}

export default Calendar