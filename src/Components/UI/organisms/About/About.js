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
        <SectionHeader className="about__header">O MNIE</SectionHeader>
      </Fade>

      <Paragraph className="about__paragraph">
      Nazywam się Tomasz Gajda, jestem na trzecim roku Informatyki Stosowanej na Akademii Górniczo-Hutniczej w Krakowie. Od roku uczę się technologii Front-End’owych i jestem pewny, że jest to moje miejsce w branży. Członkostwo w kole naukowym rozwinęło moje umiejętności projektowania, co bardzo szybko przerodziło się w nowe hobby. Swobodnie posługuję się językiem angielskim (w mowie i w piśmie) oraz hiszpańskim w stopniu średnim. Poza design’owaniem i programowaniem stron internetowych, moją pasją jest wszelkiego rodzaju motorsport - od rajdów po samą królówą sportów motorowych - formułę 1. 
      </Paragraph>
      <Fade bottom duration={2500} distance="30px">
        <Button className="about__button">SPRAWDŹ</Button>
      </Fade>
      <img src={separator} className="about__separator" alt="aboutSeparator" />

      <Services />

      <img src={separator} className="about__separator" alt="aboutSeparator" />
    </div>
    <Skills />
  </div>
);

export default About;
