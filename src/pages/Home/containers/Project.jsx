import React from 'react'
import ContentSection from '../../../components/elements/ContentSection'
import { ListProject } from './listProject.js'
import TitleH2 from '../../../components/elements/TitleH2.jsx'
import CardProject from '../../../components/molecules/CardProject.jsx'

function Project() {
    return (
        <ContentSection id="project">
            <TitleH2>Proyectos</TitleH2>
            <div className='w-full flex flex-wrap items-center justify-center gap-4'>

            </div>
        </ContentSection>
    )
}

export default Project