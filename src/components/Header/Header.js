import React from 'react'
import './header.css'
import CTA from './CTA.js'
import Pradee from '../../Assest/Pradee.jpg'
import HeaderSocials from './HeaderSocials'
function Header() {
  return (
      <header>
      <div className='container header__container'>
        <h5>Hello I'm</h5>
        <h1> Pradeepa Bharathi</h1>
        <h5 className='text-light'>Full Stack Developer</h5>
        <CTA /> 
        <div className='me'>
      <img src={Pradee} alt='' ></img>
        </div>
        <a href='#contact' className='scroll-down'>Scroll Down</a>
        <HeaderSocials />
         
      </div>
     
        
          </header>
      
  )
}

export default Header