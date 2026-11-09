import React from 'react'

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { ImExit } from "react-icons/im";
import { TbLogin } from "react-icons/tb";
import { IoIosCreate } from "react-icons/io";



export const Header = () => {
  return (
    <Navbar expand="lg" variant="dark" className="bg-body-dark">
      <Container>
        <Navbar.Brand href="#home">FT</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Link className="nav-link" to="/signup"> <IoIosCreate /> Sign Up</Link>
            <Link className="nav-link" to="/"> <TbLogin /> Login</Link>
            <Link className="nav-link" to="/"> <ImExit /> Logout</Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
