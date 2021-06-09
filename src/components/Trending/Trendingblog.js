import React, { useState, useEffect } from 'react'
import firebase from '../../firebase'
import { useParams } from 'react-router-dom'
import Navbarpages from '../Navbar/Navbarpages'
import ItemsCarousel from 'react-items-carousel'
import { Card } from 'react-bootstrap'
import { IoArrowForwardCircle, IoArrowBackCircleSharp } from 'react-icons/io5'
import { useMediaQuery } from 'react-responsive'
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

const Trendingblog = () => {
  const [activeItemIndex, setActiveItemIndex] = useState(0)
  const [trendingblog, setTrendingblog] = useState([])
  const [loading, setLoading] = useState(false)

  const url = String(window.location)

  const ref = firebase.firestore().collection('trending')

  function getTrendingblog() {
    setLoading(true)
    ref.onSnapshot((querySnapshot) => {
      const items = []
      querySnapshot.forEach((doc) => {
        items.push(doc.data())
      })
      setTrendingblog(items)
      setLoading(false)
    })
  }

  useEffect(() => {
    getTrendingblog()
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

  if ((isMobileMid, isMobileSmall, isMobileFloor)) {
    numbofitem = 1
    chevronWidth = 0
  } else if ((isTabletFloor, isTabletMid, isTabletCeil)) {
    numbofitem = 2
    chevronWidth = 0
  }

  const { id } = useParams()

  if (loading) {
    return (
      <div className='spinner-border text-primary ' role='status'>
        <span className='sr-only'>Loading...</span>
      </div>
    )
  }
  return (
    <>
      <Navbarpages />
      <div className=' container'>
        {trendingblog
          .filter((item) => item.id === id)
          .map((item) => {
            return (
              <div className='blogContent' key={item.id}>
                <div className='blogpage'>
                  <h1 className=''>{item.title}</h1>
                  <span></span>
                  <img src={item.image} alt='image' />
                  <p>{item.text}</p>
                </div>
                <p className='lead social-icon-text'>
                  Also, don't forget to share this article on WhatsApp, LinkedIn
                  and Twitter. Until then...
                </p>
                <div className='share-icons'>
                  <FacebookShareButton url={url} quote={item.title}>
                    <FacebookIcon size={42} round={true} />
                  </FacebookShareButton>

                  <LinkedinShareButton
                    url={url}
                    title={item.title}
                    shareImage={item.image}
                  >
                    <LinkedinIcon size={42} round={true} />
                  </LinkedinShareButton>

                  <WhatsappShareButton
                    url={url}
                    title={item.title}
                    shareImage={item.image}
                  >
                    <WhatsappIcon size={42} round={true} />
                  </WhatsappShareButton>

                  <TwitterShareButton url={url} title={item.title}>
                    <TwitterIcon size={42} round={true} />
                  </TwitterShareButton>
                </div>
              </div>
            )
          })}
      </div>
      {/* __________________CARDS SECTION_____________________ */}
      <div
        className='container'
        style={{ marginTop: '50px', marginBottom: '50px' }}
      >
        <h1
          className=' font-italic'
          style={{ fontSize: '22px', marginBottom: '10px' }}
        >
          <u> Trending Related Articles:</u>
        </h1>
        <ItemsCarousel
          infiniteLoop={true}
          requestToChangeActive={setActiveItemIndex}
          activeItemIndex={activeItemIndex}
          numberOfCards={numbofitem}
          gutter={50}
          leftChevron={<IoArrowBackCircleSharp className='arrows' />}
          rightChevron={<IoArrowForwardCircle className='arrows' />}
          outsideChevron
          chevronWidth={chevronWidth}
          disableSwipe={false}
        >
          {trendingblog.map((item) => {
            return (
              <div key={item.id}>
                <Card
                  className='cards trendingblogcards'
                  style={{ width: `0 ${width}px` }}
                >
                  <Card.Img variant='top' src={item.image} />
                  <Card.Body>
                    <Card.Title>
                      <h5> {item.title} </h5>
                    </Card.Title>
                    <Card.Text>
                      {`${item.text.substring(0, 150)}...`}
                      <Link to={`/trendingblog/${item.id}`}>Read More</Link>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>
            )
          })}
        </ItemsCarousel>
      </div>
    </>
  )
}

export default Trendingblog
