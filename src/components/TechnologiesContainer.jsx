import { DiHtml5,DiCss3, DiJsBadge, DiMysql, DiReact, DiNodejsSmall } from 'react-icons/di'
import '../styles/components/technologiescontainer.sass'
import React from 'react'

const technologies = [
    { id: 'html', name: 'HTML5', icon: <DiHtml5/> },
    { id: 'css', name: 'CSS3', icon: <DiCss3/> },
    { id: 'js', name: 'JavaScript', icon: <DiJsBadge/> },
    { id: 'node', name: 'Node.JS', icon: <DiNodejsSmall/> },
    { id: 'mysql', name: 'MySQL', icon: <DiMysql/> },
    { id: 'react', name: 'React', icon: <DiReact/> }
];

const TechnologiesContainer = () => {
    return <section className='technologies-container'>
        <h2>Tecnolgias</h2>
        { <div className="technologies-grid">
            {technologies.map((tech) =>(
                <div className="technology-card" id={tech.id} key={tech.id}>
                    {tech.icon}
                    <div className="technology-info">
                        <h3>{tech.name}</h3>
                        <p>Explicação do que eu sei sobre a tecnologia</p>
                    </div>
                </div>
            ))}
        </div> }
    </section>
};

export default TechnologiesContainer
