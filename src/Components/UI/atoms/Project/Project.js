import React from 'react';
import Button from '../Button/Button';
import './Project.css';


/* project component gets all the unique data with props and renders them */
const Project = props => {

    const buttonDemo = props.demolink
        ? <Button
                onClick={() => {
                window.open(props.demolink);
            }}
                white
                noTransition
                small>DEMO</Button>
        : null;
    const buttonGithub = props
        .tags
        .includes('coded')
        ? <Button
                onClick={() => {
                window.open(props.ghlink);
            }}
                white
                noTransition
                small>GITHUB</Button>
        : null;
    const buttonFigma = props
        .tags
        .includes('designed')
        ? <Button
                onClick={() => {
                window.open(props.figmalink);
            }}
                white
                noTransition
                small>FIGMA</Button>
        : null;

    return (
        <div className="project">
            <img className="project__image" src={props.image} alt={props.name}/>
            <div className="project__container">
                <h2 className="project__tags">{props
                        .tags
                        .join(', ')}</h2>
                <h1 className="project__title">{props.name}</h1>

                <p className="project__description">{props.children}</p>

                <div className="project__buttons">
                    {buttonDemo}
                    {buttonGithub}
                    {buttonFigma}
                </div>
            </div>
        </div>
    );
}

export default Project;
