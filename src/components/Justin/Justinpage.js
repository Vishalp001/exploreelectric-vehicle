import React, { useEffect, useState } from 'react'
import firebase from '../../firebase'
import { Card } from 'react-bootstrap'
import Subscribe from '../Subscribe'
import Navbarpages from '../Navbar/Navbarpages'
const Justinpage = () => {
  const [justinpage, setJustinpage] = useState([])
  const [loading, setLoading] = useState(false)

  const ref = firebase.firestore().collection('justin')

  function getJustinpage() {
    setLoading(true)
    ref.onSnapshot((querySnapshot) => {
      const items = []
      querySnapshot.forEach((doc) => {
        items.push(doc.data())
      })
      setJustinpage(items)
      setLoading(false)
    })
  }

  useEffect(() => {
    getJustinpage()
  }, [])

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
        <div className='container'>
          <div className='page-header'>
            <h1>Justin Cards</h1>
            <p>
              5 min articles focused on the Indian capital market ecosystem.
              We'll have a new story for you each week.
            </p>
          </div>
          <div className='justinpage'>
            {justinpage.map((item) => {
              return (
                <Card key={item.id}>
                  <Card.Img variant='top' src={item.image} />
                  <Card.Body>
                    <Card.Title>
                      <h5> {item.title} </h5>{' '}
                      <p className='date'>{item.date}</p>
                    </Card.Title>
                    <Card.Text>{item.text}</Card.Text>
                    <p>
                      Source: <a href=''>{item.source}</a>
                    </p>
                  </Card.Body>
                </Card>
              )
            })}
          </div>
        </div>
        <Subscribe />
      </div>
    </>
  )
}

export default Justinpage
