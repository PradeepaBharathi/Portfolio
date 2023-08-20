import React,{useRef} from 'react'
import './Contact.css'
import { HiOutlineMail } from 'react-icons/hi'
import { FaLinkedinIn, FaInstagram } from 'react-icons/fa'
import emailjs from '@emailjs/browser'
function Contact() {
const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_lfg4bzc', 'template_ipincxi', form.current, '8DzTlDjC2OkVGyxyI')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    e.target.reset()
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className='container contact__container'>
        <div className='contact_options'>
          <article className='contact_option'>
            <HiOutlineMail className='contact_option-icon' />
            <h4>Email</h4>
            <h5>bharathi83201@gmail.com</h5>
            <a href='mailto:bharathi83201@gmail.com' target='_blank' rel="noreferrer">Send a message</a>
          </article>
          <article className='contact_option'>
            <FaLinkedinIn className='contact_option-icon'/>
            <h4>LinkedIn</h4>
            <h5>Pradeepa Bharathi</h5>
            <a href='https://www.linkedin.com/in/pradeepa-bharathi-gandhi-1627491a6/' target='_blank' rel="noreferrer">My Profile</a>
          </article>
          
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type='text' name='name' placeholder='Your Full Name' required/>
          <input type='email' name='email' placeholder='Your Email' required />
          <textarea name='message' rows='7'placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact