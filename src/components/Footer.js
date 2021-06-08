import React from 'react'
import instagram from '../images/instagram.png'
import youtube from '../images/youtube.png'
import linkedin from '../images/linkedin.png'
import twitter from '../images/twitter.png'
import fb from '../images/fb.png'

const Footer = () => {
  return (
    <>
      <footer>
        <hr />
        <div className='container footer-section'>
          <div className='footer-subs'>
            <h3>NEWSLETTER</h3>
            <p>Don't miss out, Sign Up for the weekly newsletter on EVs.</p>
            <input type='text' placeholder='Enter your email address' />
            <button>Subscribe</button>
          </div>

          <div className='social-icons'>
            <h3>Connect with us </h3>
            <div>
              <img src={fb} alt='' />
              <img src={instagram} alt='' />
              <img src={twitter} alt='' />
              <img src={youtube} alt='' />
              <img src={linkedin} alt='' />
            </div>
          </div>

          <div className='footer-support'>
            <h3>Help And Support</h3>
            <p>
              Contact Us: <a href=''> aniket@xplorev.com </a>
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
      <p className='credit'>© 2021 · Created by Vishal · Made with ❤️</p>
    </>
  )
}

export default Footer
