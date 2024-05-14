import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Certifications from './components/Certifications';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

const App = () => {
  return (
    <div className="min-h-screen flex flex-col">
        
      <Header />
      <div id="hero">
        <Hero />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="skills">
        <Skills />
      </div>
      <div id="Certifications">
        <Certifications />
      </div>
      <div id="Projects">
        <Projects/>
      </div>
      <div id="Contact">
        <Contact/>
      </div>
      <div id="Footer">
        <Footer/>
      </div>
    </div>


  );
};

export default App;