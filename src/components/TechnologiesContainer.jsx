import { DiHtml5,DiCss3, DiReact, DiAngularSimple, DiAndroid } from 'react-icons/di'
import { SiTypescript } from "react-icons/si";
import '../styles/components/technologiescontainer.scss'
import React from 'react'

const technologies = [
    { id: 'react', name: 'React', icon: <DiReact/> },
    { id: 'angular', name: 'Angular', icon: <DiAngularSimple/> },
    { id: 'typescript', name: 'Typescript', icon: <SiTypescript/> },
    { id: 'html', name: 'HTML5', icon: <DiHtml5/> },
    { id: 'css', name: 'CSS3', icon: <DiCss3/> },
    { id: 'android', name: 'Android', icon: <DiAndroid/> }
];

const TechnologiesContainer = () => {
    return <section className='technologies-container'>
        <h2>Tecnologias</h2>
        { <div className="technologies-grid">
            {technologies.map((tech) =>(
                <div className="technology-card" id={tech.id} key={tech.id}>
                    {tech.icon}
                    <div className="technology-info">
                        <h3>{tech.name}</h3>
                    </div>
                </div>
            ))}
        </div> }
    </section>
};

export default TechnologiesContainer
