import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import styled from 'styled-components';

const StyledNavbar = styled(Navbar)`
  background-color: #0a192f !important;
  border-bottom: 1px solid #2e476b !important;
  padding: 1rem 0;
  position: sticky;
  top: 0;
  z-index: 1000;

  .nav-link {
    color: #ccd6f6 !important;
    font-family: 'SF Mono', monospace;
    font-size: 0.9rem;
    margin: 0 15px;
    padding: 0.5rem 1rem !important;
    transition: all 0.3s ease;
    position: relative;

    &::before {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 0;
      height: 2px;
      background: #64ffda;
      transition: width 0.3s ease;
    }

    &:hover {
      color: #64ffda !important;

      &::before {
        width: 100%;
      }
    }
  }

  .navbar-toggler {
    border-color: #64ffda !important;

    .navbar-toggler-icon {
      background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba(100, 255, 218, 1)' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e");
    }
  }
`;

const Brand = styled(Navbar.Brand)`
  color: #64ffda !important;
  font-family: 'SF Mono', monospace;
  font-size: 1.2rem;
  font-weight: 600;

  &:hover {
    color: #64ffda !important;
  }
`;

const Navigation = () => {
  return (
    <StyledNavbar expand="lg" variant="dark">
      <Container>
        <Brand href="#home">Tomás Munévar</Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
            <Nav.Link href="#contact">CV</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </StyledNavbar>
  );
};

export default Navigation;