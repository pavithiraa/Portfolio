import React from 'react'
import {FaGithub} from 'react-icons/fa'
import {BsLinkedin} from 'react-icons/bs'

const Headersocials = () => {
  return (
    <div className='header__social'>
        <a href="https://www.linkedin.com/in/pavithiraa-mett-51127420b/" target='_blank' rel="noreferrer" ><BsLinkedin/></a>
        <a href="https://github.com/pavithiraa" target='_blank' rel="noreferrer"><FaGithub/></a>
    
    </div>
  )
}

export default Headersocials