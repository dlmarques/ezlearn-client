import React, { useState } from 'react'
import '../../styles/sidebar.scss'
import logo from "../../../../img/logo-app.png"
import { IoMenu, IoSettingsOutline, IoLibraryOutline } from 'react-icons/io5'
import { BiHomeCircle, BiLogOut, BiNotepad } from 'react-icons/bi'
import { BsCalendarDate, BsStar } from 'react-icons/bs'
import vector1 from "../../../../img/vector1.png"
import { Button } from '@nextui-org/react';
import { useAuth } from '../../../../contexts/AuthContext'
import UpdateProfile from './components/UpdateProfile'

const SideBar = ({setCloseSide, closeSide}) => {
  const [openChangeProfile, setOpenChangeProfile] = useState(false);
  const handler = () => setOpenChangeProfile(true)
  const {logout} = useAuth();

  function closeBox(){
    setOpenChangeProfile(false)
    window.location.reload(false);
  }
  return (
    <>
    <div className={!closeSide ? "sidebar" : "small-sidebar"}>
      <div className="top">
      <img src={logo} alt="" />
      {!closeSide ? <IoMenu onClick={() => setCloseSide(true)}/> : null}
      </div>

      <div className="links">
        <a href="/app"><BiHomeCircle/> {!closeSide ? "Overview" : null}</a>
        <a href="/app/calendar"><BsCalendarDate/> {!closeSide ? "Calendar" : null}</a>
        <a href=""><BiNotepad/> {!closeSide ? "Courses" : null}</a>
        <a href=""><IoLibraryOutline/> {!closeSide ? "Library" : null}</a>
        <a href=""><BsStar/> {!closeSide ? "Grades" : null}</a>
        <a onClick={handler}><IoSettingsOutline/> {!closeSide ? "Settings" : null}</a>
      </div>
      <UpdateProfile openChangeProfile={openChangeProfile} closeBox={closeBox}/>
      <div className="bottom">
        {!closeSide ?
        <>
         <img src={vector1} alt="" />
        <h3>Upgrade to <span>PRO</span> for more resources</h3>
        <Button css={{backgroundColor: "#00ADB5", fontWeight: "300"}}>Upgrade Now</Button>
        </>
       :
          <BiLogOut onClick={logout}/>
      }
      </div>
    </div>
    </>
  )
}

export default SideBar