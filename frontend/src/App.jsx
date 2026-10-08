import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WhyRicoz from './components/WhyRicoz';
import Franchises from './components/Franchises';
import Testimonial from './components/Testimonial';
import Platform from './components/Platform';
import Footer from './components/Footer';
import SmoothScroll from './components/SmoothScroll';
import './App.css';

function App() {
  return (
    <>
      <SmoothScroll />
      <Navbar />
      <Hero />
      <WhyRicoz />
      <Franchises />
      <Testimonial />
      <Platform />
      <Footer />
    </>
  );
}

export default App;