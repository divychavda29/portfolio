import React from 'react';
import './Certificate.css';

const Certificate = () => {
    return (
        <section id="certificates" class="certificates-section">
            <h2>Official <span className='do'>Certificates</span></h2>
            <div class="certificate-grid">
                <div class="certificate-card">
                    <h3>Microsoft<br />Office</h3>
                    <p>C-DAC</p>
                    <a href="https://drive.google.com/file/d/19AKFSdp_n_hSlSo0CP4jLjljzGSMITf6/view?usp=drive_link" target="_blank" class="btn">View Certificate</a>
                </div>
                <div class="certificate-card">
                    <h3>HTML & CSS Crash Course</h3>
                    <p>Coursera</p>
                    <a href="https://drive.google.com/file/d/1B30PuMkcDG5uyNHfZSH-Oa9GLwthhgKB/view?usp=drive_link" target="_blank" class="btn">View Certificate</a>
                </div>
                <div class="certificate-card">
                    <h3>Web Development For Beginners</h3>
                    <p>Simplilearn</p>
                    <a href="https://drive.google.com/file/d/1B8bIQaq1ZUyggzofaDF_SBqHxZVpGZLo/view?usp=drive_link" target="_blank" class="btn">View Certificate</a>
                </div>
                <div class="certificate-card">
                    <h3>Website Design & Development</h3>
                    <p>Infosys Springboard</p>
                    <a href="https://drive.google.com/file/d/1B7GB_68K5an08s4PenWFEQAPBMsthEh2/view?usp=drive_link" target="_blank" class="btn">View Certificate</a>
                </div>
            </div>
        </section>
    )
}

export default Certificate;
