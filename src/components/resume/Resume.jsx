import React from 'react'
import './resume.css'
import { useState } from 'react'
const Resume = () => {
  const[index,setIndex]=useState(0);
  return (
    <div>
      <div class="resume-wrapper"  id='resume'>

    {/* <div class="hd-wrapper">
        <div className="resume-header">
        <h2>Resume</h2>
        </div>
        <div className="resume-bio">
        <p>My formal Bio details</p>
        </div>
    </div> */}

<div className="award_grid">
        <div className="award_heading"><h2>Resume</h2></div>
        <div className="Achievement"><p> My formal Bio details</p></div>
        <div className="line">
            <p></p>
        </div>
        </div>

<div className="content">


    <div className='tabs_menu'>
    <div className="side-line">

    </div>
<div className="tablist_menu">
    <div className={`tab_heading ${index===0?`active`:null}`} onClick={()=>{setIndex(0)}}>
        Education
    </div>
    <div   className={`tab_heading ${index===1?`active`:null}`} onClick={()=>{setIndex(1)}}>
        Work History
    </div>
    <div  className={`tab_heading ${index===2?`active`:null}`} onClick={()=>{setIndex(2)}}>
        Programming Skills
    </div>
    <div  className={`tab_heading ${index===3?`active`:null}`} onClick={()=>{setIndex(3)}}>
        Projects
    </div>
    <div  className={`tab_heading ${index===4?`active`:null}`} onClick={()=>{setIndex(4)}}>
        intrests
    </div>
</div>

<div className="tab_content" hidden={index !== 0}>
        
  <div className="edu-wrapper" >
    
    <div className="uni">
      
      <h2>Master of Computer Science</h2>
      <p>University of Qurtuba</p>
    
      <h2>Bachelor Degree in Computer Science</h2>
      <p>University of Peshawar </p>
      
      <h2>Diploma of Associate Engineer DAE</h2>
      <p>Government College of Technology Peshawar</p>
      
    </div>
    <div className="year">
      <p>2017-2019</p>
      <p>2014-2016</p>
      <p>2011-2014</p>
    </div>
  </div>
</div>


<div className="tab_content" hidden={index !== 1}> 
  <div className="edu-wrapper" >
    
    <div className="uni">
      <h3>Front-end & back-end</h3>
      <h5>Full stack Developer Intern</h5>
      <p> Curently working on MERN stack web and moblile application and also teach the online courses.</p>
  
      <p> Develope the E-commerce website using Django framework to managing the products,reivews and user payment etc.</p>
  
      <p> Integrated the web apps with backend services to create new user on onboarding application with dynamic content.</p>

      <p> I strech my mental capecity to develope advance UI as per the given design</p>
  
    </div>
    <div className="year">
      <p>2017-2019</p>
    </div>
  </div>

  </div>

<div className="tab_content" hidden={index !== 2}>

<div className="pb-wrapper">

<div className="head-clm">
  <p>Python</p>
<div className="progress-left">
<div id="pyhton">
</div>
</div>
</div>

<div className="head-clm">
  <p>Django</p>
<div className="progress-left">
<div id="django">
</div>
</div>
</div>

<div className="head-clm">
  <p>JavaScript</p>
<div className="progress-left">
<div id="myProgress">
</div>
</div>
</div>

<div className="head-clm">
  <p>React Js</p>
<div className="progress-left">
<div id="myProgress">
</div>
</div>
</div>
<div className="head-clm">
  <p>HTML</p>
<div className="progress-left">
<div id="html">
</div>
</div>
</div>
<div className="head-clm">
  <p>CSS3</p>
<div className="progress-left">
<div id="css">
</div>
</div>
</div>
<div className="head-clm">
  <p>Core PHP</p>
<div className="progress-left">
<div id="myProgress">
</div>
</div>
</div>
<div className="head-clm">
  <p>C++ with Arduino</p>
<div className="progress-left">
<div id="myProgress">
</div>
</div>
</div>
<div className="head-clm">
  <p>Mysql</p>
<div className="progress-left">
<div id="mysql">
</div>
</div>
</div>

<div className="head-clm">
  <p>Node Js</p>
<div className="progress-left">
<div id="node">
</div>
</div>
</div>



</div>


</div>
<div className="tab_content" hidden={index !== 3}>

<div className="edu-wrapper" >
    
    <div className="uni">
      <h3>Personal Portfolio Website</h3>
      <h5>Technology used:React Js Html & CSS</h5>
      <p>A personal portfolio website to show all my details and project at one place.</p>
    </div>
    <div className="year">
      <p>2021-2022</p>
    </div>
  </div>

  
<div className="edu-wrapper" >
    
    <div className="uni">
      <h3>E-commerce Website</h3>
      <h5>Technology used:Django, Json, JavaScirpt & Boostrap</h5>
      <p>Ecommerce website for showcasing and selling products and payment system with paypal.</p>
    </div>
    <div className="year">
      <p>2017-2019</p>
    </div>
  </div>

<div className="edu-wrapper" >
    
    <div className="uni">
      <h3>Obstacle Avoiding Robot</h3>
      <h5>Technology used:C++ & Arduino their necessary components </h5>
      <p>This robot detect the obstacle in their path with help of ultrasonic sensor.its shows the power of code to control the hardware.</p>
    </div>
    <div className="year">
      <p>2017-2019</p>
    </div>
  </div>


</div>
<div className="tab_content" hidden={index !== 4}>
<div className="edu-wrapper" >
    
    <div className="uni">   
      <h3>Reading</h3>
      <p>Reading is the greatest way to keep yourself updated and unlock potential power.</p>
    </div>
  </div>
<div className="edu-wrapper" >
    
    <div className="uni">   
      <h3>Traveling</h3>
      <p>traveling historical places and things latest invention is my deep intrest</p>
    </div>
  </div>
  
<div className="edu-wrapper" >
    
    <div className="uni">   
      <h3>Physical Gaming</h3>
      <p>Playing every physical game for fitness and refreshing.</p>
    </div>
  </div>

</div>
</div>


</div>
</div>

<div className="free-space">

</div>
    </div>
  )
}

export default Resume