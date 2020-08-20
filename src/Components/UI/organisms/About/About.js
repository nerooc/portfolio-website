import React from 'react';
import SectionHeader from '../../atoms/SectionHeader/SectionHeader';
import Paragraph from '../../atoms/Paragraph/Paragraph';
import Button from '../../atoms/Button/Button';
import separator from '../../../../Images/separatorBlack.png';

import './About.css';

const About = () => {
	return (
        <div className="about--section">
            <SectionHeader className="about--header">ABOUT ME</SectionHeader>
           
            <Paragraph className="about--paragraph">My name is Tomasz Gajda, I’m a third year Applied Computer Science student at AGH University of Science and Technology in Cracow, Poland. </Paragraph>
            
            <Button className="about--button">EXPLORE</Button>
            
            <img src={separator} className="about--separator" alt="aboutSeparator" />
       </div>
	);
}

export default About;