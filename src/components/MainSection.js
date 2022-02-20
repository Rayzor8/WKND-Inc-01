import React from 'react';
import Banner from './Banner';
import Conclusion from './Conclusion';
import DefinitionWord from './DefinitionWord';
import Footer from './Footer';
import Slider from './Slider';
import './styles/MainSection.scss';

const MainSection = () => {
   return (
      <main>
         <Banner />
         <DefinitionWord />
         <Slider/>
         <Conclusion/>
         <Footer/>
      </main>
   );
};

export default MainSection;
