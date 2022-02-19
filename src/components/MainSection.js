import React from 'react';
import Banner from './Banner';
import Conclusion from './Conclusion';
import DefinitionWord from './DefinitionWord';
import Slider from './Slider';
import './styles/MainSection.scss';

const MainSection = ({testimonialData}) => {
   return (
      <main>
         <Banner />
         <DefinitionWord />
         <Slider testimonialData={testimonialData}/>
         <Conclusion/>
      </main>
   );
};

export default MainSection;
