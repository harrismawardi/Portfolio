import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { ProjectCard } from '../../components'

const Projects = () => {

    const projectsArr = useSelector(state => state.projects)

   // console.log(projectsArr)

    const [projectElements, setProjectElements] = useState()

    useEffect(() => {
        const renderProjects = () => {
            return projectsArr.map(project => <ProjectCard project={project} /> )
        }
        setProjectElements(renderProjects)
    }, [])

    console.log(projectElements)

    return (
        <section id='projects'>
            {projectElements}
        </section>
    )
}

export default Projects