import React from 'react'
import WelcomeCard from "./components/WelcomeCard"
import "./Dashboard.scss"
import CalendarComponent from './components/CalendarComponent';
import ContainerChart from '../ChartLearning/Container';
import ContainerActivity from '../ChartActivity/ContainerActivity';
import TasksContainer from '../Tasks/TasksContainer';
import ProfileCard from './components/ProfileCard';
import Todo from '../Todo/Todo'


const Dashboard = ({userData , userID}) => {
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
      <CalendarComponent userID={userID} />
      </div>
      </div>
      <div className="third-row">
      <Todo editable={false} userID={userID} />
      <ContainerActivity />
      </div>
    </div>
    </>
  )
}

export default Dashboard