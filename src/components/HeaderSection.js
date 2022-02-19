import React from 'react';
import headerImg01 from '../img/header_img-1.png';
import './styles/Header.scss';

const HeaderSection = () => {
   return (
      <header>
         <img src={headerImg01} alt="header-img" className="header-img" />
         <div>
            <p>Good Morning</p>
            <h3>Fellas</h3>
         </div>
      </header>
   );
};

export default HeaderSection;
