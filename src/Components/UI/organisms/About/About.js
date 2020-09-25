import React from 'react';
import Fade from 'react-reveal/Fade';
import SectionHeader from '../../atoms/SectionHeader/SectionHeader';
import Paragraph from '../../atoms/Paragraph/Paragraph';
import Button from '../../atoms/Button/Button';
import Services from '../../molecules/Services/Services';
import separator from '../../../../Images/separatorBlack.png';
import Skills from '../Skills/Skills';

import './About.css';

const About = props => (
  <div className="about">
    <div className="about__anchor">
      <Fade top duration={2500} distance="30px">
        <SectionHeader className="about__header">ABOUT ME</SectionHeader>
      </Fade>

      <Paragraph className="about__paragraph">
      My name is Tomasz Gajda, I'm a third year Applied Computer Science student at the AGH University of Science and Technology in Krakow. I have been learning Front-End technologies for a year and this time was just enough for me to make sure that this is my place in the industry. <br/><br/>Membership in the science club developed my design skills, which quickly turned into a new hobby. I am fluent in English (spoken and written) and intermediate Spanish. Apart from designing and programming websites, my passion is all kinds of motorsport - from rallies to the very king of motorsport - formula 1.
      </Paragraph>
      <Fade bottom duration={2500} distance="30px">
        <Button className="about__button">MORE</Button>
      </Fade>
      <img src={separator} className="about__separator" alt="aboutSeparator" />

      <Services />

      <img src={separator} className="about__separator" alt="aboutSeparator" />
    </div>
    <Skills />
  </div>
);

export default About;
