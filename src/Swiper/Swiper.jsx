import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {Autoplay} from "swiper";
import { Navigation, Scrollbar, A11y } from "swiper";
import { BsCameraVideo , BsStarFill } from "react-icons/bs";
import { FiBook } from "react-icons/fi";
import { BsPeople } from "react-icons/bs";
import testimonial1 from "../img/testimonial1.jpg"
import testimonial2 from "../img/testimonial2.jpg"
import testimonial3 from "../img/testimonial3.jpg"
import testimonial4 from "../img/testimonial4.jpg"
import "swiper/scss";
import "./slider.scss";
import 'swiper/css/autoplay';
import SwipeItem from "./SwipeItem";

const Carousel = () => {
  SwiperCore.use([Autoplay]);
  return (
    <div>
      <Swiper
        modules={[Navigation, Scrollbar, A11y, Autoplay]}
        spaceBetween={10}
        slidesPerView={1}
        centeredSlides
       /*  autoplay={{
          delay: 3000
        }} */
        loop
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
        className="swiper-wrapper"
      >
        <SwiperSlide className="swiper-slide">
          <SwipeItem photo={testimonial1} icon={<BsStarFill/>} rating="2" textMessage="EzLearn is the best choice for educational technology, they are very advanced" name="Richie Newt" />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <div className="swipe-item">
            <div className="icon">
              <BsCameraVideo />
            </div>
            <div className="text-card">
              <h3>EzLearn can support video lessons</h3>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swipe-item">
            <div className="icon">
              <FiBook />
            </div>
            <div className="text-card">
              <h3>EzLearn can support content for subjects</h3>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swipe-item">
            <div className="icon">
              <BsPeople />
            </div>
            <div className="text-card">
              <h3>EzLearn allow to do live works with your classmates</h3>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
export default Carousel;
