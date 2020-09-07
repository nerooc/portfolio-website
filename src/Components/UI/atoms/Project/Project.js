import React from 'react';
import Button from '../Button/Button';
import './Project.css';

const Project = (props) => {
	return (
			<div className="project">
				<h2 className="project__tags">CODED, DESIGNED</h2>
				<h1 className="project__title">CSUX.pl</h1>
				<Button>MORE</Button>
			</div>
	);
}

export default Project;