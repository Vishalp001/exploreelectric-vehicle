import React from 'react'
import '../styles/Navbar.css'
import { Navbar, Nav } from 'react-bootstrap'
import logo from '../../images/logo.png'
import { LinkContainer } from 'react-router-bootstrap'

const Navbarjs = () => {
  return (
    <Navbar className='container' expand='lg'>
      <LinkContainer to='/'>
        <Navbar.Brand>
          <img
            src={logo}
            width='160'
            height='60'
            className='d-inline-block align-top'
            alt='logo'
          />
        </Navbar.Brand>
      </LinkContainer>

      <Navbar.Toggle aria-controls='basic-navbar-nav' />
      <Navbar.Collapse id='basic-navbar-nav'>
        <Nav className='  ml-auto'>
          <Nav.Link href='#justin' className='nav-element'>
            Just In
          </Nav.Link>
          <Nav.Link href='#trending' className='nav-element'>
            Trending
          </Nav.Link>
          <Nav.Link href='#videos' className='nav-element'>
            Videos
          </Nav.Link>
          <Nav.Link href='#exploreev' className='nav-element'>
            Know EV
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Navbarjs
