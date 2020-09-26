import React from 'react';
import Navbar from '../../molecules/Navbar/Navbar';
import Header from '../../molecules/Header/Header';
import Scroll from '../../atoms/Scroll/Scroll';

import './Hero.css';

const Hero = () => (
  <div className="hero">
    <Navbar />
    <Header />
    <Scroll className="hero__arrow" altClassName="hero__arrow--scrolled"/>
  </div>
);

export default Hero;
