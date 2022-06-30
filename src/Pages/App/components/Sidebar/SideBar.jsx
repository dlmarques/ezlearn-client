import React, { useState } from 'react'
import '../../styles/sidebar.scss'

//UI components 
import { IoMenu, IoSettingsOutline, IoLibraryOutline } from 'react-icons/io5'
import { BiHomeCircle, BiLogOut, BiNotepad } from 'react-icons/bi'
import { BsCalendarDate } from 'react-icons/bs'
import { Button } from '@nextui-org/react';
import UpdateProfile from './components/UpdateProfile'

//Images
import IMAGES from '../../../../img/images'

//State management
import { useDispatch, useSelector } from 'react-redux'
import { sidebarActions } from '../../../../store/UI/SideBar/sidebar'
import { useAuth } from '../../../../contexts/Context'
import { changeProfileModalActions } from '../../../../store/UI/ChangeProfileModal/ChangeProfileModal'

const SideBar = ({userData}) => {
  const dispatch = useDispatch();
  const {logout} = useAuth();
  const sidebar = useSelector((state) => state.sidebarUI.isOpened)
  
  const openChanheProfile = () => dispatch(changeProfileModalActions.openModal())
  const closeSidebar = () => dispatch(sidebarActions.closeSidebar())


  return (
    <>
    <div className={!sidebar ? "sidebar" : "small-sidebar"}>
      <div className="top">
      <img src={IMAGES.logoApp} alt="" />
      {!sidebar ? <IoMenu onClick={closeSidebar}/> : null}
      </div>

      <div className="links">
        <a href="/app"><BiHomeCircle/> {!sidebar ? "Overview" : null}</a>
        <a href="/app/calendar"><BsCalendarDate/> {!sidebar ? "Calendar" : null}</a>
        {userData && userData.role === 'Student' ? <a href="/app/courses"><BiNotepad/> {!sidebar ? "Courses" : null}</a> : <a href="/app/courses"><BiNotepad/> {!sidebar ? "My Courses" : null}</a>}
        <a href="/app"><IoLibraryOutline/> {!sidebar ? "Library" : null}</a>
        <a onClick={openChanheProfile}><IoSettingsOutline/> {!sidebar ? "Settings" : null}</a>
      </div>
      <UpdateProfile/>
      <div className="bottom">
        {!sidebar ?
        <>
         <img src={IMAGES.vector} alt="" />
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