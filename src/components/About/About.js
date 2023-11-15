import React from 'react'
import './about.css'
import Pradee from '../../Assest/Pradee.jpg'

function About() {
  return (
    <section id='about'>
      <h5>Get to Know</h5>
      <h2>About me</h2>

      <div className='cotainer about__container'>
        <div className='about__me'>
          <div className='about__me-image'>
            <img src={Pradee} alt="me"></img>
          </div>
        </div>

        <div className='about__content'>
         
            <p>Recent graduate with a Bachelor's degree in Physics with Computer Application, intrested in full stack development.
              Passionate about creating user-centered and efficient web applications.
              Eager to apply technical skills and collaborate within a team to build innovative solutions.</p>

            
          

             <p> Full stack developer with good profeciency in Javascript, HTML,CSS, React, MongoDb,Express</p>
          <a href='#contact' className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
    
 
  )
}

export default About