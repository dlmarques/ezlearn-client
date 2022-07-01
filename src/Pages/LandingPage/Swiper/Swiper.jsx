import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {Autoplay} from "swiper";
import { Navigation, Scrollbar, A11y } from "swiper";
import {  BsStarFill } from "react-icons/bs";
import {  BsFillChatQuoteFill } from "react-icons/bs";
import testimonial1 from "../../../img/testimonial1.jpg"
import testimonial2 from "../../../img/testimonial2.jpg"
import testimonial3 from "../../../img/testimonial3.jpg"
import testimonial4 from "../../../img/testimonial4.jpg"
import "swiper/scss";
import "./Swiper.scss"
import 'swiper/css/autoplay';
import 'swiper/scss/navigation';
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
          autoplay={{
          delay: 3000
        }} 
        navigation
        loop
        className="swiper-wrapper"
      >
        <SwiperSlide className="swiper-slide">
          <SwipeItem quote={<BsFillChatQuoteFill/>} photo={testimonial1} icon={<BsStarFill/>} rating="4" textMessage="EzLearn is the best choice for educational technology, they are very advanced" name="Richie Newt" />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
        <SwipeItem photo={testimonial3} icon={<BsStarFill/>} rating="5" textMessage="EzLearn is the best choice for educational technology, they are very advanced" name="Richie Newt" />
        </SwiperSlide>
        <SwiperSlide>
        <SwipeItem photo={testimonial2} icon={<BsStarFill/>} rating="3" textMessage="EzLearn is the best choice for educational technology, they are very advanced" name="Richie Newt" />
        </SwiperSlide>
        <SwiperSlide>
        <SwipeItem photo={testimonial4} icon={<BsStarFill/>} rating="5" textMessage="EzLearn is the best choice for educational technology, they are very advanced" name="Richie Newt" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
export default Carousel;
