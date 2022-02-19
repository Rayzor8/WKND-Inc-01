import React from 'react';
import BannerImg1 from '../img/banner_1.svg';
import BannerImg2 from '../img/banner_2.svg';
import './styles/Banner.scss';

const Banner = () => {
   return (
      <section className="banner">
         <img src={BannerImg1} alt="banner-img" className="banner-bg" />
         <div className="banner__title">
            <h1>WEEKEND FROM HOME</h1>
            <h3>Stay active with a little workout.</h3>
         </div>
         <div className="icon-group">
            <img src={BannerImg2} alt="banner-icon" className="banner-icon" />
            <button className="icon-btn">Let`s Go</button>
         </div>
      </section>
   );
};

export default Banner;
