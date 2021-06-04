import React, { useState, useEffect } from 'react'
import firebase from '../../firebase'
import ItemsCarousel from 'react-items-carousel'
import { Card } from 'react-bootstrap'
import { IoArrowForwardCircle, IoArrowBackCircleSharp } from 'react-icons/io5'
import { useMediaQuery } from 'react-responsive'
import { VscPinned } from 'react-icons/vsc'
import { Link } from 'react-router-dom'

const Justin = () => {
  const [justin, setJustin] = useState([])
  const [loading, setLoading] = useState(false)

  const ref = firebase.firestore().collection('justin')

  function getJustin() {
    setLoading(true)
    ref.onSnapshot((querySnapshot) => {
      const items = []
      querySnapshot.forEach((doc) => {
        items.push(doc.data())
      })
      setJustin(items)
      setLoading(false)
    })
  }

  useEffect(() => {
    getJustin()
  }, [])

  const [activeItemIndex, setActiveItemIndex] = useState(0)
  let chevronWidth = 40
  let numbofitem = 3
  let width = 450

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

  if (loading) {
    return (
      <div className='spinner-border text-primary ' role='status'>
        <span className='sr-only'>Loading...</span>
      </div>
    )
  }
  return (
    <div
      id='justin'
      className='container'
      style={{ padding: `10 ${chevronWidth}px` }}
    >
      <div className='heading-section'>
        <p style={{ color: '#1b76d8' }}>
          <VscPinned /> Just In
        </p>
        <Link to='/justinpage'>View All</Link>
      </div>

      <ItemsCarousel
        infiniteLoop={true}
        requestToChangeActive={setActiveItemIndex}
        activeItemIndex={activeItemIndex}
        numberOfCards={numbofitem}
        gutter={5}
        leftChevron={<IoArrowBackCircleSharp className='arrows' />}
        rightChevron={<IoArrowForwardCircle className='arrows' />}
        outsideChevron
        chevronWidth={chevronWidth}
        disableSwipe={false}
      >
        {justin.map((item) => {
          return (
            <div key={item.id}>
              <Card
                className='cards'
                style={{ width: `0 ${width}px`, maxHeight: '600px' }}
              >
                <Card.Img variant='top' src={item.image} alt='image' />
                <Card.Body>
                  <Card.Title>
                    <h5> {item.title} </h5> <p className='date'>{item.date}</p>
                  </Card.Title>
                  <Card.Text>{item.text}</Card.Text>
                  <p>
                    Source: <a href=''>News</a>
                  </p>
                </Card.Body>
              </Card>
            </div>
          )
        })}
      </ItemsCarousel>
    </div>
  )
}

export default Justin
