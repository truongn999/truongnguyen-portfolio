import React from 'react'
import './contact.css'
import { MdOutlineEmail } from 'react-icons/md'
import { AiOutlineMessage } from 'react-icons/ai'
import { FaTelegramPlane } from 'react-icons/fa'


const Contact = () => {
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className='contact__option'>
            <MdOutlineEmail className='contact__option-icon' />
            <h4>Email</h4>
            <h5>nguyentruong2506999@gmail.com</h5>
            <a href="mailto:nguyentruong2506999@gmail.com">Send message</a>
          </article>
          <article className='contact__option'>
            <AiOutlineMessage className='contact__option-icon' />
            <h4>Messenger</h4>
            <h5>Nhựt Trường</h5>
            <a href="https://m.me/ntruong99">Send message</a>
          </article>
          <article className='contact__option'>
            <FaTelegramPlane className='contact__option-icon' />
            <h4>Telegram</h4>
            <h5>0706907717</h5>
            <a href="tel:+84706907717">Send message</a>
          </article>
        </div>
        {/* <form action="">
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name="email" id="email" placeholder='Your Email' required />
          <textarea name="message" id="text" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form> */}
      </div>
    </section>
  )
}

export default Contact
