import React, { useState, useEffect } from 'react'
import firebase from '../../firebase'
import Navbarpages from '../Navbar/Navbarpages'
import ReactPaginate from 'react-paginate'
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai'

const Videospage = () => {
  const [videopage, setvideopage] = useState([])
  const [pageNumber, setPageNumber] = useState(0)

  const ref = firebase.firestore().collection('videos')

  function getvideopage() {
    ref.onSnapshot((querySnapshot) => {
      const items = []
      querySnapshot.forEach((doc) => {
        items.push(doc.data())
      })
      setvideopage(items)
    })
  }

  useEffect(() => {
    getvideopage()
  }, [])

  let width = 350

  const usersPerpage = 9
  const pagesVisited = pageNumber * usersPerpage

  const displayUsers = videopage
    .slice(pagesVisited, pagesVisited + usersPerpage)
    .map((item) => {
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
    })

  const pageCount = Math.ceil(videopage.length / usersPerpage)

  const changePage = ({ selected }) => {
    setPageNumber(selected)
    window.scrollTo(0, 0)
  }

  return (
    <>
      <Navbarpages />
      <div className='header'>
        <div className=' container'>
          <div className='page-header'>
            <h1>Videos</h1>
            <p>
              Curated videos on <br /> Electric Vehicles for your better
              understandings.
            </p>
          </div>
          <div className='videopage'>{displayUsers}</div>
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

export default Videospage
