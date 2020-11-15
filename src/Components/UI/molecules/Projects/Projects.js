import React from 'react';
import Project from '../../atoms/Project/Project';
import projectsData from '../../../../fixtures/projects.json';
import './Projects.css';

class Projects extends React.Component {
    render() {

        let projects = [];

        for (let project in projectsData) {
            const pushable = {
                id: project,
                ...projectsData[project]
            }
            projects.push(pushable);
        }

        return (
            <div className="projects">

                {projects.map((project) => {
                    if (this.props.filter === "all" || project.tags.includes(this.props.filter)) {
                        return <Project
                            key={project.id}
                            image={project.image}
                            tags={project.tags}
                            name={project.name}
                            ghlink={project.ghlink}
                            demolink={project.demolink}
                            figmalink={project.figmalink}>{project.description}</Project>
                    } else {
                        return null;
                    }
                })}

            </div>
        );
    }
}

export default Projects;
