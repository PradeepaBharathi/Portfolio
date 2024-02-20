import React from 'react'
import CV from '../../Assest/Resume(2).pdf'
function CTA() {
  return (
      <div className='cta'>
          <a href={CV}  className='btn' target='blank'>View CV</a>
          <a href='#contact' className='btn btn-primary'>Let's Talk</a>
    </div>
  )
}

export default CTA