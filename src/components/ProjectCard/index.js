import React from 'react'

const ProjectCard = ({ project}) => {

    const col = (project.id % 4) == 0 ? 4 : project.id % 4;

    const gridArea = {
        'gridArea': `pr${col}`
    }

    return (
        <article className='project' style={gridArea}>
            <img src='' alt='projectimage' />
            <p>{project.title}</p>
            <p>{project.description}</p>
        </article>
    )

}

export default ProjectCard