import React from 'react';
import Project from '../../atoms/Project/Project';

import './Projects.css';
import forkify__img from '../../../../Images/projects/forkify.png';
import eatsome__img from '../../../../Images/projects/eatsome.png';
import budgety__img from '../../../../Images/projects/budgety.png';
import otcSite__img from '../../../../Images/projects/otcsite.png';
import pig__img from '../../../../Images/projects/pig.png';
import motoblog__img from '../../../../Images/projects/motoblog.png';
import brickbreaker__img from '../../../../Images/projects/brickbreaker.png';
import jammming__img from '../../../../Images/projects/jammming.png';
import csux__img from '../../../../Images/projects/csux.png';
import sgo__img from '../../../../Images/projects/sgo.png';
import nerocars__img from '../../../../Images/projects/nerocars.png';
import integra__img from '../../../../Images/projects/integra.png';
import itberries__img from '../../../../Images/projects/itberries.png';
import runes__img from '../../../../Images/projects/runes.png';
import discordbot__img from '../../../../Images/projects/discordbot.jpg';

import testimg from '../../../../Images/cosmic-background.jpg';

class Projects extends React.Component{
  state = {
    projects: {
      forkify:{
        name: 'Forkify',
        tags: ['coded'],
        image: forkify__img,
        description: 'Recipe browsing in Javascript (using food2fork API)'
      },

      eatsome:{
        name: 'eatsome.',
        tags: ['coded'],
        image: eatsome__img,
        description: 'Restaurant browsing in React.js (using Yelp API)'
      },

      jammming:{
        name: 'Jammming',
        tags: ['coded'],
        image: jammming__img,
        description: 'Search for songs and create new playlists with React.js'
      },

      budgety:{
        name: 'Budgety',
        tags: ['coded'],
        image: budgety__img,
        description: 'An app that allows you to count your budget per month.'
      },

      otcSite:{
        name: 'OTC Site',
        tags: ['coded', 'designed'],
        image: otcSite__img,
        description: 'Test landing page for OTC S.A. joint-stock company in Cracow'
      },

      pigDiceGame:{
        name: 'Pig Dice Game',
        tags: ['coded'],
        image: pig__img,
        description: 'A dice game named "Pig"'
      },

      AureliaPoC:{
        name: 'Aurelia.js Blog',
        tags: ['coded', 'designed'],
        image: motoblog__img,
        description: 'A demo blog application made using Aurelia.js'
      },

      brickBreaker:{
        name: 'Brick Breaker',
        tags: ['coded'],
        image: brickbreaker__img,
        description: 'Basic game created using Javascript (canvas)'
      },

      csux:{
        name: 'CSUX.pl',
        tags: ['coded', 'designed?'],
        image: csux__img,
        description: 'Strona konferencji Ciemna Strona UX'
      },

      neroCars:{
        name: 'Nero Cars Rental',
        tags: ['coded', 'designed'],
        image: nerocars__img,
        description: 'Sports car rental website'
      },
      
      sgo:{
        name: 'Symulator Głębii Ostrości',
        tags: ['coded', 'designed'],
        image: sgo__img,
        description: 'Projekt stworzony na zajęcia z "Podstaw Grafiki Komputerowej"'
      },

      discordBot:{
        name: 'Discord Bot',
        tags: ['coded'],
        image: discordbot__img,
        description: 'Discord bot written in Javascript'
      },

      projectRunes:{
        name: 'Project Runes',
        tags: ['coded', 'designed'],
        image: runes__img,
        description: 'Modern website about Runes'
      },

      itberries:{
        name: 'itberries.pl',
        tags: ['coded', 'designed'],
        image: itberries__img,
        description: 'Strona koła naukowego ITberries'
      },

      integra:{
        name: 'Integra',
        tags: ['coded'],
        image: integra__img,
        description: 'Aplikacja służąca do integracji'
      }

    }
  }


  render(){

    let projects = [];

    for(let project in this.state.projects){
      const pushable = {
        id: project,
        name: this.state.projects[project].name,
        image: this.state.projects[project].image,
        tags: this.state.projects[project].tags,
        description: this.state.projects[project].description
      }
      projects.push(pushable);
    }


    return(
      <div className="projects">

        {projects.map((project) => {

          console.log(project);
          return <Project
                    key={project.id} 
                    image={project.image} 
                    tags={project.tags} 
                    name={project.name}
                    >{project.description}</Project>  
        })}

        {/* tutaj map -> <Project props... ></Project>} */}
      </div>
    );
  }
} 

export default Projects;
