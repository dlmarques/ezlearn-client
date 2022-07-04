import React from 'react'
import WelcomeCard from "./components/WelcomeCard"
import "./Dashboard.scss"
import CalendarComponent from './components/CalendarComponent';
import ContainerChart from '../../components/EnrolledCourses/Container';
import ContainerActivity from '../../components/ChartActivity/ContainerActivity';
import ProfileCard from './components/ProfileCard';
import Todo from '../../components/Todo/Todo'


const Dashboard = () => {
  return (
    <>
    <div className="dashboard-container">
      <div className="first-grid">
      <WelcomeCard  id="welcome-card"/>
      <ProfileCard />
      </div>
      <div className="second-grid">
      <ContainerChart/>
      <div className="calendar">
      <CalendarComponent />
      </div>
      </div>
      <div className="third-row">
      <Todo editable={false} />
      <ContainerActivity />
      </div>
    </div>
    </>
  )
}

export default Dashboard