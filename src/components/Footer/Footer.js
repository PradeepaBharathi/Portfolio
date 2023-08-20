import React from 'react'
import './footer.css'
import {BsInstagram,BsLinkedin,BsMailbox2} from 'react-icons/bs'
function Footer() {
  return (
    <footer>
      <a href='#' className='footer-logo'>Pradeepa</a>
      <ul className='permalinks'>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#skills'>Skills</a></li>
        <li><a href='#portfolio'>Portfolio</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>
      
      <div className='footer__socials'>
        <a href="https://www.instagram.com/"><BsInstagram /></a>
        <a href="https://www.linkedin.com/"><BsLinkedin/></a>
        <a href="https://mail.google.com/"><BsMailbox2/></a>
      </div>

      <div className='footer-copyright'>
        <small>&copy; All rights reserved.</small>
      </div>
      </footer>
  )
}

export default Footer