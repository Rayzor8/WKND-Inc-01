import React from 'react';
import './styles/Conclusion.scss';

const Conclusion = () => {
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

         <div className="container pov">
            <h1 className="title">Resource</h1>
            <p>
               These cases are perfectly simple and easy to distinguish. In a
               free hour, when our power of choice is untrammelled and when
               nothing prevents our being able to do what we like best
            </p>
         </div>

         <div className="container pov">
            <h1 className="title">Help & Tips</h1>
         </div>
      </section>
   );
};

export default Conclusion;
