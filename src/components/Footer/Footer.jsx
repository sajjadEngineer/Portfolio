import React from 'react'
import Contact from '../contact/Contact'
import './footer.css'
const Footer = () => {
  return (
    <div className='footer' id='contactwidth: 300px;
    height: 300px;'>
          <div className="award_grid">
        <div className="award_heading"><h2>Contact Me</h2></div>
        <div className="Achievement"><p>Let's keep in Touch</p></div>
        <div className="line">
            <p></p>
        </div>
        </div>

        <div className="content">
            <Contact/>
        </div>
        <div className="free-space">

            </div>
    </div>
  )
}

export default Footer