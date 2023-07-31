import React from 'react'
import {Navbar,Nav,Container} from 'react-bootstrap';
import { Link } from "react-router-dom";


const Header = () => {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary" bg="dark" varient="dark">
      <Container>
        <Link to='/' className='navbar-brand'>Admin Dashboard</Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          {

            // <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
            // <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            // <NavDropdown.Item href="#action/3.2">
            // Another action
            // </NavDropdown.Item>
            // <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            // <NavDropdown.Divider />
            // <NavDropdown.Item href="#action/3.4">
            // Separated link
            // </NavDropdown.Item>
            // </NavDropdown>
          }
            </Nav>
            <Nav>
            
            <li className="nav-item">
            <Link to="/signin" className="nav-link">
            Signin
            </Link>
            </li>
            <li className="nav-item">
            <Link to="/signup" className="nav-link">
            Signup
            </Link>
            </li>
            
            </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header