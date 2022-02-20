import { useState, createContext, useContext, useEffect } from 'react';

export const contextApp = createContext();

export const useContextApp = () => {
   return useContext(contextApp);
};

const AppContext = ({ children }) => {
   const [testimonialData, setTestimonialData] = useState([]);
   const [helpAndTipsData, setHelpAndTipsData] = useState([]);

   useEffect(() => {
      fetch(process.env.REACT_APP_TESTIMONY_API)
         .then((res) => res.json())
         .then((data) => {
            setTestimonialData(data);
         });
   }, []);

   useEffect(() => {
      fetch(process.env.REACT_APP_HELP_AND_TIPS_API)
         .then((res) => res.json())
         .then((data) => {
            setHelpAndTipsData(data);
         });
   }, []);

   console.log(testimonialData);
   console.log(helpAndTipsData);

   return (
      <contextApp.Provider value={{ testimonialData, helpAndTipsData }}>
         {children}
      </contextApp.Provider>
   );
};

export default AppContext;
