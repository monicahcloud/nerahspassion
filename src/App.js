
import './App.css';
import Contact from './components/Contact';
import PageHero from './components/PageHero';
import Services from './components/Services';
import SlideShow from './components/SlideShow';
import Promotion from './components/Promotion';
import Footer from './components/Footer';

function App() {
  return (
    <>
    <div className=''>
    <PageHero />
    <SlideShow/>
    <Services/>
    <Contact/>
    <Footer/>
    </div>
    </>
  );
}

export default App;
