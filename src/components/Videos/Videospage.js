import React, { useState, useEffect } from 'react'
import firebase from '../../firebase'

import { useMediaQuery } from 'react-responsive'
import Subscribe from '../Subscribe'
import Navbarpages from '../Navbar/Navbarpages'

const Videospage = () => {
  const [videopage, setvideopage] = useState([])
  const [loading, setLoading] = useState(false)

  const ref = firebase.firestore().collection('videos')

  function getvideopage() {
    setLoading(true)
    ref.onSnapshot((querySnapshot) => {
      const items = []
      querySnapshot.forEach((doc) => {
        items.push(doc.data())
      })
      setvideopage(items)
      setLoading(false)
    })
  }

  useEffect(() => {
    getvideopage()
  }, [])
  let width = 350
  const isMobileSmall = useMediaQuery({ query: '(max-width: 325px)' })
  const isMobileMid = useMediaQuery({ query: '(max-width: 375px)' })
  const isMobileFloor = useMediaQuery({ query: '(max-width: 425px)' })

  const isTabletFloor = useMediaQuery({ query: '(max-width: 426px)' })
  const isTabletMid = useMediaQuery({ query: '(max-width: 768px)' })
  const isTabletCeil = useMediaQuery({ query: '(max-width: 1024px)' })

  if ((isMobileMid, isMobileSmall, isMobileFloor)) {
    width = 350
  } else if ((isTabletFloor, isTabletMid, isTabletCeil)) {
    width = 400
  }
  if (loading) {
    return (
      <div className='spinner-border text-primary' role='status'>
        <span className='sr-only'>Loading...</span>
      </div>
    )
  }

  return (
    <>
      <Navbarpages />
      <div className='header'>
        <div className=' container'>
          <div className='page-header'>
            <h1>Our Videos</h1>
            <p>
              5 min articles focused on the Indian capital market ecosystem.
              We'll have a new story for you each week.
            </p>
          </div>
          <div className='videopage'>
            {videopage.map((item) => {
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
          </div>
        </div>
        <Subscribe />
      </div>
    </>
  )
}

export default Videospage
