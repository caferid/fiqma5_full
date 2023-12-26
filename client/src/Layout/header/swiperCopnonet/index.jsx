// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './index.scss';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import iphone from '../../.././assets/img/ipone.png'

export default function HeroSwiper() {
  return (
    <div className='sw'>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        
        <SwiperSlide>
          <div className="box">
          <h1>Lorem, ipsum.</h1>
          <p>Lorem ipsum dolor sit amet consectetur.</p>
          </div>
          <img src={iphone} alt="" srcset="" />
        </SwiperSlide>
        <SwiperSlide>
          <div className="box">
          <h1>Lorem, ipsum.</h1>
          <p>Lorem ipsum dolor sit amet consectetur.</p>
          </div>
          <img src={iphone} alt="" srcset="" />
        </SwiperSlide>
        <SwiperSlide>
          <div className="box">
          <h1>Lorem, ipsum.</h1>
          <p>Lorem ipsum dolor sit amet consectetur.</p>
          </div>
          <img src={iphone} alt="" srcset="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
