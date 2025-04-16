import React from 'react'
import ContentSection from '../../../components/elements/ContentSection'
import TitleH2 from '../../../components/elements/TitleH2.jsx'
import CardProject from '../../../components/molecules/cardProject/CardProject.jsx'
import listProject from '../data/listProject.jsx'
import {useGlobalContext} from '../../../context/GlobalContext.jsx'
function Project() {
    const { contentPage } = useGlobalContext()
    const projects = listProject()

    return (
        <ContentSection id="projects">
            <TitleH2>{contentPage.projects.title}</TitleH2>
            <div className='w-full flex flex-wrap items-center justify-center gap-4 lg:gap-10 '>
                {
                    projects.map((project, index) => (

                        <CardProject key={index} title={project.title} description={project.description} imgs={project.imgs} technologies={project.technologies} linkGithub={project.linkGithub} linkDemo={project?.linkDemo} colorBorder={project.colorBorder} />
                    ))
                }
            </div>
        </ContentSection>
    )
}

export default Project