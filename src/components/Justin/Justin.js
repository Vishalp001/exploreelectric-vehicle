import React, { useState, useEffect } from 'react'
import firebase from '../../firebase'
import ItemsCarousel from 'react-items-carousel'
import { Card } from 'react-bootstrap'
import { IoArrowForwardCircle, IoArrowBackCircleSharp } from 'react-icons/io5'
import { useMediaQuery } from 'react-responsive'
import { VscPinned } from 'react-icons/vsc'
import { Link } from 'react-router-dom'
import {
  FacebookIcon,
  FacebookShareButton,
  TwitterShareButton,
  TwitterIcon,
  LinkedinShareButton,
  LinkedinIcon,
  WhatsappShareButton,
  WhatsappIcon,
} from 'react-share'

const Justin = () => {
  const [justin, setJustin] = useState([])
  const [activeItemIndex, setActiveItemIndex] = useState(0)
  const url = 'https://xplorev.com/justinpage'
  // justin.reverse()

  const ref = firebase.firestore().collection('justinimage')

  function getJustin() {
    ref.onSnapshot((querySnapshot) => {
      const items = []
      querySnapshot.forEach((doc) => {
        items.push(doc.data())
      })
      setJustin(items)
    })
  }

  useEffect(() => {
    getJustin()
  }, [])

  let chevronWidth = 40
  let numbofitem = 3

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
    <div
      id='justin'
      className='container'
      style={{ padding: `10 ${chevronWidth}px` }}
    >
      <div className='heading-section'>
        <p className='cardHeading'>
          <VscPinned /> Just In
        </p>
        <Link to='/justinpage'>View All</Link>
      </div>

      <ItemsCarousel
        infiniteLoop={true}
        requestToChangeActive={setActiveItemIndex}
        activeItemIndex={activeItemIndex}
        numberOfCards={numbofitem}
        gutter={30}
        leftChevron={<IoArrowBackCircleSharp className='arrows' />}
        rightChevron={<IoArrowForwardCircle className='arrows' />}
        outsideChevron
        chevronWidth={chevronWidth}
        disableSwipe={false}
      >
        {justin
          .slice(0)
          .reverse()
          .map((item) => {
            return (
              <div key={item.id}>
                <Card className='cards'>
                  <Card.Img variant='top' src={item.image} alt='image' />
                  <div className=''>
                    <small>
                      <div className='justin-share-btn'>
                        <FacebookShareButton url={url} shareImage={item.image}>
                          <FacebookIcon size={25} round={true} />
                        </FacebookShareButton>
                        <LinkedinShareButton url={url} shareImage={item.image}>
                          <LinkedinIcon size={25} round={true} />
                        </LinkedinShareButton>
                        <WhatsappShareButton url={url} shareImage={item.image}>
                          <WhatsappIcon size={25} round={true} />
                        </WhatsappShareButton>
                        <TwitterShareButton url={url} shareImage={item.image}>
                          <TwitterIcon size={25} round={true} />
                        </TwitterShareButton>
                      </div>
                    </small>
                  </div>
                </Card>
              </div>
            )
          })}
      </ItemsCarousel>
    </div>
  )
}

export default Justin
