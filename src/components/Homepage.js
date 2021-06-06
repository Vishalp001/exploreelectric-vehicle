import React from 'react'
import Header from './Header'
import Justin from './Justin/Justin'
import Exploreev from './Exploreev/Exploreev'
import Trending from './Trending/Trending'
import Videos from './Videos/Videos'
import Navbarhome from './Navbar/Navbarhome'

const Homepage = () => {
  return (
    <>
      <Navbarhome />
      <Header />
      <Justin />
      <Trending />
      <Videos />
      <Exploreev />
      <div style={{ margin: '35px 0' }}></div>
    </>
  )
}

export default Homepage
