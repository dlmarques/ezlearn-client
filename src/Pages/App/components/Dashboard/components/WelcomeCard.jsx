import React from 'react'
import learn from "../../../../../img/learn.png"
import "./welcomecard.scss"

const WelcomeCard = ({userData}) => {
  return (
    <>
          <div className="welcome-card">
            <div className='text'>
              <h1>Welcome back {userData && userData.firstName}!</h1>
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