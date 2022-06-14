import React from 'react'
import "./profilebox.scss"

const ProfileCard = ({userData}) => {
  return (
    <>
    <div className="container">
    <div className="avatar">
        <img src={userData && userData.avatar} alt="" />
    </div>
    <div className="text">
        <h2>
            {userData && userData.firstName} {userData &&  userData.lastName} - {userData && userData.role}
        </h2>
    </div>
    </div>
    </>
  )
}

export default ProfileCard