import React from 'react'
import { MdOutlineWatchLater } from "react-icons/md";
import { Button } from "@nextui-org/react";

const Course = ({img, title, duration}) => {
  return (
    <>
              <div className="course">
            <div className="top">
              <img src={img} alt="" />
            </div>
            <div className="bottom">
              <h1>{title}</h1>
              <div className="row">
                <span id="duration">
                  <MdOutlineWatchLater />
                  <h3>{duration}h</h3>
                </span>
                <h3>Self-Paced</h3>
                <h3>Seller Name</h3>
              </div>
                <button className='btn-take'>
                  Take Course
                </button>
            </div>
          </div>
    </>
  )
}

export default Course