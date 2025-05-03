import React from 'react';
import styled from 'styled-components';
import { Container, Row, Col } from 'react-bootstrap';
import { FiLinkedin, FiGithub, FiMail, FiDownload } from 'react-icons/fi';

const FooterWrapper = styled.footer`
  background-color: #0a192f;
  padding: 60px 0 30px 0;
  border-top: 1px solid #2e476b;
  position: relative;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const SectionTitle = styled.h4`
  color: #ccd6f6;
  font-family: 'SF Mono', monospace;
  font-size: 1.2rem;
  margin-bottom: 25px;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: -8px;
    left: 0;
    width: 40px;
    height: 2px;
    background-color: #64ffda;
  }
`;

const FooterText = styled.p`
  color: #8892b0;
  font-size: 0.9rem;
  line-height: 1.6;
  margin-bottom: 20px;
`;

const SocialList = styled.ul`
  list-style: none;
  padding: 0;
`;

const SocialItem = styled.li`
  margin-bottom: 12px;
`;

const SocialLink = styled.a`
  color: #8892b0;
  text-decoration: none;
  display: flex;
  align-items: center;
  transition: all 0.3s ease;
  font-family: 'SF Mono', monospace;

  &:hover {
    color: #64ffda;
    transform: translateX(5px);
  }

  svg {
    margin-right: 10px;
    font-size: 1.2rem;
  }
`;

const CVButton = styled.a`
  background: linear-gradient(45deg, #64ffda, #6c63ff);
  color: #0a192f !important;
  padding: 12px 30px;
  border-radius: 5px;
  text-decoration: none;
  font-family: 'SF Mono', monospace;
  font-weight: 600;
  display: inline-flex;
  align-items: center;
  transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);

  svg {
    margin-right: 8px;
  }

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 5px 15px rgba(100, 255, 218, 0.3);
    color: #0a192f;
  }
`;

const Copyright = styled.div`
  text-align: center;
  margin-top: 60px;
  padding-top: 30px;
  border-top: 1px solid #2e476b;
  color: #8892b0;
  font-family: 'SF Mono', monospace;
  font-size: 0.8rem;
`;

const Footer = () => {
    return (
        <FooterWrapper id="contact">
            <Container>
                <FooterContent>
                    <Row>
                        <Col md={4} className="mb-5">
                            <SectionTitle>Tomas Munevar</SectionTitle>
                            <FooterText>
                                Full Stack Developer passionate about creating innovative and efficient solutions.
                            </FooterText>
                        </Col>

                        <Col md={4} className="mb-5">
                            <SectionTitle>Let's Connect</SectionTitle>
                            <SocialList>
                                <SocialItem>
                                    <SocialLink href="https://www.linkedin.com/in/tom%C3%A1s-mun%C3%A9var-escalante-5ba483212/" target="_blank">
                                        <FiLinkedin /> LinkedIn
                                    </SocialLink>
                                </SocialItem>
                                <SocialItem>
                                    <SocialLink href="https://github.com/Tomas36M" target="_blank">
                                        <FiGithub /> GitHub
                                    </SocialLink>
                                </SocialItem>
                                <SocialItem>
                                    <SocialLink href="mailto:tomasmunevar36@gmail.com">
                                        <FiMail /> Email
                                    </SocialLink>
                                </SocialItem>
                            </SocialList>
                        </Col>

                        <Col md={4} className="mb-5">
                            <SectionTitle>My CV</SectionTitle>
                            <FooterText>
                                Download my resume for more professional details.
                            </FooterText>
                            <CVButton href="/cv.pdf" download>
                                <FiDownload /> Download CV
                            </CVButton>
                        </Col>
                    </Row>

                    <Copyright>
                        © {new Date().getFullYear()} Tomas Munevar. All rights reserved.
                    </Copyright>
                </FooterContent>
            </Container>
        </FooterWrapper>
    );
};

export default Footer;