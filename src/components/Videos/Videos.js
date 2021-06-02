import React, { useState, useEffect } from 'react'
import firebase from '../../firebase'
import ItemsCarousel from 'react-items-carousel'
import { IoArrowForwardCircle, IoArrowBackCircleSharp } from 'react-icons/io5'
import { useMediaQuery } from 'react-responsive'
import { VscPinned } from 'react-icons/vsc'
import { Link } from 'react-router-dom'

export default () => {
  const [activeItemIndex, setActiveItemIndex] = useState(0)
  const [videos, setvideos] = useState([])
  const [loading, setLoading] = useState(false)

  const ref = firebase.firestore().collection('videos')

  function getVideos() {
    setLoading(true)
    ref.onSnapshot((querySnapshot) => {
      const items = []
      querySnapshot.forEach((doc) => {
        items.push(doc.data())
      })
      setvideos(items)
      setLoading(false)
    })
  }

  useEffect(() => {
    getVideos()
  }, [])

  let chevronWidth = 40
  let numbofitem = 3
  let width = 350
  let gutter = 5

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
    chevronWidth = 25
    gutter = 0
  } else if ((isTabletFloor, isTabletMid, isTabletCeil)) {
    numbofitem = 2
    chevronWidth = 0
  }
  if (loading) {
    return (
      <div className='spinner-border text-primary' role='status'>
        <span className='sr-only'>Loading...</span>
      </div>
    )
  }

  return (
    <div
      id='videos'
      className='container'
      style={{ padding: `0 ${chevronWidth}px` }}
    >
      <div className='heading-section'>
        <p style={{ color: '#1b76d8' }}>
          <VscPinned /> Videos
        </p>
        <Link to='/videospage'>Show More</Link>
      </div>
      <ItemsCarousel
        infiniteLoop={true}
        requestToChangeActive={setActiveItemIndex}
        activeItemIndex={activeItemIndex}
        numberOfCards={numbofitem}
        gutter={gutter}
        leftChevron={<IoArrowBackCircleSharp className='arrows' />}
        rightChevron={<IoArrowForwardCircle className='arrows' />}
        outsideChevron
        chevronWidth={chevronWidth}
        disableSwipe={false}
      >
        {videos.map((item) => {
          return (
            <div key={item.id} style={{ width: `0 ${width}px` }}>
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
  )
}
