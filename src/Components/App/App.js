import React from 'react';
import logo from './logo.svg';
import Navbar from '../Navbar/Navbar';
import Header from '../Header/Header';
import './App.css';

function App() {
	return (
		//{/* teoretyczny Navbar */}
		<div className="landing-page">
			<Navbar />
			<Header />
		</div>
	);
}

export default App;
