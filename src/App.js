import './App.scss';
import CarouselReact from './components/CarouselReact';
import { Footer } from './components/Footer';
import { HomeContent } from './components/HomeContent';
import { IntroHome } from './components/IntroHome';
import { IntroImg } from './components/IntroImg';
import SectionDest from './components/SectionDest';

function App() {
  return (
    <div className="App">

      <CarouselReact></CarouselReact>

      <HomeContent></HomeContent>

      <IntroHome></IntroHome>

      <IntroImg></IntroImg>

      <SectionDest></SectionDest>

      <Footer></Footer>
    </div>
  );
}

export default App;
