import React, { useState, useEffect } from 'react'
import firebase from '../../firebase'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Navbarpages from '../Navbar/Navbarpages'
import ReactPaginate from 'react-paginate'
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai'

const Justinpage = () => {
  const [exploreevpage, setexploreevpage] = useState([])
  const [pageNumber, setPageNumber] = useState(0)
  exploreevpage.reverse()
  const ref = firebase.firestore().collection('exploreev')

  function getexploreevpage() {
    ref.onSnapshot((querySnapshot) => {
      const items = []
      querySnapshot.forEach((doc) => {
        items.push(doc.data())
      })
      setexploreevpage(items)
    })
  }

  useEffect(() => {
    getexploreevpage()
  }, [])

  const usersPerpage = 9
  const pagesVisited = pageNumber * usersPerpage

  const displayUsers = exploreevpage
    .slice(pagesVisited, pagesVisited + usersPerpage)
    .map((item) => {
      return (
        <Card key={item.id} style={{ width: '20rem' }}>
          <Card.Img variant='top' src={item.image} />
          <Card.Body>
            <Card.Title>
              <h5> {item.title} </h5>
            </Card.Title>
            <Card.Text>
              {`${item.text.substring(0, 150)}...`}
              <Link to={`/exploreevblog/${item.id}`}>Read More</Link>
            </Card.Text>
          </Card.Body>
        </Card>
      )
    })

  const pageCount = Math.ceil(exploreevpage.length / usersPerpage)

  const changePage = ({ selected }) => {
    setPageNumber(selected)
    window.scrollTo(0, 0)
  }

  return (
    <>
      <Navbarpages />
      <div className='header'>
        <div className='header container'>
          <div className='page-header'>
            <h1>Know EV</h1>
            <p>
              Your 5 min knowledge booser on Electric Vehicles. Enjoy Learning
              :)
            </p>
          </div>
          <div className='exploreevpage'>{displayUsers}</div>
        </div>
        {/* <ReactPaginate
          previousLabel={<AiOutlineArrowLeft />}
          nextLabel={<AiOutlineArrowRight />}
          pageCount={pageCount}
          onPageChange={changePage}
          containerClassName={'paginationBttns'}
          previousLinkClassName={'previousBttn'}
          nextLinkClassName={'nextBttn'}
          disabledClassName={'paginationDIsabled'}
          activeClassName={'paginationActive'}
        /> */}
      </div>
    </>
  )
}

export default Justinpage
