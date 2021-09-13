import React from 'react'

const ProjectCard = ({ project}) => {

    return (
        <div className='highlightProject'>
            <img className='highlightImg' src={project.img} alt='projectimage' />
            <p>{project.title}</p>
            <p>{project.description}</p>
        </div>
    )

}

export default ProjectCard