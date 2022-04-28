import React from 'react'
import './experience.css'
import {BsPatchCheckFill}  from 'react-icons/bs';

const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills I Have</h5>
      <h2>My Skills</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend  & Backend Development</h3>
          <div className="experience__content">
            <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icons'/>
            <h4>HTML</h4>
            
            </article>
            <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icons' />
            <h4>CSS</h4>
            
            </article>
            <article className='experience__details'>
            <BsPatchCheckFill  className='experience__details-icons'/>
            <h4>Javascript</h4>
            
            </article>
            <article className='experience__details'>
            <BsPatchCheckFill  className='experience__details-icons'/>
            <h4>Bootstap</h4>
            
            </article>
            <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icons' />
            <h4>Tailwind</h4>
            
            </article>
            <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icons' />
            <h4>React</h4>
            
            </article>
            <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icons' />
            <h4>Node JS</h4>
            
            </article>
            <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icons' />
            <h4>MongoDB</h4>
            
            </article>
            <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icons' />
            <h4>Express</h4>
            
            </article>
          
          </div>

        </div>

        {/* End of frontend */}
      {/* <div className="experience__backend">
        <h3>Backend Development</h3>
          <div className="experience__content">
            <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icons' />
            <h4>Node JS</h4>
            
            </article>
            <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icons' />
            <h4>MongoDB</h4>
            
            </article>
            <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icons' />
            <h4>Express</h4>
            
            </article>
            <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icons'/>
            <h4>MySQL</h4> 
            </article>
            </div>
        </div> */}
      </div>
    
    </section>
  )
}

export default Experience