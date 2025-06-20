import React from 'react';
import './Project.css';

const Project = () => {
    return (
        <section id="projects" className="projects-section">
            <h2>My  <span className='do'>Projects</span></h2>
            <div className="project-cards">
                <div className="card">
                    <h3>10 Small Projects</h3>
                    <p>HTML, CSS &<br /> JavaScript</p>
                    <a href="https://github.com/divychavda29/10-smallproject" className="btn">Live Demo</a>
                </div>
                <div className="card">
                    <h3>Indian Temple</h3>
                    <p>HTML, CSS &<br /> JavaScript</p>
                    <a href="https://github.com/divychavda29/Indian-Temple" className="btn">Live Demo</a>
                </div>
                <div className="card">
                    <h3>Amazon Homepage </h3>
                    <p>HTML, CSS &<br /> JavaScript</p>
                    <a href="https://github.com/divychavda29/-Amazon.com-homepage" className="btn">Live Demo</a>
                </div>
                <div className="card1">
                    <h1>Resume </h1>
                    <button className='resume'>
                        <a href="" className="btn1">Show➡️</a></button>
                </div>
            </div>
        </section>
    )
}

export default Project;
