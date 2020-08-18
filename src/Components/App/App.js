import React from 'react';
import Navbar from '../Navbar/Navbar';
import Header from '../Header/Header';
import ITberries from '../ITberries/ITberries';
import SectionHeader from '../SectionHeader/SectionHeader';
import Paragraph from '../Paragraph/Paragraph';
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
				<SectionHeader className="about--header">ABOUT ME</SectionHeader>
				<Paragraph className="about--paragraph">My name is Tomasz Gajda, I’m a third year Applied Computer Science student at AGH University of Science and Technology in Cracow, Poland. </Paragraph>
			</div>
		</html>
	);
}

export default App;

