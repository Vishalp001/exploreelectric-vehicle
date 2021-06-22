import React, { useState, useEffect } from 'react'
import firebase from '../../firebase'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Navbarpages from '../Navbar/Navbarpages'
import ReactPaginate from 'react-paginate'
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai'

const TrendingPage = () => {
  const [trendingpage, setTrendingpage] = useState([])
  const [pageNumber, setPageNumber] = useState(0)
  trendingpage.reverse()
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

  const usersPerpage = 9
  const pagesVisited = pageNumber * usersPerpage
  const displayUsers = trendingpage
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
              <Link to={`/trendingblog/${item.id}`}>Read More</Link>
            </Card.Text>
          </Card.Body>
        </Card>
      )
    })

  const pageCount = Math.ceil(trendingpage.length / usersPerpage)

  const changePage = ({ selected }) => {
    setPageNumber(selected)
    window.scrollTo(0, 0)
  }

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
          <div className='trendingpage'>{displayUsers}</div>
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

export default TrendingPage
