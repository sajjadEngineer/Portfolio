import React from 'react'
import './about_me.css'
import awpic from '../../assets/images/award.JPG'
const About_me = () => {
  return (
    <div className='main_section'>
      
      <div className="award_grid">
        <div className="award_heading"><h2>About Me</h2></div>
        <div className="Achievement"><p> My Summery</p></div>
        <div className="line">
            <p></p>
        </div>
        </div>

        <div className="content">
        <div className="main_wrapper">

        
        <div className="left">
        <div class="awar-pic">
            <img src={awpic} alt="no img" />    
            </div>
        </div>


        <div className="right">
        <div class="about-wrapper">
            <h4>Programming Background</h4>
             
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
        
  

      

      </div>
  )
}

export default About_me