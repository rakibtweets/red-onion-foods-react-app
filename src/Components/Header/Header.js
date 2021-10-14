import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import './Header.css';
import logo from '../../logo2.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  return (
    <Navbar className="py-3 header-navnar" /* bg="light" variant="light" */>
      <Container fluid className=" px-4">
        <Navbar.Brand href="#home">
          <img
            className="brand-logo"
            src={logo}
            alt="re-onion-food-brand-logo"
          />
        </Navbar.Brand>
        <Nav className="ms-auto d-flex justify-content-center align-items-center">
          <button className="btn me-3">
            <FontAwesomeIcon icon={faShoppingCart} className="fs-4" />
          </button>
          <button className="login btn me-3">Login</button>
          <button className="signup btn me-3">Sign Up</button>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
