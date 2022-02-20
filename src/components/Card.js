import React from 'react';
import buttonImg from '../img/next-icon.png';


const Card = ({ title, image }) => {
   return (
      <div style={{ backgroundImage: `url(${image})` }} className="card">
         <div className="card-content">
            <p className="card-title">{title}</p>
            <img
               src={buttonImg}
               alt="buttonnext"
               role="button"
               className="btn-next"
            />
         </div>
      </div>
   );
};

export default Card;
