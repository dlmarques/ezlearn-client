import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Scrollbar, A11y } from "swiper";
import {BsCameraVideo} from "react-icons/bs"
import {BiMessageDetail} from "react-icons/bi"
import {FiBook} from "react-icons/fi"
import {BsPeople} from "react-icons/bs"

import "swiper/scss";
import "./slider.scss";

const Carousel = () => {
  return (
    <div>
      <Swiper
        modules={[Navigation, Scrollbar, A11y]}
        spaceBetween={-700}
        slidesPerView={2}
        centeredSlides
        loop
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
        className="swiper-wrapper"
      >
        <SwiperSlide className="swiper-slide">
          <div className="swipe-item">
            <div className="icon">
              <BiMessageDetail/>
            </div>
            <div className="text-card">
          <h3>
            EzLearn allow to your platform have a live chat
          </h3>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <div className="swipe-item">
            <div className="icon">
              <BsCameraVideo/>
            </div>
            <div className="text-card">
          <h3>
            EzLearn can support video lessons
          </h3>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swipe-item">
          <div className="icon">
              <FiBook/>
            </div>
            <div className="text-card">
          <h3>EzLearn can support content for subjects</h3>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swipe-item">
          <div className="icon">
              <BsPeople/>
            </div>
            <div className="text-card">
              <h3>
                EzLearn allow to do live works with your classmates
              </h3>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
export default Carousel;
