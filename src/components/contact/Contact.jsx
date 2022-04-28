import React from 'react'
import './contact.css'
import {MdOutlineMail} from 'react-icons/md'
import {BsTelephoneInbound} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {BsLinkedin} from 'react-icons/bs'
import  { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_s134bbf', 'template_73fcpy5', form.current, 'rmGhrSFojCaEdiU8g')
      

    e.target.reset()
    };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className='contact__options'>
          <article className='contact__option'>
         < MdOutlineMail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>hrpavithraa2000@gmail.com</h5>
            <a href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=hrpavithraa2000@gmail.com" target="_blank">Send a Message</a>
          </article>
       
        
          
       
        
          <article className='contact__option'>
          <FaGithub  className='contact__option-icon'/>
            <h4>GitHub</h4>
            <h5>pavithiraa</h5>
            <a href="https://github.com/pavithiraa" target='_blank' rel="noreferrer" >Let's Connect</a>
          </article>
        
        
          <article className='contact__option'>
         < BsTelephoneInbound className='contact__option-icon' />
            <h4>Phone</h4>
            
            <a href='tel:8838700579'>Make a call</a>
          </article>
          </div>
        {/* End of contact option */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name'  required/>
          <input type="email" name='email' placeholder='Your Email'  required/>
          <textarea name="message" rows="7" placeholder='Your Message' required> </textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>

        </form>
      </div>
    </section >
  )
}

export default Contact