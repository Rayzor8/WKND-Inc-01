import React from 'react';
import './styles/Conclusion.scss';
import { useContextApp } from '../context/AppContext';
import definitionImg2 from '../img/definition_02.png';
import definitionImg3 from '../img/definition_03.svg';
import Card from './Card';

const Conclusion = () => {
   const { helpAndTipsData } = useContextApp();

   return (
      <section className="conclusion">
         <div className="container pov">
            <h1 className="title">POV</h1>
            <p>
               Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
               eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
               enim ad minim veniam, quis nostrud ullamco laboris nisi ea
               commodo consequat. Duis aute irure dolor in reprehenderit in
               voluptate velit esse cillum dolore eu fugiat nulla pariatur.{' '}
            </p>
         </div>

         <div className="container resource">
            <h1 className="title">Resource</h1>
            <p>
               These cases are perfectly simple and easy to distinguish. In a
               free hour, when our power of choice is untrammelled and when
               nothing prevents our being able to do what we like best
            </p>
         </div>

         <div className="helpTips">
            <img
               src={definitionImg3}
               alt="gimmickdecoration03"
               className="decorationImg3"
            />
            <h1 className="title">Help & Tips</h1>
            <div className="card-container">
               {helpAndTipsData.map((data) => (
                  <Card key={data.id} title={data.title} image={data.image} />
               ))}
            </div>
         </div>

         <div className="container set">
            <h1 className="title">You`re all set</h1>
            <p>
               The wise man therefore always holds in these matters to this
               principle of selection.
            </p>
         </div>

         <img
            src={definitionImg2}
            alt="gimmickdecoration"
            className="decorationImg2"
         />
      </section>
   );
};

export default Conclusion;
