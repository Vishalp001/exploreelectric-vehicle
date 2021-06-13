import React, { useEffect, useState } from 'react'
import '../styles/Content.css'
import firebase from '../../firebase'
import { Card } from 'react-bootstrap'
import Navbarpages from '../Navbar/Navbarpages'
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

const Justinpage = () => {
  const [justinpage, setJustinpage] = useState([])
  const url = 'https://xplorev.com/justinpage'

  const ref = firebase.firestore().collection('justinimage')

  function getJustinpage() {
    ref.onSnapshot((querySnapshot) => {
      const items = []
      querySnapshot.forEach((doc) => {
        items.push(doc.data())
      })
      setJustinpage(items)
    })
  }

  useEffect(() => {
    getJustinpage()
  }, [])

  return (
    <>
      <Navbarpages />
      <div className='header'>
        <div className='container'>
          <div className='page-header'>
            <h1>Just In</h1>
            <p>
              Your 30-sec quick digest on <br /> Electric Vehicles. Covering
              Start-ups, Automakers, and Technologies.
            </p>
          </div>
          <div className='justinpage'>
            {justinpage.map((item) => {
              return (
                <Card className='card' key={item.id}>
                  <Card.Img variant='top' src={item.image} />
                  {/* -----SOCIAL BUTTONS------ */}
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
              )
            })}
          </div>
        </div>
      </div>
    </>
  )
}

export default Justinpage
