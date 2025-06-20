import React from 'react';
import './Skill.css';
import UIDesign from '../../assets/ui-design.png';
import WebDesign from '../../assets/website-design.png';
import AppDesign from '../../assets/app-design.png';


const Skill = () => {
    return (
        <section id="skills">
            <span className='skillTitle'>What I <span className='do'>do</span></span>
            <span className='skillDesc'>I’m a passionate full-stack web developer specializing in crafting responsive frontends, building secure backends, and managing efficient databases. I turn ideas into complete web applications using technologies like HTML, CSS, JavaScript, React.js, Node.js, Express, and MongoDB. My focus is on creating clean, user-friendly, and high-performing solutions that scale well and deliver real-world value. Whether it’s designing an engaging UI, integrating APIs, or deploying a full-stack project, I aim to provide smooth and impactful digital experiences from start to finish.</span>
            <div className="skillBars">
                <div className="skillBar">
                    <img src={UIDesign} alt="UIDesign" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>Frontend Development</h2>
                        <p>Building user-friendly and responsive interfaces using HTML, CSS, JavaScript, and React.js.</p>
                    </div>
                </div>
                <div className="skillBar">
                    <img src={WebDesign} alt="WebDesign" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>Backend Development</h2>
                        <p>Creating secure and scalable server-side logic using Node.js and Express.js.</p>
                    </div>
                </div>
                <div className="skillBar">
                    <img src={AppDesign} alt="AppDesign" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>Database Management</h2>
                        <p>Managing structured data with MongoDB and MySQL for smooth data operations.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skill;
