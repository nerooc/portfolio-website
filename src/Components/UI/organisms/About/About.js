import React from 'react';
import SectionHeader from '../../atoms/SectionHeader/SectionHeader';
import Paragraph from '../../atoms/Paragraph/Paragraph';
import Button from '../../atoms/Button/Button';
import Services from '../../molecules/Services/Services';
import separator from '../../../../Images/separatorBlack.png';


import './About.css';

const About = () => {
	return (
        <div className="about">
            <SectionHeader className="about__header">ABOUT ME</SectionHeader>
           
            <Paragraph className="about__paragraph">My name is Tomasz Gajda, I’m a third year Applied Computer Science student at AGH University of Science and Technology in Cracow, Poland. </Paragraph>
            
            <Button className="about__button">EXPLORE</Button>
            
            <img src={separator} className="about__separator" alt="aboutSeparator" />
            
            <Services />

       </div>
	);
}

export default About;