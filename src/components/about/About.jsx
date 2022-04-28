import React from 'react'
import './about.css'
import ME from '../../assets/work.png'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

     <div className="container about__container">
     <div className="about__me">
       <div className="about__me-image">
         <img src={ME} alt='me-about' />
       </div>
     </div>

      <div className="about__content">
          <p>
          Goal-oriented full stack developer with a passion for
                      working on a project that solves problems with thoughtful
                      UI design, creating intuitive, dynamic user experiences
                      powered by strong backend. My core competency lies in
                      developing applications from its inception. I primarily
                      work with MERN stack among the full stack technologies. As
                      a full stack developer, my mission-driven work ethic to revolutionize
                      the project I work on.
          </p>

          <a href='#contact' className='btn btn-primary'>Let's Talk</a>
      </div>
     </div>
     

    </section>
  )
}

export default About