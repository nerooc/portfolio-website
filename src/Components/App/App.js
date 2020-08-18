import React from 'react';
import Navbar from '../Navbar/Navbar';
import Header from '../Header/Header';
import ITberries from '../ITberries/ITberries';
import SectionHeader from '../SectionHeader/SectionHeader';
import './App.css';

function App() {
	return (
		<html>
			<div className="landing-page">
				<Navbar />
				<Header />
			</div>
			<div>
				<ITberries />
			</div>
			<div className="test">
				<SectionHeader className="hehe">ABOUT ME</SectionHeader>
			</div>
		</html>
	);
}

export default App;

