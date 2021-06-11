import React, { useState } from 'react'
import '../components/styles/header.css'
import { db } from '../firebase'
import 'firebase/firestore'

import svg from '../images/car.svg'
// import svg1 from '../images/1.svg'
// import svg2 from '../images/3.svg'

const Header = () => {
  const [email, setEmail] = useState('')

  const handelSubmit = (e) => {
    e.preventDefault()

    db.collection('emails')
      .add({
        email: email,
      })
      .then(() => {
        alert('Thank You Subscribing 👍')
      })
      .catch((error) => {
        alert(error.message)
      })
    setEmail('')
  }
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
        <form id='subscribe' onSubmit={handelSubmit}>
          <div className='header-sub'>
            <input
              value={email}
              type='email'
              placeholder='Enter your email address'
              onChange={(e) => setEmail(e.target.value)}
            />
            <button type='submit'>Subscribe</button>
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
