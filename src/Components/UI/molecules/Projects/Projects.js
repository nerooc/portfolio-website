import React from 'react';
import Project from '../../atoms/Project/Project';

import './Projects.css';

const Projects = props => (
  <div className="projects">
    <Project />
    <Project />
    <Project />
    <Project />
    <Project />
    <Project />
    {/* tutaj map -> <Project props... ></Project>} */}
  </div>
);

export default Projects;
