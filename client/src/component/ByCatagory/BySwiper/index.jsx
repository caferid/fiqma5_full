import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './index.scss';

// import required modules
import { Autoplay,Pagination, Navigation } from 'swiper/modules';
import ByCatElemet from '../ByCatElemet';

export default function BySwiper() {
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
        spaceBetween={10}
        pagination={{
          type: 'fraction',
          clickable: true,
        }}
        navigation={true}
        loop={true}
        autoplay={{
          delay: 4500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay,Pagination, Navigation]}
        className="mySwiper "
        // initialSlide={2}
      >
        <SwiperSlide><ByCatElemet/></SwiperSlide>
        <SwiperSlide><ByCatElemet/></SwiperSlide>
        <SwiperSlide><ByCatElemet/></SwiperSlide>
        <SwiperSlide><ByCatElemet/></SwiperSlide>
        <SwiperSlide><ByCatElemet/></SwiperSlide>
        <SwiperSlide><ByCatElemet/></SwiperSlide>
        <SwiperSlide><ByCatElemet/></SwiperSlide>
      </Swiper>

      
  );
}
