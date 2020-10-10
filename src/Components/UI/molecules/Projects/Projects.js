import React from 'react';
import Project from '../../atoms/Project/Project';

import forkify__img from '../../../../images/projects/forkify.png';
import eatsome__img from '../../../../images/projects/eatsome.png';
import budgety__img from '../../../../images/projects/budgety.png';
import otcSite__img from '../../../../images/projects/otcsite.png';
import pig__img from '../../../../images/projects/pig.png';
import motoblog__img from '../../../../images/projects/motoblog.png';
import brickbreaker__img from '../../../../images/projects/brickbreaker.png';
import jammming__img from '../../../../images/projects/jammming.png';
import csux__img from '../../../../images/projects/csux.png';
import sgo__img from '../../../../images/projects/sgo.png';
import sexycars__img from '../../../../images/projects/sexycars.png';
import itberries__img from '../../../../images/projects/itberries.png';
import runes__img from '../../../../images/projects/runes.png';
import discordbot__img from '../../../../images/projects/discordbot.png';

import './Projects.css';

class Projects extends React.Component{
  state = {
    projects: {
      csux:{
        name: 'csux.pl',
        tags: ['coded'],
        image: csux__img,
        description: 'Official "Ciemna Strona UX" conference website',
        demolink: 'http://csux.pl',
        ghlink: 'https://github.com/nerooc/ciemnastronaux'
      },

      AureliaPoC:{
        name: 'MotoBlog',
        tags: ['coded'],
        image: motoblog__img,
        description: 'A demo blog application made using Aurelia.js',
        ghlink: 'https://github.com/nerooc/Aurelia.js-PoC'
      },

      brickBreaker:{
        name: 'Brick Breaker',
        tags: ['coded'],
        image: brickbreaker__img,
        description: 'Basic Javascript game created using Canvas',
        ghlink: 'https://github.com/nerooc/Brick-Breaker'
      },

      eatsome:{
        name: 'eatsome.',
        tags: ['coded'],
        image: eatsome__img,
        description: 'Restaurant browsing in React.js (using Yelp API)',
        ghlink: 'https://github.com/nerooc/eatsome.'
      },

      otcSite:{
        name: 'OTC Site',
        tags: ['coded', 'designed'],
        image: otcSite__img,
        description: 'Landing page for OTC company in Cracow',
        ghlink: 'https://github.com/nerooc/otc-site',
        figmalink: 'https://www.figma.com/file/COgxLYsHi0iFKIrTDrcRWZ/OTC-Site---Official?node-id=0%3A1&viewport=912%2C699%2C0.06757233291864395'
      },

      jammming:{
        name: 'Jammming',
        tags: ['coded'],
        image: jammming__img,
        description: 'Search for songs and create new playlists with React.js',
        ghlink: 'https://github.com/nerooc/jammming'
      },

      budgety:{
        name: 'Budgety',
        tags: ['coded'],
        image: budgety__img,
        description: 'JS app that allows you to count your monthly budget',
        ghlink: 'https://github.com/nerooc/budgety'
      },

      pigDiceGame:{
        name: 'Pig Dice Game',
        tags: ['coded'],
        image: pig__img,
        description: 'A dice game named "Pig"',
        ghlink: 'https://github.com/nerooc/Pig-Dice-Game'
      },

      
      sexyCars:{
        name: 'sexycars.pl',
        tags: ['designed'],
        image: sexycars__img,
        description: 'Sports car rental website (redesign)',
        figmalink: 'https://www.figma.com/file/Q2KZzeaxKQy6VmJzzKbOj0/sexycars---Official?node-id=0%3A1&viewport=2154%2C3021%2C0.8898117542266846'
      },
      
      
      sgo:{
        name: 'DOF Simulator',
        tags: ['coded'],
        image: sgo__img,
        description: 'C++ depth of field sim made with WxWidgets',
        ghlink: 'https://github.com/nerooc/symulacja-glebi-ostrosci'
      },

      forkify:{
        name: 'Forkify',
        tags: ['coded'],
        image: forkify__img,
        description: 'Recipe browsing in Javascript (using food2fork API)',
        ghlink: 'https://github.com/nerooc/forkify'
      },

      discordBot:{
        name: 'Discord Bot',
        tags: ['coded'],
        image: discordbot__img,
        description: 'Discord bot written in Javascript (Discord.js)',
        ghlink: 'https://github.com/nerooc/discord-bot'
      },

      projectRunes:{
        name: 'Hávamál',
        tags: ['designed'],
        image: runes__img,
        description: 'Modern website about runes, designed with Figma',
        figmalink: 'https://www.figma.com/file/nM1VzQ4RXpzZ4SA3CJcAs5/Havamal---Official?node-id=0%3A1&viewport=173%2C445%2C0.0258468184620142'
      },

      itberries:{
        name: 'itberries.pl',
        tags: ['designed'],
        image: itberries__img,
        description: 'Official ITberries student club website, designed with Figma',
        figmalink: 'https://www.figma.com/file/Wpjag9sYtQgY5Uqha74eE3/itberries.pl?viewport=0%2C0%2C1'
      }

    }
  }

  render(){

    let projects = [];

    for(let project in this.state.projects){
      const pushable = {
        id: project,
        ...this.state.projects[project]
      }
      projects.push(pushable);
    }

    return(
      <div className="projects">

        {projects.map((project) => {
          if(this.props.filter === "all" || project.tags.includes(this.props.filter)){
            return <Project
                    key={project.id} 
                    image={project.image} 
                    tags={project.tags} 
                    name={project.name}
                    ghlink={project.ghlink}
                    demolink={project.demolink}
                    figmalink={project.figmalink}
                    >{project.description}</Project>  
          } else {
            return null;
          }
        })}

      </div>
    );
  }
} 

export default Projects;
