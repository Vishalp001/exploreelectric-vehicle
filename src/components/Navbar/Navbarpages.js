import React from 'react'
import { Navbar, Nav, Button } from 'react-bootstrap'
import logo from '../../images/logo.png'
import { LinkContainer } from 'react-router-bootstrap'

const Navbarpages = () => {
  const subs = () => {
    window.location.href = '#subscribe'
  }
  return (
    <Navbar className='container' expand='lg'>
      <LinkContainer to='/'>
        <Navbar.Brand>
          <img
            src={logo}
            width='200'
            height='50'
            className='d-inline-block align-top'
            alt='logo'
          />
        </Navbar.Brand>
      </LinkContainer>

      <Navbar.Toggle aria-controls='basic-navbar-nav' />
      <Navbar.Collapse id='basic-navbar-nav'>
        <Nav className='  ml-auto'>
          <LinkContainer to='/justinpage'>
            <Nav.Link className='mr-2 nav-element'>Just In</Nav.Link>
          </LinkContainer>
          <LinkContainer to='/trendingpage'>
            <Nav.Link className='mr-2 nav-element'>Trending</Nav.Link>
          </LinkContainer>
          <LinkContainer to='/videospage'>
            <Nav.Link className='mr-2 nav-element'>Videos</Nav.Link>
          </LinkContainer>
          <LinkContainer to='/exploreevpage'>
            <Nav.Link className='mr-2 nav-element'>Explore EV</Nav.Link>
          </LinkContainer>
          <Button onClick={subs} type='button' className='btn btn-primary'>
            SUBSCRIBE
          </Button>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Navbarpages
