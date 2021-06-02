import React from 'react'
import { Carousel } from 'react-bootstrap'
import B1 from '../images/B1.jpg'
import B2 from '../images/B2.jpg'
import B3 from '../images/B3.jpg'

const Carouseljs = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img className='d-block w-100' src={B2} alt='First slide' />
      </Carousel.Item>
      <Carousel.Item>
        <img className='d-block w-100' src={B3} alt='Second slide' />
      </Carousel.Item>
      <Carousel.Item>
        <img className='d-block w-100' src={B1} alt='Third slide' />
      </Carousel.Item>
    </Carousel>
  )
}

export default Carouseljs
