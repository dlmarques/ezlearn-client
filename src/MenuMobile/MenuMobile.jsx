import React from 'react'
import "./MenuMobile.scss"
import {IoClose} from "react-icons/io5"

const MenuMobile = ({setOpenMobile}) => {
  return (
    <div className='mobile-container'>
      <IoClose onClick={() => setOpenMobile(false) }/>
      <div className="links">
        <a href="#">EzLearn</a>
        <a href="#">Services</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
        <a href="#">Go to Platform</a>
      </div>

    </div>
  )
}

export default MenuMobile