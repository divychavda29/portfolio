import React from 'react';
import './Contact.css';
import Fb from '../../assets/facebook-icon.png'
import Tt from '../../assets/twitter.png'
import Yt from '../../assets/youtube.png'
import Ig from '../../assets/instagram.png'


const Contact = () => {

    return (
        <section className='contactPage'>
            <div id="contact">
                <h1 className="contactPageTitle">Contact  <span className='do'>Me</span></h1>
                <span className="contactDesc">Please fill out the below to discuss any work opportunities.</span>
                <form action="" className="contactForm" >
                    <input type="text" placeholder='Your Name' className='name' />
                    <input type="email" placeholder='Your Email' className='email' />
                    <textarea name="message" id="" className='msg' rows="20" placeholder='Your Message'></textarea>
                    <button type="submit" value='send' className='submitBtn'>Submit</button>
                    <div className="links">
                        <img src={Fb} alt="media" className="link" />
                        <img src={Tt} alt="media" className="link" />
                        <img src={Yt} alt="media" className="link" />
                        <img src={Ig} alt="media" className="link" />
                    </div>
                </form>
            </div>
        </section>
    )
}

export default Contact;
