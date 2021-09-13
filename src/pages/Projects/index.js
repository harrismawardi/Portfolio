import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { ProjectCard } from '../../components'

const Projects = () => {

    const projectsArr = useSelector(state => state.projects)

    const [projectThumbnails, setProjectThumbnails] = useState()
    const [highlightProject, setHighlightProject] = useState(projectsArr[0])

    const projectHandler = (e) => {
        console.log(e.target.ariaLabel)
        const selectedProj = projectsArr.find(project => project.title === e.target.ariaLabel)
        setHighlightProject(selectedProj)
    }

    useEffect(() => {
        const renderThumbnails = () => {
            return projectsArr.map(project => <img aria-label={project.title} src={project.img} alt={project.title} onClick={projectHandler} />)
        }
        setProjectThumbnails(renderThumbnails)
    }, [])

    return (
        <section id='projects' className='gridContainer'>
            <div className="sidebar">
                {projectThumbnails}
            </div>
            <ProjectCard project={highlightProject} />
        </section>
    )
}

export default Projects