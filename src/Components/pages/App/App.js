import React from 'react';
import ITberries from '../../UI/organisms/ITberries/ITberries';
import SectionHeader from '../../UI/atoms/SectionHeader/SectionHeader';
import Paragraph from '../../UI/atoms/Paragraph/Paragraph';
import Button from '../../UI/atoms/Button/Button';
import separator from '../../../Images/separatorBlack.png';
import Hero from '../../UI/organisms/Hero/Hero';
import './App.css';

function App() {
	return (
		<html>
			<Hero />
			<div>
				<ITberries />
			</div>
			<div className="test">
				<SectionHeader className="about--header">ABOUT ME</SectionHeader>
				<Paragraph className="about--paragraph">My name is Tomasz Gajda, I’m a third year Applied Computer Science student at AGH University of Science and Technology in Cracow, Poland. </Paragraph>
				<Button className="about--button">EXPLORE</Button>
				<img src={separator} className="about--separator" alt="aboutSeparator" />

			</div>
		</html>
	);
}

export default App;

