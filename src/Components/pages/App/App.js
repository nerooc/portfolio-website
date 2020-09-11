import React from 'react';
import ITberries from '../../UI/organisms/ITberries/ITberries';
import Hero from '../../UI/organisms/Hero/Hero';
import About from '../../UI/organisms/About/About';
import Portfolio from '../../UI/organisms/Portfolio/Portfolio';
import Contact from '../../UI/organisms/Contact/Contact';

import './App.css';

function App() {
  return (
    <>
      <Hero />
      <ITberries />
      <About />
      <Portfolio />
      <Contact />
    </>
  );
}

export default App;
