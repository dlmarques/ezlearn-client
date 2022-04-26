import React from 'react'
import "./MenuMobile.scss"
import {IoClose} from "react-icons/io5"

const MenuMobile = ({setOpenMobile, openMobile}) => {
  return (
    <div className={openMobile ? 'mobile-container' : 'mobile-container inactive'}>
      <IoClose onClick={() => setOpenMobile(false) }/>
      <div className="links">
        <a href="#ezlearn">EzLearn</a>
        <a href="#services">Services</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
        <a href="#">Go to Platform</a>
      </div>

    </div>
  )
}

export default MenuMobile