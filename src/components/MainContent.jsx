import React from 'react'
import AboutContainer from './AboutContainer'
import ProjectsContainer from './ProjectsContainer'
import TechnologiesContainer from './TechnologiesContainer'
import '../styles/components/maincontent.scss'

const MainContent = () => {
    return (
        <main id="main-content">
            <AboutContainer/>
            <TechnologiesContainer/>
            <ProjectsContainer/>
        </main>
    )
}

export default MainContent