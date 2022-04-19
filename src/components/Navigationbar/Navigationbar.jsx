import React from 'react'
import { Button, Collapse, Container, Nav,Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink, } from 'reactstrap'
import logo from "../../assets/images/logo.png"
import './Navigation-stylesheet.css'

function Navigationbar() {
  return (
    <>
    <Container fluid style={{backgroundColor: '#F1F3FF'}}>
    <Container
  >
    <Navbar className='navbar-light'
        color="none"
        expand="md"
        light
    >
        <NavbarBrand href="/">
        <img src={logo} alt="logo"/>
        </NavbarBrand>
        <NavbarToggler onClick={function noRefCheck(){}} />
        <Collapse navbar>
        <Nav
            className="ms-auto px-5"
            navbar
        >
            <NavItem>
            <NavLink href="/">
                Our services
            </NavLink>
            </NavItem>
            <NavItem>
            <NavLink href="#">
                Why US
            </NavLink>
            </NavItem>
            <NavItem>
            <NavLink href="#">
                Testimonials
            </NavLink>
            </NavItem>
            <NavItem>
            <NavLink href="#">
                FAQ
            </NavLink>
            </NavItem>
            <Button
                color="success"
            >
                Register
            </Button>
        </Nav>
        </Collapse>
    </Navbar>
    </Container>
  </Container>
</>
  )
}

export default Navigationbar