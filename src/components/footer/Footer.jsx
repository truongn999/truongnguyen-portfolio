import React from 'react'
import './footer.css'
import { FiFacebook, FiInstagram, FiTwitter } from 'react-icons/fi'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='ft__logo'>Truong Nguyen</a>
      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Experience</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Home</a></li>
        <li><a href="#">Home</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
      <div className="ft__socials">
        <a href="https://facebook.com/ntruong99"><FiFacebook /></a>
        <a href="https://www.instagram.com/nhut_truongn/"><FiInstagram /></a>
        <a href="https://facebook.com/ntruong99"><FiTwitter /></a>
      </div>
      <div className="ft_copyright">
        <small>&copy; TruongNguyen</small>
      </div>
    </footer>
  )
}

export default Footer