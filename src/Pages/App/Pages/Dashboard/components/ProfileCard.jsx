import React from 'react'
import "./profilebox.scss"

import {useSelector} from 'react-redux'

const ProfileCard = () => {
  const avatar = useSelector((state) => state.auth.avatar)
  const firstName = useSelector((state) => state.auth.firstName)
  const lastName = useSelector((state) => state.auth.lastName)
  const role = useSelector((state) => state.auth.role)
  return (
    <>
    <div className="container">
    <div className="avatar">
        <img src={avatar && avatar} alt="" />
    </div>
    <div className="text">
        <h2>
            {firstName && firstName} {lastName &&  lastName} - {role && role}
        </h2>
    </div>
    </div>
    </>
  )
}

export default ProfileCard