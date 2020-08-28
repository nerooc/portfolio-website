import React from 'react';
import Navbar from '../../molecules/Navbar/Navbar';
import Header from '../../molecules/Header/Header';

import './Hero.css';

const Hero = (props) => {
	return (
			<div className="landing-page">
				<Navbar />
				<Header />
			</div>
	);
}

export default Hero;