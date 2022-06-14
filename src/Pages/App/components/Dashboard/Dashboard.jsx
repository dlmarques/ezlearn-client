import React from 'react'
import WelcomeCard from "./components/WelcomeCard"
import "./Dashboard.scss"
import CalendarComponent from './components/CalendarComponent';
import ContainerChart from '../ChartLearning/Container';
import ContainerActivity from '../ChartActivity/ContainerActivity';
import TasksContainer from '../Tasks/TasksContainer';
import ProfileCard from './components/ProfileCard';


const Dashboard = ({userData}) => {
  return (
    <>
    <div className="dashboard-container">
      <div className="first-grid">
      <WelcomeCard userData={userData} id="welcome-card"/>
      <ProfileCard userData={userData}/>
      </div>
      <div className="second-grid">
      <ContainerChart/>
      <div className="calendar">
      <CalendarComponent selector="second-calendar"/>
      </div>
      <ContainerActivity />
      <TasksContainer />
      </div>
    </div>
    </>
  )
}

export default Dashboard