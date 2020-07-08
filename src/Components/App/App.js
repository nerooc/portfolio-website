import React from 'react';
import logo from './logo.svg';
import Navbar from '../Navbar/Navbar';
import './App.css';

function App() {
	return (
		//{/* teoretyczny Navbar */}
		<div className="landing-page">
			<Navbar />
		</div>

		/* 
    <div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>Hello Codecademy!</p>
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn React
				</a>
			</header>
    </div>
    */
	);
}

export default App;
