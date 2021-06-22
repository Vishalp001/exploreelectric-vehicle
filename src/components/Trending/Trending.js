import React, { useState, useEffect } from 'react'
import firebase from '../../firebase'
import ItemsCarousel from 'react-items-carousel'
import { Card } from 'react-bootstrap'
import { IoArrowForwardCircle, IoArrowBackCircleSharp } from 'react-icons/io5'
import { useMediaQuery } from 'react-responsive'
import { HiTrendingUp } from 'react-icons/hi'

import { Link } from 'react-router-dom'

export default () => {
  const [activeItemIndex, setActiveItemIndex] = useState(0)
  const [trending, settrending] = useState([])
  const ref = firebase.firestore().collection('trending')

  function gettrending() {
    ref.onSnapshot((querySnapshot) => {
      const items = []
      querySnapshot.forEach((doc) => {
        items.push(doc.data())
      })
      settrending(items)
    })
  }

  useEffect(() => {
    gettrending()
  }, [])

  let chevronWidth = 40
  let numbofitem = 3
  let width = 300

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
    chevronWidth = 0
  } else if ((isTabletFloor, isTabletMid, isTabletCeil)) {
    numbofitem = 2
    chevronWidth = 0
  }

  return (
    <div id='trending' className='container'>
      <div className='heading-section'>
        <p className='cardHeading'>
          <HiTrendingUp /> Trending
        </p>
        <Link to='/trendingpage'>View All</Link>
      </div>

      <ItemsCarousel
        infiniteLoop={true}
        requestToChangeActive={setActiveItemIndex}
        activeItemIndex={activeItemIndex}
        numberOfCards={numbofitem}
        gutter={25}
        leftChevron={<IoArrowBackCircleSharp className='arrows' />}
        rightChevron={<IoArrowForwardCircle className='arrows' />}
        outsideChevron
        chevronWidth={chevronWidth}
        disableSwipe={false}
      >
        {trending
          .slice(0)
          .reverse()
          .map((item) => {
            return (
              <div key={item.id}>
                <Card
                  className='cards trendingPage'
                  style={{ width: `0 ${width}px` }}
                >
                  <Card.Img variant='top' src={item.image} />
                  <Card.Body>
                    <Card.Title>
                      <h5> {item.title} </h5>
                    </Card.Title>
                    <Card.Text>
                      {`${item.text.substring(0, 75)}...`}
                      <Link to={`/trendingblog/${item.id}`}>Read More</Link>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>
            )
          })}
      </ItemsCarousel>
    </div>
  )
}
