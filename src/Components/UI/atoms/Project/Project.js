import React from 'react';
import Button from '../Button/Button';
import './Project.css';

const Project = props => (
  <div className="project" style={{backgroundImage: `url(${props.image})`}}>
    <h2 className="project__tags">{props.tags.join(', ')}</h2>
    <h1 className="project__title">{props.children}</h1>
    <Button white>MORE</Button>
  </div>
);

export default Project;
