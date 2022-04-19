import React from "react";

const SwipeItem = ({photo, icon, rating, textMessage, name}) => {
  return (
    <>
      <div className="swipe-item">
        <div className="top">
        <img src={photo} alt="" />
        <span>
            {icon} {icon} {icon} {icon} {icon}
        </span>
        </div>
        <div className="bottom">
        <h3>{textMessage}</h3>
        <h3>{name}</h3>
        </div>
      </div>
    </>
  );
};

export default SwipeItem;
