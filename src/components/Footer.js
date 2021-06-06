import React from 'react'
import instagram from '../images/instagram.png'
import youtube from '../images/youtube.png'
import linkedin from '../images/linkedin.png'
import twitter from '../images/twitter.png'

const Footer = () => {
  return (
    <footer>
      <div className='container footer-section'>
        <div className='footer-subs'>
          <h3>Xplore with us</h3>
          <p>
            Your ultimate destination for the latest news and knowledge on
            Electric Vehicles.
          </p>
          <input type='text' placeholder='Enter your email address' />
          <button>Subscribe</button>
        </div>

        <div className='social-icons'>
          <h3>Connect with us </h3>
          <div>
            <img src={instagram} alt='' />
            <img src={twitter} alt='' />
            <img src={youtube} alt='' />
            <img src={linkedin} alt='' />
          </div>
          <p className='credit'>© 2021 · Created by Vishal · Made with ❤️</p>
        </div>

        <div className='footer-support'>
          <h3>Help And Support</h3>
          <p>
            Email us <a href=''> hi@xplore.com </a>
          </p>
          <ul>
            <li>
              <a href=''>Support</a>
            </li>
            <li>
              <a href=''>Terms of use</a>
            </li>
            <li>
              <a href=''>About Us</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer
