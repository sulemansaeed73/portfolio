import React from 'react';
import NameSeperator from '../components/NameSeperator'

export default function Footer() {
    return (
        <section id="footer">
        <div className="footer container">
          <div className="brand">
            <NameSeperator name="Suleman Saeed"/>
          </div> 
          <h2>Web Developer & UI/UX Designer</h2>
          <div className="social-icon">
            <div className="social-item">
              <a href="#"><img src="https://img.icons8.com/bubbles/100/000000/facebook-new.png" alt="face book icon from icon 8" /></a>
            </div>
            <div className="social-item">
              <a href="#"><img src="https://img.icons8.com/bubbles/100/000000/instagram-new.png" alt="face book icon from icon 8" /></a>
            </div>
            <div className="social-item">
              <a href="#"><img src="https://img.icons8.com/bubbles/100/000000/behance.png" alt="face book icon from icon 8" /></a>
            </div>
          </div>
          <p>copyright ©2024.All rights reserved</p>
        </div>
      </section>
    )
}
