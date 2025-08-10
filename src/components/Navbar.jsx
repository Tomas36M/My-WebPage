import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../hooks/useLanguage.js';
import styled from 'styled-components';

const StyledNavbar = styled(Navbar)`
  background-color: #0a192f !important;
  border-bottom: 1px solid #2e476b !important;
  padding: 1rem 0;
  position: sticky;
  top: 0;
  z-index: 1000;

  .container {
    margin-left: 15px !important;
    margin-right: 15px !important;
    padding-left: 1rem !important;
    padding-right: 1rem !important;
    max-width: none !important;
  }

  .nav-link {
    color: #ccd6f6 !important;
    font-family: 'SF Mono', monospace;
    font-size: 0.9rem;
    margin: 0 15px;
    padding: 0.5rem 1rem !important;
    transition: all 0.3s ease;
    position: relative;
    text-decoration: none !important;
    border-bottom: none !important;

    &:hover {
      color: #64ffda !important;
      text-decoration: none !important;
      border-bottom: none !important;
    }

    &:focus {
      text-decoration: none !important;
      border-bottom: none !important;
    }

    &:active {
      text-decoration: none !important;
      border-bottom: none !important;
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
  display: flex;
  align-items: center;
  gap: 10px;
  text-decoration: none !important;
  border-bottom: none !important;

  &:hover {
    color: #64ffda !important;
    text-decoration: none !important;
    border-bottom: none !important;
  }

  &:focus {
    text-decoration: none !important;
    border-bottom: none !important;
  }
`;

const LogoIcon = styled.div`
  width: 40px;
  height: 40px;
  background: linear-gradient(45deg, #64ffda, #6c63ff);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  color: #0a192f;
  font-size: 1.2rem;
  box-shadow: 0 4px 15px rgba(100, 255, 218, 0.3);
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 6px 20px rgba(100, 255, 218, 0.4);
  }
`;

const LogoText = styled.span`
  font-weight: 600;
  letter-spacing: 0.5px;
`;

const LanguageToggle = styled.button`
  background: linear-gradient(45deg, rgba(100, 255, 218, 0.1), rgba(108, 99, 255, 0.1));
  border: 1px solid #64ffda;
  color: #64ffda;
  padding: 4px 10px;
  border-radius: 20px;
  font-family: 'SF Mono', monospace;
  font-size: 0.75rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(45deg, #64ffda, #6c63ff);
    transition: left 0.3s ease;
    z-index: -1;
  }

  &:hover {
    color: #0a192f;
    transform: translateY(-2px);
    box-shadow: 0 4px 15px rgba(100, 255, 218, 0.3);

    &::before {
      left: 0;
    }
  }
`;

const Navigation = () => {
  const location = useLocation();
  const { language, toggleLanguage, t } = useLanguage();
  
  const handleHashNav = (e, hash) => {
    // If we're not on home route, navigate home first then scroll
    if (location.pathname !== '/') {
      window.location.href = `/${hash}`;
      return;
    }
    const el = document.querySelector(hash);
    if (el) {
      e.preventDefault();
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };
  return (
    <StyledNavbar expand="lg" variant="dark">
      <Container>
        <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
          <Brand as={Link} to="/">
            <LogoText>
              Tomás Munévar
            </LogoText>
          </Brand>
          <LanguageToggle onClick={toggleLanguage}>
            🌐 {language === 'en' ? 'ES' : 'EN'}
          </LanguageToggle>
        </div>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home" onClick={(e)=>handleHashNav(e,'#home')}>{t('home')}</Nav.Link>
            <Nav.Link href="#projects" onClick={(e)=>handleHashNav(e,'#projects')}>{t('projects')}</Nav.Link>
            <Nav.Link href="#services" onClick={(e)=>handleHashNav(e,'#services')}>{t('services')}</Nav.Link>
            <Nav.Link href="#contact" onClick={(e)=>handleHashNav(e,'#contact')}>{t('contact')}</Nav.Link>
            <Nav.Link href="/cv.pdf" target="_blank" rel="noopener noreferrer">CV</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </StyledNavbar>
  );
};

export default Navigation;