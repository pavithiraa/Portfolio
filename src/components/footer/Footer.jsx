import React from 'react'
import './footer.css'
import {FaGithub} from 'react-icons/fa'
import {BsLinkedin} from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>
      <a href='#' className='footer__logo'>PAVI..</a>
      <ul className='permalinks'>
        <li><a href='#'>HOME</a></li>
        <li><a href='#about'>ABOUT</a></li>
        <li><a href='#experience'>EXPERIENCE</a></li>
        <li><a href='#portfolio'>PORTFOLIO</a></li>
        <li><a href='#contact'>CONTACT</a></li>
      
      </ul>

      <div className="footer__socials">
      <a href="https://github.com/pavithiraa" target='_blank' rel="noreferrer"><FaGithub/></a>
        <a href="https://www.linkedin.com/in/pavithiraa-mett-51127420b/" target='_blank' rel="noreferrer" ><BsLinkedin/></a>
      </div>
    </footer>
  )
}

export default Footer