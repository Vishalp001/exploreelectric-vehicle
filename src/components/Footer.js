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
            <h3>Newsletter</h3>
            <p>Don't miss out, Sign Up for the weekly newsletter on EVs.</p>
            <input type='text' placeholder='Enter your email address' />
            <button>Subscribe</button>
          </div>

          <div className='social-icons'>
            <h3>Connect with us </h3>
            <div>
              <a href='https://m.facebook.com/106835948250906/' target='_blank'>
                <img src={fb} alt='' />
              </a>
              <a
                href='https://www.instagram.com/xplor.ev?r=nametag'
                target='_blank'
              >
                <img src={instagram} alt='' />
              </a>
              <a href='https://mobile.twitter.com/evxplor' target='_blank'>
                <img src={twitter} alt='' />
              </a>
              <a
                href='https://youtube.com/channel/UC6IMZ3UZs4Tcd8DCTZZ4wCA'
                target='_blank'
              >
                <img src={youtube} alt='' />
              </a>
              <a
                href='https://www.linkedin.com/company/xplorev'
                target='_blank'
              >
                <img src={linkedin} alt='' />
              </a>
            </div>
          </div>

          <div className='footer-support'>
            <h3>Help And Support</h3>
            <p>
              Contact Us: <a href=''>contact@xplorev.com </a>
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
