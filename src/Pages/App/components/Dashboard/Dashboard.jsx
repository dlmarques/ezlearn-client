import React from 'react'
import { Grid } from '@nextui-org/react';
import WelcomeCard from "./components/WelcomeCard"
import "./Dashboard.scss"
import CalendarComponent from './components/CalendarComponent';
import ContainerChart from '../ChartLearning/Container';
import ContainerActivity from '../ChartActivity/ContainerActivity';
import ChartActivity from '../ChartActivity/ChartActivity';
import TasksContainer from '../Tasks/TasksContainer';


const Dashboard = () => {
  return (
    <>
    <Grid.Container css={{padding : "0", paddingTop: "50px"}} gap={0} justify="space-around">
      <Grid >
        <WelcomeCard/>
      </Grid>
      <Grid >
        <CalendarComponent/>
      </Grid>
    </Grid.Container>
    <Grid.Container justify="flex-start">
      <Grid >
        <ContainerChart/>
      </Grid>
      <Grid >
      <ContainerActivity />
      </Grid>
      <Grid >
      <TasksContainer />
      </Grid>
    </Grid.Container>
    </>
  )
}

export default Dashboard