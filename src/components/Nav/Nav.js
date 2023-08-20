import React from 'react'
import './nav.css'
import {BiHome,BiBookAlt} from 'react-icons/bi'
import{AiOutlineUser} from'react-icons/ai'
import { AiOutlineProject } from 'react-icons/ai'
import{IoIosContact}from 'react-icons/io'
import { useState } from 'react'


function Nav() {
    const[activeNav,setActiveNav] = useState('#')
  return (
      <nav>
          <a href="#" onClick={()=>setActiveNav('#')} className={activeNav === '#' ? 'active':''}><BiHome /></a>
          <a href="#about" onClick={()=>setActiveNav('#about')}  className={activeNav === '#about' ? 'active':''}><AiOutlineUser/></a>
          <a href="#skills" onClick={()=>setActiveNav('#skills')}  className={activeNav === '#skills' ? 'active':''}><BiBookAlt /></a>
          <a href="#portfolio" onClick={()=>setActiveNav('#portfolio')}  className={activeNav === '#portfolio' ? 'active':''}><AiOutlineProject /></a>
          <a href="#contact" onClick={()=>setActiveNav('#contact')}  className={activeNav === '#contact' ? 'active':''}><IoIosContact/></a>
    </nav>
  )
}

export default Nav