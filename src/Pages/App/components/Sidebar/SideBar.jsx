import React, { useState } from 'react'
import '../../styles/sidebar.scss'

//UI components 
import { IoMenu, IoSettingsOutline } from 'react-icons/io5'
import { BiHomeCircle, BiLogOut, BiNotepad } from 'react-icons/bi'
import { BsCalendarDate, BsFolder } from 'react-icons/bs'
import { Button } from '@nextui-org/react';
import UpdateProfile from './components/UpdateProfile'

//Images
import IMAGES from '../../../../img/images'

//State management
import { useDispatch, useSelector } from 'react-redux'
import { sidebarActions } from '../../../../store/UI/SideBar/sidebar'
import { useAuth } from '../../../../contexts/Context'
import { changeProfileModalActions } from '../../../../store/UI/ChangeProfileModal/ChangeProfileModal'
import { pricingUIActions } from '../../../../store/UI/PricingUI/PricingModal'
import PricingUI from '../Pricing/PricingUI'

const SideBar = ({userData}) => {
  const dispatch = useDispatch();
  const {logout} = useAuth();
  const sidebar = useSelector((state) => state.sidebarUI.isOpened)
  const role = useSelector((state) => state.auth.role)
  
  const openChangeProfile = () => dispatch(changeProfileModalActions.openModal())
  const closeSidebar = () => dispatch(sidebarActions.closeSidebar())
  const openPricing = () => dispatch(pricingUIActions.open())

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
        {role && role === 'Student' ? <a href="/app/courses"><BiNotepad/> {!sidebar ? "Courses" : null}</a> : <a href="/app/courses"><BiNotepad/> {!sidebar ? "My Courses" : null}</a>}
        <a href="/app/library"><BsFolder/> {!sidebar ? "Files Manager" : null}</a>
        <a onClick={openChangeProfile}><IoSettingsOutline/> {!sidebar ? "Settings" : null}</a>
      </div>
      <UpdateProfile/>
      <div className="bottom">
        {!sidebar ?
        <>
         <img src={IMAGES.vector} alt="" />
        <h3>Upgrade to <span>PRO</span> for more resources</h3>
        <Button css={{backgroundColor: "#00ADB5", fontWeight: "300"}} onClick={openPricing}>Upgrade Now</Button>
        </>
       :
          <BiLogOut onClick={logout}/>
      }
      </div>
      <PricingUI/>
    </div>
    </>
  )
}

export default SideBar