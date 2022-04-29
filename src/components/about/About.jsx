import React from 'react'
import awpic from '../../assets/images/award.JPG'
import './about.css'
const About = () => {
  return (
    <div>

<div class="about-section" id='about'>
  
        <div class="about-pic">
           <div class="pic-col">
            <div class="awar-pic">
            <img src={awpic} alt="no img" />    
            </div>
        </div>
        
        </div>
        <div class="about-details">
              <div class="about-wrapper">
            <h3>About Me</h3>
             
                <p>  Full-stack web developer with background knowledge of MERN and Django framework, along having deep technical experience with python and IoT projects. I am a gold medalist in MCS, having a deep technical advance knowledge of information technology.
                </p>  
                <h4>Here are a Few Highlights</h4>
                <ul>
                    <li>Full stack web Developer</li>
                    <li>Building REST API</li>
                    <li>Managing Database</li>
                    <li>React & Django</li>
                    <li>Interactive front-end as per the design</li>
                </ul>

               
            </div>  
        </div>
    </div>
    </div>
  )
}

export default About