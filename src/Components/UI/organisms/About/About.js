import React from 'react';
import SectionHeader from '../../atoms/SectionHeader/SectionHeader';
import Paragraph from '../../atoms/Paragraph/Paragraph';
import Button from '../../atoms/Button/Button';
import Service from '../../atoms/Service/Service';
import separator from '../../../../Images/separatorBlack.png';

import design from '../../../../Images/design.png';
import maintenance from '../../../../Images/maintenance.png';
import development from '../../../../Images/development.png';

import './About.css';

const About = () => {
	return (
        <div className="about">
            <SectionHeader className="about__header">ABOUT ME</SectionHeader>
           
            <Paragraph className="about__paragraph">My name is Tomasz Gajda, I’m a third year Applied Computer Science student at AGH University of Science and Technology in Cracow, Poland. </Paragraph>
            
            <Button className="about__button">EXPLORE</Button>
            
            <img src={separator} className="about__separator" alt="aboutSeparator" />

            <div className="services">
                <Service className="services__service-unit" title="DESIGN" source={design}>I can design the site based on your needs and suggestions. I can also design the site from scratch and consult you during the job.</Service>

                <Service className="services__service-unit" title="DEVELOPMENT" source={development}>I can design the site based on your needs and suggestions. I can also design the site from scratch and consult you during the job.</Service>

                <Service className="services__service-unit" title="MAINTENANCE" source={maintenance}>I can design the site based on your needs and suggestions. I can also design the site from scratch and consult you during the job.</Service>
            </div>

       </div>
	);
}

export default About;