import React from 'react'
import './header.css'
import Typical from 'react-typical'
import { useState } from 'react';
import mypic from '../../assets/images/pro.png'


import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BiBookBookmark} from 'react-icons/bi'
import {RiServiceLine} from 'react-icons/ri'
import {BiMessageSquareDetail} from 'react-icons/bi'

const Header = () => {
    const [activeNav, setActiveNav] = useState('#')
  return (
    <div>
<div class="main-wrapper" id='home'>
        
        <div class="large-header">
       
            <ul>
                 {/*<li><a href="#" onClick={()=>setActiveNav('#')} className={activeNav==='#'?'active':''}><AiOutlineHome/></a>Home</li>
               <li><a href="#about" onClick={()=>setActiveNav('#about')} className={activeNav==='#about' ? 'active' : ''}><AiOutlineUser/></a>about</li>
                
                  <li><a href="#resume"></a>Resume</li>
                <li><a href="#award"></a>Award</li>
                <li><a href="#contact"></a>Contact</li> */}


<a href="#" onClick={()=>setActiveNav('#')} className={activeNav==='#'?'active':''}>Home<AiOutlineHome/></a>
      <a href="#about" onClick={()=>setActiveNav('#about')} className={activeNav==='#about' ? 'active' : ''}>About<AiOutlineUser/></a>
      <a href="#resume" onClick={()=>setActiveNav('#resume')} className={activeNav==='#resume' ? 'active' : ''}>Resume<BiBookBookmark/></a>
      <a href="#award" onClick={()=>setActiveNav('#award')} className={activeNav==='#award' ? 'active' : ''}>Award<RiServiceLine /></a>
      <a href="#contact" onClick={()=>setActiveNav('#contact')} className={activeNav==='#contact' ? 'active' : ''}>Contact<BiMessageSquareDetail  /></a>
            </ul> 
            
            <div class="hp-wrapper">
            <div class="header-title">
                
                <div class="hc">
  
                    <label>Hello, I'm <span>Sajjad</span> </label>
                    
                
                        <h1>
                        {""}
                            <Typical
                            loop={Infinity}
                            steps={[
                                "Entusastic Dev 💪",
                                1000,
                                "Full stack Dev ⭐️",
                                1000,
                                "Python Dev ☂️",
                                1000,
                                "React Dev 🍇",
                                1000,
                            ]}
                            />
                        </h1>
                                      {""}

                    <p>Building Application with frontend and backend </p>
                    <div class="bt-ar">
                    <button class="btn"> Get Resume</button>
                    <button class="btn" > Hire Me</button>
                     </div>
                </div>
                </div>                
                <div class="pro-pic">
                <div class="pro-image">
                    <img src={mypic} alt="no image" />
                </div>
            </div>
        </div>
    </div>
</div>

    </div>
  )
}

export default Header