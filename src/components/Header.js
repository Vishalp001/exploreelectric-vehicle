import React from 'react'
import '../components/styles/header.css'
import svg from '../images/car.svg'

const Header = () => {
  return (
    <div className='banner container'>
      <div className='col '>
        <h1>
          <span>Electric Vehicle</span> <br /> Made Simple
        </h1>
        <p>
          Join <span>XplorEV</span> and get updated with the lastest, trending
          news and information on Electric Vehicles.
        </p>
        {/* --------------FORM---------------- */}
        <form id='subscribe'>
          <div className='header-sub'>
            <input
              id='email'
              type='email'
              name='email'
              autoComplete='off'
              placeholder='Enter your email address'
            />

            <button>Subscribe</button>
          </div>
        </form>
      </div>
      <div className='col'>
        <img src={svg} alt='' />
      </div>
    </div>
  )
}

export default Header
