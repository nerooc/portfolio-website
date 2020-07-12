import React from 'react';
import Navbar from '../Navbar/Navbar';
import Header from '../Header/Header';
import ITberries from '../ITberries/ITberries';
import './App.css';

function App() {
	return (
		//{/* teoretyczny Navbar */}
		<html>
			<div className="landing-page">
				<Navbar />
				<Header />
			</div>
			<div>
				<ITberries />
			</div>
			<div className="test"></div>
		</html>
	);
}

export default App;
