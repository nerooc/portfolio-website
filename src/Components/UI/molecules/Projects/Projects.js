import React from 'react';
import Project from '../../atoms/Project/Project';

import './Projects.css';
import testimg from '../../../../Images/cosmic-background.jpg';


class Projects extends React.Component{
  state = {
    projects: {
      forkify:{
        name: 'Forkify',
        tags: ['coded'],
        image: testimg
      },

      eatsome:{
        name: 'eatsome.',
        tags: ['coded'],
        image: testimg
      },

      jammming:{
        name: 'Jammming',
        tags: ['coded'],
        image: testimg
      },

      budgety:{
        name: 'Budgety',
        tags: ['coded'],
        image: testimg
      },

      otcSite:{
        name: 'OTC Site',
        tags: ['coded', 'designed'],
        image: testimg
      },

      pigDiceGame:{
        name: 'Pig Dice Game',
        tags: ['coded'],
        image: testimg
      },

      AureliaPoC:{
        name: 'Aurelia.js Blog',
        tags: ['coded', 'designed'],
        image: testimg
      },

      brickBreaker:{
        name: 'Brick Breaker',
        tags: ['coded'],
        image: testimg
      },

      csux:{
        name: 'CSUX.pl',
        tags: ['coded', 'designed?'],
        image: testimg
      },

      neroCars:{
        name: 'Nero Cars Rental',
        tags: ['coded', 'designed'],
        image: testimg
      },
      
      sgo:{
        name: 'Symulator Głębii Ostrości',
        tags: ['coded', 'designed'],
        image: testimg
      },

      discordBot:{
        name: 'Discord Bot',
        tags: ['coded'],
        image: testimg
      },

      projectRunes:{
        name: 'Project Runes',
        tags: ['coded', 'designed'],
        image: testimg
      },

      itberries:{
        name: 'itberries.pl',
        tags: ['coded', 'designed'],
        image: testimg
      },

      telephoners:{
        name: 'Telephoners',
        tags: ['designed'],
        image: testimg
      },

      integra:{
        name: 'Integra',
        tags: ['coded'],
        image: testimg
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
        tags: this.state.projects[project].tags
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
                    >{project.name}</Project>  
        })}

        {/* tutaj map -> <Project props... ></Project>} */}
      </div>
    );
  }
} 

export default Projects;
