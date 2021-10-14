import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './MenuVar.css';

const MenuVar = () => {
  return (
    <div>
      <Navbar className="p-3" bg="light" variant="light">
        <Nav className="mx-auto">
          <Link className="menu-lists" to="/home/breakfast">
            Breakfast
          </Link>
          <Link className="menu-lists" to="/home/lunch">
            Lunch
          </Link>
          <Link className="menu-lists" to="/home/dinner">
            Dinner
          </Link>
        </Nav>
      </Navbar>
    </div>
  );
};

export default MenuVar;
