import React from "react";

const SwipeItem = ({photo, icon, rating, textMessage, name}) => {
  const stars = rating;
  return (
    <>
      <div className="swipe-item">
        <div className="top-testimonial">
        <img src={photo} alt="" />
        <span>
             { rating == 1 ? <div id="review">{icon}</div>  :
              rating == 2 ? <div>{icon}{icon}</div>  :
             rating == 3 ? <div>{icon}{icon}{icon}</div> :
             rating == 4 ? <div>{icon}{icon}{icon}{icon}</div> :
             rating == 5 ? <div>{icon}{icon}{icon}{icon}{icon}</div> 
             : null
            }
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
