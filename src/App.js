import { useEffect, useState } from 'react';
import HeaderSection from './components/HeaderSection';
import MainSection from './components/MainSection';

function App() {
   const [testimonialData, setTestimonialData] = useState([]);
   const [helpAndTipsData, setHelpAndTipsData] = useState([]);

   useEffect(() => {
      fetch('https://wknd-take-home-challenge-api.herokuapp.com/testimonial')
         .then((res) => res.json())
         .then((data) => {
            setTestimonialData(data);
         });
   }, []);

   useEffect(() => {
      fetch('https://wknd-take-home-challenge-api.herokuapp.com/help-tips')
         .then((res) => res.json())
         .then((data) => {
            setHelpAndTipsData(data);
         });
   }, []);

   console.log(testimonialData);
   console.log(helpAndTipsData);
   return (
      <>
         <HeaderSection />
         <MainSection testimonialData={testimonialData}/>
      </>
   );
}

export default App;
