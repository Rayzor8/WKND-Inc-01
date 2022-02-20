import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import './styles/Slider.scss';
import { useContextApp } from '../context/AppContext';

const Slider = () => {

   const {testimonialData} = useContextApp();

   if (testimonialData.length === 0)
      return <h3 style={{ color: 'white' ,textAlign:'center'}}>Loading Data...</h3>;

   return (
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
   );
};

export default Slider;
