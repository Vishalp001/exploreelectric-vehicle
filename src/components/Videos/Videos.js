import React, { useState, useEffect } from 'react'
import ItemsCarousel from 'react-items-carousel'

import firebase from '../../firebase'
import { IoArrowForwardCircle, IoArrowBackCircleSharp } from 'react-icons/io5'
import { useMediaQuery } from 'react-responsive'
import { IoVideocamSharp } from 'react-icons/io5'
import { Link } from 'react-router-dom'

export default () => {
  const [activeItemIndex, setActiveItemIndex] = useState(0)
  const [videos, setvideos] = useState([])
  let chevronWidth = 40
  let numbofitem = 3
  let width = 350

  const ref = firebase.firestore().collection('videos')

  function getVideos() {
    ref.onSnapshot((querySnapshot) => {
      const items = []
      querySnapshot.forEach((doc) => {
        items.push(doc.data())
      })
      setvideos(items)
    })
  }

  useEffect(() => {
    getVideos()
  }, [])

  const isMobileSmall = useMediaQuery({ query: '(max-width: 325px)' })
  const isMobileMid = useMediaQuery({ query: '(max-width: 375px)' })
  const isMobileFloor = useMediaQuery({ query: '(max-width: 425px)' })

  const isTabletFloor = useMediaQuery({ query: '(max-width: 426px)' })
  const isTabletMid = useMediaQuery({ query: '(max-width: 768px)' })
  const isTabletCeil = useMediaQuery({ query: '(max-width: 1024px)' })

  // const isLaptopFloor = useMediaQuery({ query: '(max-width: 1025px)' })
  // const isLaptopCeil = useMediaQuery({ query: '(max-width: 1440px)' })

  // const isXHDFloor = useMediaQuery({ query: '(max-width: 1441px)' })
  // const isXHDCeil = useMediaQuery({ query: '(max-width: 4096px)' })

  if ((isMobileMid, isMobileSmall, isMobileFloor)) {
    numbofitem = 1
    chevronWidth = 30
    width = 250
  } else if ((isTabletFloor, isTabletMid, isTabletCeil)) {
    numbofitem = 2
    chevronWidth = 30
    width = 320
  }

  return (
    <div id='videos' className='container'>
      <div className='heading-section'>
        <p className='cardHeading'>
          <IoVideocamSharp /> Videos
        </p>
        <Link to='/videospage'>Show More</Link>
      </div>
      {/* ---------VIDEO CARAUSAL-------------- */}
      <div style={{ padding: `0 10px` }}>
        <ItemsCarousel
          activePosition='right'
          infiniteLoop={true}
          requestToChangeActive={setActiveItemIndex}
          activeItemIndex={activeItemIndex}
          numberOfCards={numbofitem}
          gutter={50}
          leftChevron={<IoArrowBackCircleSharp className='arrows' />}
          rightChevron={<IoArrowForwardCircle className='arrows' />}
          outsideChevron={true}
          chevronWidth={chevronWidth}
        >
          {videos.map((item) => {
            return (
              <div key={item.id}>
                <iframe
                  width={width}
                  height='280'
                  src={item.url}
                  title='YouTube video player'
                  frameBorder='0'
                  allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                  allowFullScreen
                ></iframe>
              </div>
            )
          })}
        </ItemsCarousel>
      </div>
    </div>
  )
}
