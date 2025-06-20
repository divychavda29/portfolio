import React from 'react';
import { useState } from 'react';
import './Navbar.css';
import logo from '../../assets/logo.png';
import { Link } from 'react-scroll';//
import contactImg from '../../assets/contact.png';
import Menu from '../../assets/menu.png'; // Assuming you have a menu icon for mobile view



const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);
    return (
        <nav className='navbar'>
            <img src={logo} alt="Logo" className='logo' />
            <div className='desktopMenu'>
                <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">Home</Link>
                <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">About</Link>
                <Link activeClass='active' to='projects' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">Project</Link>
                <Link activeClass='active' to='certificates' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">Certificates</Link>
            </div>
            <button className='desktopmenuBtn' onClick={() => {
                document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
            }}>
                <img src={contactImg} alt="" className='desktopmenuImg' />
                Contact me
            </button>

            <img src={Menu} alt="Menu" className='mobMenu' onClick={() => setShowMenu(!showMenu)} />
            <div className='navMenu' style={{ display: showMenu ? 'flex' : 'none' }}>
                <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className="listItem" onClick={() => setShowMenu(false)} >Home</Link>
                <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-100} duration={500} className="listItem" onClick={() => setShowMenu(!showMenu)}>About</Link>
                <Link activeClass='active' to='projects' spy={true} smooth={true} offset={-100} duration={500} className="listItem" onClick={() => setShowMenu(!showMenu)}>Project</Link>
                <Link activeClass='active' to='certificates' spy={true} smooth={true} offset={-100} duration={500} className="listItem" onClick={() => setShowMenu(!showMenu)}>Certificates</Link>
                <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-100} duration={500} className="listItem" onClick={() => setShowMenu(!showMenu)}>Contact</Link>
            </div>



        </nav>
    )
}

export default Navbar;
