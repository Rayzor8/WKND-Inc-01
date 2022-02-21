import HeaderSection from './components/HeaderSection';
import MainSection from './components/MainSection';
import AppContext from './context/AppContext';
import Footer from './components/Footer';

function App() {
   return (
      <>
         <AppContext>
            <HeaderSection />
            <MainSection />
            <Footer />
         </AppContext>
      </>
   );
}

export default App;
