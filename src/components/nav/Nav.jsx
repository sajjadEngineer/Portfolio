
import React from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BiBookBookmark} from 'react-icons/bi'
import {RiServiceLine} from 'react-icons/ri'
import {BiMessageSquareDetail} from 'react-icons/bi'
import { useState } from 'react';
const Nav = () =>  {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav> 
      <a href="#" onClick={()=>setActiveNav('#')} className={activeNav==='#'?'active':''}><AiOutlineHome/></a>
      <a href="#about" onClick={()=>setActiveNav('#about')} className={activeNav==='#about' ? 'active' : ''}><AiOutlineUser/></a>
      <a href="#resume" onClick={()=>setActiveNav('#resume')} className={activeNav==='#resume' ? 'active' : ''}><BiBookBookmark/></a>
      <a href="#award" onClick={()=>setActiveNav('#award')} className={activeNav==='#award' ? 'active' : ''}><RiServiceLine /></a>
      <a href="#contact" onClick={()=>setActiveNav('#contact')} className={activeNav==='#contact' ? 'active' : ''}><BiMessageSquareDetail  /></a>
    </nav>
  )
}

export default Nav