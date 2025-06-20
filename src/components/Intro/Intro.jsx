import React from 'react';
import './Intro.css';
import bg from '../../assets/dp3.png';
import { Link } from 'react-scroll';
import BtnImg from '../../assets/hireme.png';

const Intro = () => {
    return (
        <section id="intro">
            <div className="introContent">
                <span className="hello">Hello,</span>
                <span className="introText">I'm<span className='introName'> Divy</span><br />Full Stack Devloper</span>
                <p className='inroPara'>I am a skilled Full Stack Developer with expertise in both<br /> frontend and backend technologies.</p>
                <Link><button className='btn'>Hire me</button></Link>
            </div>
            <img src={bg} alt="Profile" className='bg' />
        </section>
    )
}

export default Intro;