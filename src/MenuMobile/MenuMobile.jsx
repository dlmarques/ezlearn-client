import React from 'react'
import "./MenuMobile.scss"
import {IoClose} from "react-icons/io5"

const MenuMobile = ({setOpenMobile}) => {
  return (
    <div className='mobile-container'>
<IoClose onClick={() => setOpenMobile(false) }/>
    </div>
  )
}

export default MenuMobile