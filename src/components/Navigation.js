import React from "react";
import Nav from 'react-bootstrap/Nav';
import { Link,NavLink } from "react-router-dom";

function Navigation() {
  return (
    <div className='nav-container'>
      <Nav >
        <Nav.Item>
          <NavLink id="home-nav-item" to="dash-home" eventkey="link-1">Home</NavLink>
        </Nav.Item>
        <Nav.Item>
          <NavLink to="dash-explore" eventkey="link-2">Explore</NavLink>
        </Nav.Item>
        <Nav.Item>
          <NavLink to="dash-library" eventkey="link-3">
            Library
          </NavLink>
        </Nav.Item>
        <Nav.Item>
          <NavLink to="dash-premium" eventkey="link-4">
            Premium
          </NavLink>
        </Nav.Item>
      </Nav>
    </div>
  );
}

export default Navigation;
