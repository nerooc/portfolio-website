import React from 'react';

import SectionHeader from '../../atoms/SectionHeader/SectionHeader';
import Skill from '../../atoms/Skill/Skill';

import html_icon from '../../../../images/skills/html5.svg';
import css_icon from '../../../../images/skills/css3.svg';
import sass_icon from '../../../../images/skills/sass.svg';
import js_icon from '../../../../images/skills/js.svg';
import react_icon from '../../../../images/skills/react.svg';
import bootstrap_icon from '../../../../images/skills/bootstrap.svg';
import git_icon from '../../../../images/skills/git.svg';
import figma_icon from '../../../../images/skills/figma.svg';

import php_icon from '../../../../images/skills/php.svg';
import mysql_icon from '../../../../images/skills/mysql.svg';
import mongodb_icon from '../../../../images/skills/mongo.svg';
import ts_icon from '../../../../images/skills/typescript.svg';
import wp_icon from '../../../../images/skills/wp.svg'

import english_icon from '../../../../images/skills/english.svg';
import spanish_icon from '../../../../images/skills/spanish.svg';
import cpp_icon from '../../../../images/skills/cpp.svg';
import c_icon from '../../../../images/skills/c.svg';



import './Skills.css';

const Skills = props => (
  <div className="skills">
      <SectionHeader className="skills__header">SKILLS</SectionHeader>
      
      <div className="skills__all">
        <h1 className="skills__h1">USING NOW:</h1>
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

        <h1 className="skills__h1">LEARNING:</h1>
        <div className="skills__container">
            <Skill source={php_icon}>PHP</Skill>
            <Skill source={mysql_icon}>MySQL</Skill>
            <Skill source={mongodb_icon}>Mongo DB</Skill>
            <Skill source={ts_icon}>Typescript</Skill>
            <Skill source={wp_icon}>Wordpress</Skill>
        </div>

        <h1 className="skills__h1">DIFFERENT:</h1>
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