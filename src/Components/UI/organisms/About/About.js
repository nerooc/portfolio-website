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
        My name is Tomasz Gajda, I’m a third year Applied Computer Science student
        at AGH University of Science and Technology in Cracow, Poland.
      </Paragraph>
      <Fade bottom duration={2500} distance="30px">
        <Button className="about__button">EXPLORE</Button>
      </Fade>
      <img src={separator} className="about__separator" alt="aboutSeparator" />

      <Services />

      <img src={separator} className="about__separator" alt="aboutSeparator" />
    </div>
    <Skills />
  </div>
);

export default About;
