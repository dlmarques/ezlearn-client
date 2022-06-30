import React from 'react'
import "./MenuMobile.scss"
import {IoClose} from "react-icons/io5"

import { useDispatch, useSelector } from 'react-redux'
import { mobileMenuActions } from '../../../store/UI/MobileMenu/MobileMenuUI'

const MenuMobile = () => {
  const dispatch = useDispatch();
  const mobileMenuIsVisible = useSelector((state) => state.mobileMenuUI.mobileMenuIsVisible);

  const closeMobileMenu = () => dispatch(mobileMenuActions.closeMobileMenu())

  return (
    <div className={mobileMenuIsVisible ? 'mobile-container' : 'mobile-container inactive'}>
      <IoClose onClick={closeMobileMenu}/>
      <div className="links">
        <a href="#ezlearn">EzLearn</a>
        <a href="#services">Services</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
        <a href="/register">Go to Platform</a>
      </div>

    </div>
  )
}

export default MenuMobile