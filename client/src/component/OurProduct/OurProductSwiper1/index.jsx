import React, { useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import './index.scss';

// import required modules
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import OurProElemet1 from '../productElemet1';

export default function OurProductSwiper1() {
  const [swiperRef, setSwiperRef] = useState(null);

  let appendNumber = 4;
  let prependNumber = 1;

  const prepend2 = () => {
    swiperRef.prependSlide([
      '<div class="swiper-slide">Slide ' + --prependNumber + '</div>',
      '<div class="swiper-slide">Slide ' + --prependNumber + '</div>',
    ]);
  };

  const prepend = () => {
    swiperRef.prependSlide(
      '<div class="swiper-slide">Slide ' + --prependNumber + '</div>'
    );
  };

  const append = () => {
    swiperRef.appendSlide(
      '<div class="swiper-slide">Slide ' + ++appendNumber + '</div>'
    );
  };

  const append2 = () => {
    swiperRef.appendSlide([
      '<div class="swiper-slide">Slide ' + ++appendNumber + '</div>',
      '<div class="swiper-slide">Slide ' + ++appendNumber + '</div>',
    ]);
  };

  return (
      <Swiper
        onSwiper={setSwiperRef}
        slidesPerView={4}
        centeredSlides={true}
        spaceBetween={30}
        pagination={{
          type: 'fraction',
          clickable: true,
        }}
        navigation={true}
        loop={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        
        modules={[Autoplay,Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><OurProElemet1/></SwiperSlide>
        <SwiperSlide><OurProElemet1/></SwiperSlide>
        <SwiperSlide><OurProElemet1/></SwiperSlide>
        <SwiperSlide><OurProElemet1/></SwiperSlide>
        <SwiperSlide><OurProElemet1/></SwiperSlide>
        <SwiperSlide><OurProElemet1/></SwiperSlide>
        <SwiperSlide><OurProElemet1/></SwiperSlide>
        
      </Swiper>

      
  );
}
