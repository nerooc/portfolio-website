import React from 'react';
import './Skill.css';

const Skill = props => (
  <div className = "skill">
      <img className = "skill__image" src={props.source} alt={props.children} />
      <h3 className = "skill__h3">{props.children}</h3>
  </div>
);

export default Skill;