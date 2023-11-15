import React from 'react'
import CV from '../../Assest/CV(2).pdf'
function CTA() {
  return (
      <div className='cta'>
          <a href={CV} download className='btn'>Download CV</a>
          <a href='#contact' className='btn btn-primary'>Let's Talk</a>
    </div>
  )
}

export default CTA