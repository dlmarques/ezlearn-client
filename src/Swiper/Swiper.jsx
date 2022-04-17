import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import "swiper/scss";
import "./slider.css";

const Carousel = () => {
  return (
    <div>
      <Swiper
        modules={[Navigation, Scrollbar, A11y]}
        spaceBetween={0}
        slidesPerView={3}
        centeredSlides
        loop
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
        className="swiper-wrapper"
      >
        <SwiperSlide className="swiper-slide">
          <div className="swipe-item"></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swipe-item"></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swipe-item"></div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
export default Carousel;
