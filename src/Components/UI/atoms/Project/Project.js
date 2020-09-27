import React from 'react';
import Button from '../Button/Button';
import './Project.css';

/* project component gets all the unique data with props and renders them */
const Project = props => (

  <div className="project">
    <img className="project__image" src={props.image} alt={props.name}/>
    <div className = "project__container">
      <h2 className="project__tags">{props.tags.join(', ')}</h2>
      <h1 className="project__title">{props.name}</h1>

      <p className="project__description">{props.children}</p>

      <div className="project__buttons">
        <Button white noTransition small>DEMO</Button>
        <span className="project__divider"></span>
        <Button onClick={() => {
                window.open(props.ghlink);
              }} white noTransition small>MORE</Button>
      </div>
    </div>
  </div>
);

export default Project;
