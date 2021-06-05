import React, { useEffect, useState } from 'react'
import firebase from '../../firebase'
import { Card } from 'react-bootstrap'
import Subscribe from '../Subscribe'
import Navbarpages from '../Navbar/Navbarpages'
const Justinpage = () => {
  const [justinpage, setJustinpage] = useState([])

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
