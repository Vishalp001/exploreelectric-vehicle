import React, { useState, useEffect } from 'react'
import firebase from '../../firebase'
import { IoVideocamSharp } from 'react-icons/io5'
import { Link } from 'react-router-dom'

export default () => {
  const [videos, setvideos] = useState([])

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

  return (
    <div id='videos' className='container'>
      <div className='heading-section'>
        <p className='cardHeading'>
          <IoVideocamSharp /> Videos
        </p>
        <Link to='/videospage'>View All</Link>
      </div>
      <div className='videopage' style={{ marginTop: '0px' }}>
        {videos.slice(0, 3).map((item) => {
          return (
            <div key={item.id}>
              <iframe
                width='350'
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
  )
}
