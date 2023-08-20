
import './App.css';
import Header from './components/Header/Header.js';
import Nav from './components/Nav/Nav.js';
import About from './components/About/About.js';
import Portfolio from './components/Portfolio/Portfolio';
import Contact from './components/Contact/Contact';
import Skills from './components/Skills/Skills';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <><Header />
      <Nav />
      <About />
      <Skills />
      <Portfolio />
      <Contact />
      <Footer/>
      </>
  );
}

export default App;
