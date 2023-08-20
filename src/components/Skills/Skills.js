import React from 'react'
import './skills.css'
import{BsPatchCheckFill} from'react-icons/bs'
function Skills() {
  return (
      <section id='skills'>
          <h5>The Skills I have</h5>
                <h2>My Proficiencies</h2>
          <div className='container skills__container'>
              <div className='skills__frontend'>
                  
                  <h3>Frontend Development</h3>
                    <div className='skills__content'>
                        <article className='skills__details'>
                            <BsPatchCheckFill className='skills__details-icons' />
                            <h4>HTML</h4>
                         </article>
                        <article className='skills__details'>
                            <BsPatchCheckFill className='skills__details-icons' />
                            <h4>CSS</h4>
                        </article>
                        <article className='skills__details'>
                            <BsPatchCheckFill className='skills__details-icons' />
                            <h4>Javascript</h4>
                        </article>
                        <article className='skills__details'>
                            <BsPatchCheckFill className='skills__details-icons' />
                            <h4>Bootstrap</h4>
                        </article>
                        <article className='skills__details'>
                            <BsPatchCheckFill className='skills__details-icons' />
                            <h4>React</h4>
                        </article>
                    </div>
              </div>

                <div className='skills__frontend'>
                  
                  <h3>Backend Development</h3>
                    <div className='skills__content'>
                        <article className='skills__details'>
                            <BsPatchCheckFill className='skills__details-icons' />
                            <h4>Node JS</h4>
                         </article>
                        <article className='skills__details'>
                            <BsPatchCheckFill className='skills__details-icons' />
                            <h4>Mongo DB</h4>
                        </article>
                        <article className='skills__details'>
                            <BsPatchCheckFill className='skills__details-icons' />
                            <h4>Express</h4>
                        </article>
                        <article className='skills__details'>
                            <BsPatchCheckFill className='skills__details-icons' />
                            <h4>MYSQL</h4>
                        </article>
                        
                    </div>
                </div>
            </div>
             
    </section>
  )
}

export default Skills