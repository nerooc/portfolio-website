import React from 'react';
import SectionHeader from '../../atoms/SectionHeader/SectionHeader';
import Paragraph from '../../atoms/Paragraph/Paragraph';
import Button from '../../atoms/Button/Button';
import Services from '../../molecules/Services/Services';
import Skills from '../Skills/Skills';

import './About.css';

const About = props => (
  <div className="about">
    <div className="about__anchor">
      <SectionHeader className="about__header">ABOUT ME</SectionHeader>

      <Paragraph className="about__paragraph">
        My name is <span style={{fontWeight:600}}>Tomasz Gajda</span>, I'm a third year <span style={{fontWeight:600}}>Applied Computer Science</span> student at the AGH University of Science and Technology in Krakow. I have been learning Front-End technologies for a year now and this time was just enough to make sure that this is my place in the industry. <br/><br/>Membership in the science club developed my design skills, which quickly turned into a new hobby. I am <span style={{fontWeight:600}}>fluent in English (spoken and written)</span> and beginner Spanish. Apart from designing and programming websites, I'm deeply interested in cybersecurity and motorsports, especially <span style={{fontWeight:600}}>Formula 1</span>. 
      </Paragraph>

      <Button 
        onClick={() => {
          window.open('https://github.com/nerooc');
        }}
        className="about__button">MORE</Button>

      <img src="./images/separators/separatorBlack.png" className="about__separator" alt="aboutSeparator" />

      <Services />

      <img src="./images/separators/separatorBlack.png" className="about__separator" alt="aboutSeparator" />
    </div>
    <Skills />
  </div>
);

export default About;
