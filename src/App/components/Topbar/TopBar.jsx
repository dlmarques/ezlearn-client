import React from 'react'
import { IoMenu } from 'react-icons/io5'
import '../../styles/topbar.scss'

const TopBar = ({setCloseSide, closeSide}) => {
  return (
    <>
    <div className="topbar-app">
      { closeSide ? <IoMenu onClick={() => setCloseSide(false)}/> : null}
    </div>
    </>
  )
}

export default TopBar