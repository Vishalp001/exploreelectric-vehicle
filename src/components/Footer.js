import React from 'react'
import { GrTwitter } from 'react-icons/gr'
import { ImFacebook2 } from 'react-icons/im'
import { SiInstagram } from 'react-icons/si'
import { AiFillYoutube } from 'react-icons/ai'
import { GrLinkedinOption } from 'react-icons/gr'

import logo from '../images/white.png'
const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#111111' }}>
      <div className='container py-3'>
        <div className='row py-4'>
          <div className='col-lg-4 col-md-6 mb-4 mb-lg-0'>
            <img src={logo} alt='logo' width='180' className='mb-3'></img>
            <p>
              Your ultimate destination for the latest news and knowledge on
              Electric Vehicles (EVs)
            </p>
            <ul className='list-inline f-icons mt-4'>
              <li className='list-inline-item'>
                <a
                  href='https://mobile.twitter.com/evxplor'
                  target='_blank'
                  title='twitter'
                >
                  <GrTwitter />
                </a>
              </li>
              <li className='list-inline-item'>
                <a
                  href='https://m.facebook.com/106835948250906/'
                  target='_blank'
                  title='facebook'
                >
                  <ImFacebook2 />
                </a>
              </li>
              <li className='list-inline-item'>
                <a
                  href='https://www.instagram.com/xplor.ev?r=nametag'
                  target='_blank'
                  title='instagram'
                >
                  <SiInstagram />
                </a>
              </li>
              <li className='list-inline-item'>
                <a
                  href='https://www.linkedin.com/company/xplorev'
                  target='_blank'
                  title='linkedin'
                >
                  <GrLinkedinOption />
                </a>
              </li>

              <li className='list-inline-item'>
                <a
                  href='https://youtube.com/channel/UC6IMZ3UZs4Tcd8DCTZZ4wCA'
                  target='_blank'
                  title='vimeo'
                >
                  <AiFillYoutube />
                </a>
              </li>
            </ul>
          </div>

          <div className='col-lg-4 mb-5 col-md-6 mb-lg-0'>
            <h6 className='text-uppercase font-weight-bold mb-4'>Newsletter</h6>
            <p className=' mb-4'>
              Don’t miss out, Sign Up for the weekly newsletter, updating you
              with the latest news and knowledge on Electric Vehicles.
            </p>
            <div className='p-1 rounded border'>
              <div className='input-group'>
                <input
                  type='email'
                  placeholder='Enter your email address'
                  aria-describedby='button-addon1'
                  className='form-control border-0 shadow-0'
                />
                <div className='input-group-append'>
                  <button
                    id='button-addon1'
                    type='submit'
                    className='btn btn-link'
                  >
                    <i
                      style={{ fontSize: '25px' }}
                      className='fa fa-paper-plane'
                    ></i>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className='col-lg-4 col-md-6 mb-lg-0'>
            <h6 className='text-uppercase font-weight-bold mb-4'>
              Help And Support
            </h6>
            <p className=' mb-4'>
              Email us <a href=''>hi@xplore.com</a>
            </p>
            <ul className=' list-unstyled'>
              <li
                style={{
                  borderBottom: '1px solid #fff',
                }}
              >
                <a href=''>Support</a>
              </li>
              <li
                style={{
                  borderBottom: '1px solid #fff',
                }}
              >
                <a href=''>Terms of use</a>
              </li>
              <li>
                <a href=''>About Us</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* <!-- Copyrights --> */}
      <div className='bg-secondary py-4'>
        <div className='container text-center'>
          <p className=' mb-0 '>
            Copyright © 2021 · Created by <span> </span>
            <a
              style={{ color: ' #d5dce6' }}
              href='https://vishalp-portfolio.netlify.app/'
              target='_blank'
            >
              Vishal<span> </span>
            </a>
            · Made with ❤️
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
