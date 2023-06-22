import FirstSection from './sectionFirst/FirstSection';
import Header from './header/start/Start'; 
import SecondSection from './sectionSecond/SecondSection';
import Footer from './footer/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <FirstSection />
      <SecondSection />
      <Footer />
    </div>
  );
}

export default App;
