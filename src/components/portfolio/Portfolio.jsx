import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/expense-tracker.jpeg';
import IMG2 from '../../assets/pizza.jpeg';
import IMG3 from '../../assets/blog.jpeg';
import IMG4 from '../../assets/google-calendar.jpeg';
import IMG5 from '../../assets/weather.png';
import {   Navigation} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
 import 'swiper/css/navigation';



const Portfolio = () => {
  return (
    <section id='portfolio'>
       <h5 style={{marginTop:"100px"}}>My Recent Work</h5>
       <h2>Portfolio</h2>

       <Swiper className="container portfolio__container" 
        modules={[ Navigation]}
        spaceBetween={40}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
       >
         <SwiperSlide className='portfolios'>
           <div className="portfolio__img">
             <img src={IMG1} alt="avatar" />
             
           </div>
           <h5 className='portfolio__name'>Expense Tracker</h5>
             <small className='portfolio__details' > A Simple Application which  user can
                                  accurate record of money inflow and outflow and built
                                  using MERN.</small>
                                  <div className="portfolio__item-cta">
            <a  className="btn" href="https://github.com/pavithiraa/Expense-Tracker" target="_blank" rel="noreferrer" >GITHUB</a>
             <a   className="btn btn-primary" href="https://reverent-bell-90eb69.netlify.app/" target="_blank" rel="noreferrer">  LIVE Demo</a>
            </div>                    
         </SwiperSlide>
         <SwiperSlide className='portfolios'>
           <div className="portfolio__img">
             <img src={IMG2} alt="avatar" />
             
           </div>
           <h5 className='portfolio__name'>Pizza Shop</h5>
             <small className='portfolio__details' >A Simple Application which  user can
                                 order and make payment and also add pizza
                                  using MERN.</small>
                                 <div  className="portfolio-credentials">
                                  <span>
                                    <small>credentials key: </small>
                                  <small>user: admin , </small>
                                  <small>pass: 123456</small>
                                   </span>
                                  </div>
                                 
                                                                
                                  <div className="portfolio__item-cta">
            <a  className="btn" href="https://github.com/pavithiraa/res" target="_blank" rel="noreferrer" >GITHUB</a>
             <a   className="btn btn-primary" href="https://res-nextjs.herokuapp.com/" target="_blank" rel="noreferrer">  LIVE Demo</a>
            </div>                    
         </SwiperSlide>
         <SwiperSlide className='portfolios'>
           <div className="portfolio__img">
             <img src={IMG3} alt="avatar" />
             
           </div>
           <h5 className='portfolio__name'>Blog App</h5>
             <small className='portfolio__details' > A Simple Blog Application where user can register,
                                       login,post Blogs and update userdetails 
                                       using MERN</small>                               
                                  <div className="portfolio__item-cta">
            <a  className="btn" href="https://github.com/pavithiraa/blog" target="_blank" rel="noreferrer" >GITHUB</a>
             <a   className="btn btn-primary" href="https://coruscating-sunburst-2cc483.netlify.app/" target="_blank" rel="noreferrer">  LIVE Demo</a>
            </div>                     
         </SwiperSlide>
         <SwiperSlide className='portfolios'>
           <div className="portfolio__img">
             <img src={IMG4} alt="avatar" />
            
           </div>
           <h5 className='portfolio__name'>Google Calendar</h5>
             <small className='portfolio__details' > A Single Page Calendar Application using
                                  React JS, which has an added advantage of labeling the events.</small>
                                  <div className="portfolio__item-cta">
            <a  className="btn" href="github:https://github.com/pavithiraa/google-calendar" target="_blank" rel="noreferrer" >GITHUB</a>
             <a   className="btn btn-primary" href="https://google-calendar-clone.netlify.app/" target="_blank" rel="noreferrer">  LIVE Demo</a>
            </div>                     
         </SwiperSlide>
         <SwiperSlide className='portfolios'>
           <div className="portfolio__img">
             <img src={IMG5} alt="avatar" />
             
           </div>
           <h5 className='portfolio__name'>Weather App</h5>
             <small className='portfolio__details' >A Single Page weather Application using
                                  React JS, weather can be shown in terms of city and country</small>
                                  
                                  <div className="portfolio__item-cta">
            <a  className="btn" href="https://github.com/pavithiraa/weather" target="_blank" rel="noreferrer" >GITHUB</a>
             <a   className="btn btn-primary" href="https://mystifying-jennings-44f8c3.netlify.app/" target="_blank" rel="noreferrer">  LIVE Demo</a>
            </div>                    
         </SwiperSlide>
       </Swiper>
    </section>
  )
}

export default Portfolio