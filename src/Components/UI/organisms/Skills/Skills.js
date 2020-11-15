import React from 'react';

import SectionHeader from '../../atoms/SectionHeader/SectionHeader';
import Skill from '../../atoms/Skill/Skill';

import './Skills.css';

const Skills = props => (
    <div className="skills">
        <SectionHeader className="skills__header">SKILLS</SectionHeader>

        <div className="skills__all">
            <h1 className="skills__h1">USING NOW:</h1>
            <div className="skills__container">
                <Skill source="./images/skills/html5.svg">HTML5</Skill>
                <Skill source="./images/skills/css3.svg">CSS3</Skill>
                <Skill source="./images/skills/sass.svg"></Skill>
                <Skill source="./images/skills/js.svg">Javascript</Skill>
                <Skill source="./images/skills/react.svg">React</Skill>
                <Skill source="./images/skills/bootstrap.svg">Bootstrap</Skill>
                <Skill source="./images/skills/git.svg">Git</Skill>
                <Skill source="./images/skills/figma.svg">Figma</Skill>
            </div>

            <h1 className="skills__h1">LEARNING:</h1>
            <div className="skills__container">
                <Skill source="./images/skills/typescript.svg">Typescript</Skill>
                <Skill source="./images/skills/php.svg">PHP</Skill>
                <Skill source="./images/skills/postgresql.svg">PostgreSQL</Skill>
                <Skill source="./images/skills/wp.svg">Wordpress</Skill>
            </div>

            <h1 className="skills__h1">DIFFERENT:</h1>
            <div className="skills__container">
                <Skill source="./images/skills/english.svg">English C1/C2</Skill>
                <Skill source="./images/skills/spanish.svg">Spanish B1/B2</Skill>
                <Skill source="./images/skills/cpp.svg">C++</Skill>
                <Skill source="./images/skills/c.svg">C</Skill>
            </div>
        </div>
    </div>
);

export default Skills;