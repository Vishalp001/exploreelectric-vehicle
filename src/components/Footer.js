import React, { useState } from 'react'
import instagram from '../images/instagram.png'
import youtube from '../images/youtube.png'
import linkedin from '../images/linkedin.png'
import twitter from '../images/twitter.png'
import fb from '../images/fb.png'
import { db } from '../firebase'
import 'firebase/firestore'

const Footer = () => {
  const [email, setEmail] = useState('')

  const handelSubmit = (e) => {
    e.preventDefault()

    db.collection('emails')
      .add({
        email: email,
      })
      .then(() => {
        alert('Thank You for Subscribing 👍')
      })
      .catch((error) => {
        alert(error.message)
      })
    setEmail('')
  }

  return (
    <>
      <footer>
        <hr />
        <div className='container footer-section'>
          <div className='footer-subs'>
            <h3>Newsletter</h3>
            <p>Don't miss out, Sign Up for the weekly newsletter on EVs.</p>
            <form onSubmit={handelSubmit}>
              <input
                type='email'
                value={email}
                placeholder='Enter your email address'
                onChange={(e) => setEmail(e.target.value)}
              />
              <button type='submit'>Subscribe</button>
            </form>
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
      <p className='credit'>
        © 2021 · Created by
        <a href='https://vishalp-portfolio.netlify.app/' target='_blank'>
          Vishal
        </a>
        · Made with ❤️
      </p>
    </>
  )
}

export default Footer
