import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../index.scss";
import { arrowPrev, arrowNext } from "../img/images";
import { Navigation, Pagination } from "swiper";

import CarePage from "./CarePage";
import Pets from "./Pets";
const Slider = () => {
  return (
    <div className="slider">
      <Swiper
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        pagination={{
          el: ".swiper-pagination",
          clickable: true,
        }}
        loop={true}
        modules={[Navigation, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Pets />
        </SwiperSlide>
        <SwiperSlide>
          <CarePage />
        </SwiperSlide>
        <div className="swiper-button-prev">
          <img src={arrowPrev} alt="arrowPrev" />
        </div>
        <div className="swiper-button-next">
          <img src={arrowNext} alt="arrowNext" />
        </div>
        <div className="swiper-pagination"></div>
      </Swiper>
    </div>
  );
};

export default Slider;
