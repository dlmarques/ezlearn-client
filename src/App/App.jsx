import React, { useState } from 'react'
import SideBar from './components/Sidebar/SideBar'
import TopBar from './components/Topbar/TopBar'
import './styles/app.scss'

const App = () => {
    const [closeSide, setCloseSide] = useState(false)
  return (
    <>
    <div className="main-container-app">
        <div className="sidebar-app"> <SideBar setCloseSide={setCloseSide} closeSide={closeSide}/> </div>
        <div className="content-container">
            <div className="topbar"> <TopBar setCloseSide={setCloseSide} closeSide={closeSide} /> </div>
            <div className="content"></div>
        </div>
    </div>
    </>
  )
}

export default App