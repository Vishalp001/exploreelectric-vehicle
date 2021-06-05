import React from 'react'
import '../components/styles/header.css'
import svg from '../images/car.svg'
const Carousel = () => {
  return (
    <div className='banner container'>
      <div className='col'>
        <h1>Financial News Made Simple</h1>
        <p>
          Join Finshots and get your daily dose of the latest, most important
          Financial developments delivered in plain English. In less than 3
          minutes.
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

export default Carousel
