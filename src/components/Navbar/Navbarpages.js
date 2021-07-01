import React, { useState } from 'react'
import $ from 'jquery'
import { Navbar, Nav } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import logo from '../../images/logo.png'
import './navbar.css'

const Navbarpages = () => {
  $(window).scroll(function () {
    if ($(window).scrollTop() > 10) {
      $('#navBar').addClass('floatingNav')
    } else {
      $('#navBar').removeClass('floatingNav')
    }
  })

  const [click, setClick] = useState(false)

  const handleClick = () => {
    setClick(!click)
  }

  return (
    <Navbar id='navBar' className='NavbarItems navPage' expand='lg'>
      <LinkContainer className='navbar-logo' to='/'>
        <Navbar.Brand>
          <img
            src={logo}
            width='160'
            height='70'
            className='d-inline-block align-top'
            alt='logo'
          />
        </Navbar.Brand>
      </LinkContainer>

      <div className='menu-icon' onClick={handleClick}>
        <i className={click ? 'fas fa-times' : 'fas fa-bars'}></i>
      </div>

      <div className={click ? 'nav-menu active' : 'nav-menu'}>
        <LinkContainer to='/justinpage'>
          <Nav.Link className='nav-links'>Just In</Nav.Link>
        </LinkContainer>
        <LinkContainer to='/trendingpage'>
          <Nav.Link className='nav-links'>Trending</Nav.Link>
        </LinkContainer>
        <LinkContainer to='/videospage'>
          <Nav.Link className='nav-links'>Videos</Nav.Link>
        </LinkContainer>
        <LinkContainer to='/exploreevpage'>
          <Nav.Link className='nav-links'>Know EV</Nav.Link>
        </LinkContainer>
      </div>
    </Navbar>
  )
}

export default Navbarpages
