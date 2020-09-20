import React from 'react';
import Button from '../Button/Button';
import './Project.css';

const Project = props => (
  <div className="project" style={{backgroundImage: `url(${props.image})`}}>
    <div className = "project__container">
      <h2 className="project__tags">{props.tags.join(', ')}</h2>
      <h1 className="project__title">{props.name}</h1>

      <p className="project__description">{props.children}</p>

      <div className="project__buttons">
        <Button white noTransition small>DEMO</Button>
        <Button onClick={() => {
                window.open(props.link);
              }} white noTransition small>MORE</Button>
      </div>

    </div>
  </div>
);

export default Project;
