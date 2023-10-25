import './App.css';
import HeroSection from './components/HeroSection/HeroSection';
import Navbar from './components/Navbar/Navbar';
import Section2Intro from './components/Section2Intro/Section2Intro';
import Section3Intro from './components/Section3Intro/Section3Intro';


function App() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Section2Intro />
      <Section3Intro />
    </div>
  );
}

export default App;
