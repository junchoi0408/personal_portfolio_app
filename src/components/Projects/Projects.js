import React from 'react';
import Project from './Project';
import './Projects.css';

const Projects = () => {
    return (
        <> 
            <div className="projects container">
                <div className="hr__container" id="projects">
                    <hr className="gradient__hr"/>
                </div>
                <h2 className="title">Projects</h2>
                <div className="projects__container">
                    <Project />
                    <Project />
                    <Project />
                </div>
            </div>
        </>
    )
}

export default Projects;
