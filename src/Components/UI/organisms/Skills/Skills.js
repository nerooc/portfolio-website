import React from 'react';

import SectionHeader from '../../atoms/SectionHeader/SectionHeader';
import Skill from '../../atoms/Skill/Skill';

import html_icon from '../../../../Images/html5.svg';
import css_icon from '../../../../Images/css3.svg';
import sass_icon from '../../../../Images/sass.svg';
import js_icon from '../../../../Images/js.svg';
import react_icon from '../../../../Images/react.svg';
import bootstrap_icon from '../../../../Images/bootstrap.svg';
import git_icon from '../../../../Images/git.svg';
import figma_icon from '../../../../Images/figma.svg';

import node_icon from '../../../../Images/node.svg';
import mysql_icon from '../../../../Images/mysql.svg';
import mongodb_icon from '../../../../Images/mongo.svg';
import ts_icon from '../../../../Images/typescript.svg';


import english_icon from '../../../../Images/english.svg';
import spanish_icon from '../../../../Images/spanish.svg';
import cpp_icon from '../../../../Images/cpp.svg';
import c_icon from '../../../../Images/c.svg';



import './Skills.css';

const Skills = props => (
  <div className="skills">
      <SectionHeader className="skills__header">UMIEJĘTNOŚCI</SectionHeader>
      
      <div className="skills__all">
        <h1 className="skills__h1">KORZYSTAM:</h1>
        <div className="skills__container">
            <Skill source={html_icon}>HTML5</Skill>
            <Skill source={css_icon}>CSS3</Skill>
            <Skill source={sass_icon}>Sass</Skill>
            <Skill source={js_icon}>Javascript</Skill>
            <Skill source={react_icon}>React</Skill>
            <Skill source={bootstrap_icon}>Bootstrap</Skill>
            <Skill source={git_icon}>Git</Skill>
            <Skill source={figma_icon}>Figma</Skill>
        </div>

        <h1 className="skills__h1">UCZĘ SIĘ:</h1>
        <div className="skills__container">
            <Skill source={node_icon}>Node.js</Skill>
            <Skill source={mysql_icon}>MySQL</Skill>
            <Skill source={mongodb_icon}>Mongo DB</Skill>
            <Skill source={ts_icon}>Typescript</Skill>
        </div>

        <h1 className="skills__h1">INNE:</h1>
        <div className="skills__container">
            <Skill source={english_icon}>English C1/C2</Skill>
            <Skill source={spanish_icon}>Spanish B1/B2</Skill>
            <Skill source={cpp_icon}>C++</Skill>
            <Skill source={c_icon}>C</Skill>
        </div>
      </div>
  </div>
);

export default Skills;