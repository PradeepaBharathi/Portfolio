import React from 'react'
import FinalCV from '../../Assest/Final_CV_Pradeepa.pdf'
function CTA() {
  return (
      <div className='cta'>
          <a href={FinalCV} download className='btn'>Download CV</a>
          <a href='#contact' className='btn btn-primary'>Let's Talk</a>
    </div>
  )
}

export default CTA