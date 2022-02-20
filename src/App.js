import HeaderSection from './components/HeaderSection';
import MainSection from './components/MainSection';
import AppContext from './context/AppContext';

function App() {
   return (
      <>
      <AppContext>
         <HeaderSection />
         <MainSection />
      </AppContext>
      </>
   );
}

export default App;
