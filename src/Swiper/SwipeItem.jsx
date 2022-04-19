import React from "react";

const SwipeItem = ({photo, icon, rating, textMessage, name}) => {
  return (
    <>
      <div className="swipe-item">
        <div className="top-testimonial">
        <img src={photo} alt="" />
        <span>
            {icon} {icon} {icon} {icon} {icon}
        </span>
        </div>
        <div className="bottom-testimonial">
        <h3>{textMessage}</h3>
        <h3 id="name">{name}</h3>
        </div>
      </div>
    </>
  );
};

export default SwipeItem;
