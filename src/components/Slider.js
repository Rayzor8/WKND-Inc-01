import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import './styles/Slider.scss';

const Slider = ({ testimonialData }) => {
   return (
      <div>
         <Swiper
            slidesPerView={2.5}
            spaceBetween={0}
            pagination={false}
            modules={[Navigation]}
            className="mySwiper"
            navigation={false}
         >
            {testimonialData.map((data) => (
               <SwiperSlide key={data.id}>
                  <div className="card">
                     <h1>{data.by}</h1>
                     <p>{data.testimony}</p>
                  </div>
               </SwiperSlide>
            ))}
         </Swiper>
      </div>
   );
};

export default Slider;
