import React from 'react'
import Avatar from "../img/imageRandom.jpg"
import SocialNetworks from './SocialNetworks'
import InformationContainer from './InformationContainer'
import "../styles/components/sidebar.sass"

const Sidebar = () => {
    return (
        <aside id="sidebar">
            <img src={Avatar} alt="Guilherme Jackson Lamim"></img>
            <p className="title">Desenvolvedor</p>
            <SocialNetworks/>
            <InformationContainer />
            <a href="" className="btn">
                Download currículo
            </a>
        </aside>
    )
}

export default Sidebar