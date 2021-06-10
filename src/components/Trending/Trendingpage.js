import React, { useState, useEffect } from 'react'
import firebase from '../../firebase'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Navbarpages from '../Navbar/Navbarpages'
const Justinpage = () => {
  const [trendingpage, setTrendingpage] = useState([])

  const ref = firebase.firestore().collection('trending')

  function getTrendingpage() {
    ref.onSnapshot((querySnapshot) => {
      const items = []
      querySnapshot.forEach((doc) => {
        items.push(doc.data())
      })
      setTrendingpage(items)
    })
  }

  useEffect(() => {
    getTrendingpage()
  }, [])

  return (
    <>
      <Navbarpages />
      <div className='header'>
        <div className='container'>
          <div className='page-header'>
            <h1>Trending News</h1>
            <p>
              Catch here the simplified trending news on <br />
              Electric Vehicles that have caught people attension
            </p>
          </div>
          <div className='trendingpage'>
            {trendingpage.map((item) => {
              return (
                <Card key={item.id} style={{ width: '20rem' }}>
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
              )
            })}
          </div>
        </div>
      </div>
    </>
  )
}

export default Justinpage
