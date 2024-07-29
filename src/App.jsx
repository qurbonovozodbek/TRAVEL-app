import { useEffect } from 'react'
import './App.css'
import About from './components/About'
import Discover from './components/Discover'
import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'
import Join from './components/Join'
import Place from './components/Place'

function App() {

  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector('.header');
      if (window.scrollY > 600) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
    <>
    <div>
      <Header/>
      <Hero/>
      <About/>
      <Discover/>
      <Place/>
      <Join/>
      <Footer/>
      {/* <Main/>
      <Footer/> */}
    </div>
    </>
  )
}

export default App
