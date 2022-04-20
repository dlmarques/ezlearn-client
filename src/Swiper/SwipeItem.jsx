import React from "react";

const SwipeItem = ({photo, icon, rating, textMessage, name}) => {
  return (
    <>
      <div className="swipe-item">
        <div className="top-testimonial">
        <img src={photo} alt="" />
        <span>
            {/* { rating === 1 ? icon ? 
              rating === 2 ? (icon, icon) ? 
             rating === 3 ? (icon, icon, icon) ? 
             rating === 4 ? (icon, icon, icon, icon) ? 
             rating === 5 ? (icon, icon, icon, icon, icon) 
             : null
            } */}
        </span>
        <h2 id="name">{name}</h2>
        </div>
        <div className="bottom-testimonial">
        <h3>{textMessage}</h3>
        </div>
      </div>
    </>
  );
};

export default SwipeItem;
