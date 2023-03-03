import React from 'react'
import './testimonials.css'
import AVATAR1 from '../../assets/avatar1.jpg'
import AVATAR2 from '../../assets/avatar2.jpg'

// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from client</h5>
      <h2>Testimonials</h2>
      <Swiper
        className="container testi__container"
        // install Swiper modules
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        <SwiperSlide className="testi">
          <div className="client__avatar">
            <img src={AVATAR1} alt="Client avatar" />
          </div>
          <h5 className='client__name'>Ernest Achie</h5>
          <small className='client_review'> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate temporibus nesciunt inventore repellendus impedit facilis a asperiores laudantium, provident possimus quo voluptates laboriosam, quaerat, veniam ab quod. Voluptatum, facilis vel</small>
        </SwiperSlide>
        <SwiperSlide className="testi">
          <div className="client__avatar">
            <img src={AVATAR2} alt="Client avatar" />
          </div>
          <h5 className='client__name'>Ernest Achie</h5>
          <small className='client_review'> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate temporibus nesciunt inventore repellendus impedit facilis a asperiores laudantium, provident possimus quo voluptates laboriosam, quaerat, veniam ab quod. Voluptatum, facilis vel</small>
        </SwiperSlide>
      </Swiper>
    </section>
  )
}

export default Testimonials