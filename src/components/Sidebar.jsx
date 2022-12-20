import React from 'react'
import Avatar from "../img/perfilguilhermelamim.jpg"
import SocialNetworks from './SocialNetworks'
import InformationContainer from './InformationContainer'
import "../styles/components/sidebar.scss"

const Sidebar = () => {
    return (
        <aside id="sidebar">
            <img src={Avatar} alt="Guilherme Jackson Lamim"></img>
            <p className="title">Desenvolvedor</p>
            <SocialNetworks/>
            <InformationContainer />
            <a href="https://drive.google.com/file/d/1GpmHDAwHaYhy_GdpHMbJyxI3NlZnIipZ/view?usp=sharing" download className="btn">
                Download currículo
            </a>
        </aside>
    )
}

export default Sidebar