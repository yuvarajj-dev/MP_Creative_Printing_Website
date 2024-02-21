import React from 'react'
import "./Navbar.css"
import { Container } from 'react-bootstrap'
import { Nav } from 'react-bootstrap'
import { Navbar } from 'react-bootstrap'
import { NavDropdown } from 'react-bootstrap'

export default function Navcom() {
  return (
    <Navbar expand="lg" className="dark fixed-top ">
    <Container className='contain'>
      <Navbar.Brand className='nav-brand'><img src="./assest/logo/logo.png" alt="logo" className='logo-img' /></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav ">
        <Nav className="me-auto">
            {/* Printing Materials section */}
          <NavDropdown  title="Printing Material" id="basic-nav-dropdown">
            <NavDropdown.Item >Brochures</NavDropdown.Item>
            <NavDropdown.Item>Calendars</NavDropdown.Item>
            <NavDropdown.Item>Business Cards</NavDropdown.Item>
            <NavDropdown.Item>Greeting Cards</NavDropdown.Item>
            <NavDropdown.Item>Post Cards</NavDropdown.Item>
            <NavDropdown.Item>Rack Cards</NavDropdown.Item>
          </NavDropdown>
          {/* photo Printing section */}
          <NavDropdown title="Photo Printing" id="basic-nav-dropdown">
            <NavDropdown.Item>Collage Photo Printing</NavDropdown.Item>
            <NavDropdown.Item>Glossy Photo Printing</NavDropdown.Item>
            <NavDropdown.Item>Framed Photo Printing</NavDropdown.Item>
            <NavDropdown.Item>Giclee Photo Printing</NavDropdown.Item>
            <NavDropdown.Item>Canvas Photo Printing</NavDropdown.Item>
          </NavDropdown>
          {/* Stationery Printing */}
          <NavDropdown title="Stationery" id="basic-nav-dropdown">
            <NavDropdown.Item>Letter Head</NavDropdown.Item>
            <NavDropdown.Item>Self-linking Stamps</NavDropdown.Item>
            <NavDropdown.Item>Presentation Folders</NavDropdown.Item>
          </NavDropdown>
          {/* Custom Printing */}
          <NavDropdown title="Custom Printing" id="basic-nav-dropdown">
            <NavDropdown.Item>Stickers</NavDropdown.Item>
            <NavDropdown.Item>Door Hangers</NavDropdown.Item>
            <NavDropdown.Item>Invitations</NavDropdown.Item>
          </NavDropdown>
          {/* Banners */}
          <NavDropdown title="Flex Printing" id="basic-nav-dropdown">
            <NavDropdown.Item>Banners Printing</NavDropdown.Item>
            <NavDropdown.Item>Installation Services</NavDropdown.Item>
          </NavDropdown>
          {/* Whatsapp button */}
          <Nav.Item className='nav-item'><button className='Whatapp-btn'><img src="./assest/Whatsapp icon.png" alt="whatsapp"/>Whatsapp</button></Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}
