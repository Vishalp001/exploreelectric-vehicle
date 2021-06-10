import React from 'react'
import '../styles/Navbar.css'
import { Navbar, Nav } from 'react-bootstrap'
import logo from '../../images/logo.png'
import { LinkContainer } from 'react-router-bootstrap'

const Navbarpages = () => {
  return (
    <Navbar className='container' expand='lg'>
      <LinkContainer to='/'>
        <Navbar.Brand>
          <img
            src={logo}
            width='180'
            height='70'
            className='d-inline-block align-top'
            alt='logo'
          />
        </Navbar.Brand>
      </LinkContainer>

      <Navbar.Toggle aria-controls='basic-navbar-nav' />
      <Navbar.Collapse id='basic-navbar-nav'>
        <Nav className='  ml-auto'>
          <LinkContainer to='/justinpage'>
            <Nav.Link className='nav-element'>Just In</Nav.Link>
          </LinkContainer>
          <LinkContainer to='/trendingpage'>
            <Nav.Link className='nav-element'>Trending</Nav.Link>
          </LinkContainer>
          <LinkContainer to='/videospage'>
            <Nav.Link className='nav-element'>Videos</Nav.Link>
          </LinkContainer>
          <LinkContainer to='/exploreevpage'>
            <Nav.Link className='nav-element'>Know EV</Nav.Link>
          </LinkContainer>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Navbarpages
