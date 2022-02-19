import React from 'react';
import DefinitionImg01 from '../img/definition_01.png';
import './styles/Definition.scss';

const DefinitionWord = () => {
   return (
      <section className="definition">
         <figure className="definition__figure">
            <blockquote>
               <span>`Deffinition;`</span> a practice or exercise to test or
               improve one's fitness for athletic competition, ability, or
               performance to exhaust (something, such as a mine) by working to
               devise, arrange, or achieve by resolving difficulties.
               Merriam-Webster.com Dictionary.
            </blockquote>

            <figcaption>
               <cite>-weekend team</cite>
            </figcaption>
         </figure>
         <div className="definition__circle"></div>
         <img src={DefinitionImg01} alt="decorationImage" className='definition__deco_img'/>
         <h2>Testimonial</h2>
      </section>
   );
};

export default DefinitionWord;
