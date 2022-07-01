import React from 'react'
import { useSelector } from 'react-redux'
import learn from "../../../../../img/learn.png"
import "./welcomecard.scss"

const WelcomeCard = () => {
  const firstName = useSelector((state) => state.auth.firstName)
  return (
    <>
          <div className="welcome-card">
            <div className='text'>
              <h1>Welcome back {firstName && firstName}!</h1>
              <h3>You have complete 5 lessons in last day</h3>
            </div>
            <div className='image'>
              <img src={learn} alt="a decorative for dashboard welcome card" />
            </div>
          </div>
          
    </>
  )
}

export default WelcomeCard