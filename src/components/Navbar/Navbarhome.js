import React, { Component } from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import logo from '../../images/logo.png'
import './navbar.css'

class Navbarjs extends Component {
  state = { clicked: false }

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked })
  }

  render() {
    return (
      <nav className='NavbarItems'>
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

        <div className='menu-icon' onClick={this.handleClick}>
          <i
            className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}
          ></i>
        </div>

        <div className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
          <Nav.Link href='#justin' className='nav-links'>
            Just In
          </Nav.Link>

          <Nav.Link href='#trending' className='nav-links'>
            Trending
          </Nav.Link>

          <Nav.Link href='#videos' className='nav-links'>
            Videos
          </Nav.Link>

          <Nav.Link href='#exploreev' className='nav-links'>
            Know EV
          </Nav.Link>
        </div>
      </nav>
    )
  }
}

export default Navbarjs
