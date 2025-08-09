import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../hooks/useLanguage.js';

const ServicesSection = styled.section`
  padding: 80px 40px;
  background-color: #0a192f;
  border-top: 1px solid #2e476b;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  color: #ccd6f6;
  margin-bottom: 1.5rem;
  font-family: 'Calibre', sans-serif;
  text-align: center;
  position: relative;
  display: inline-block;
  width: 100%;
`;

const Intro = styled.p`
  color: #8892b0;
  font-size: 1.2rem;
  text-align: center;
  max-width: 800px;
  margin: 2.5rem auto 3rem;
  line-height: 1.6;
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  margin-bottom: 3rem;
`;

const ServiceCard = styled.div`
  background: #172a45;
  border: 1px solid #2e476b;
  border-radius: 15px;
  padding: 30px 25px;
  text-align: center;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  position: relative;
  overflow: hidden;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
    border-color: #64ffda;
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: linear-gradient(45deg, #64ffda, #6c63ff);
    transform: scaleX(0);
    transition: transform 0.3s ease;
  }

  &:hover::before {
    transform: scaleX(1);
  }
`;

const ServiceIcon = styled.div`
  font-size: 3rem;
  margin-bottom: 1.5rem;
  color: #64ffda;
`;

const ServiceTitle = styled.h3`
  color: #ccd6f6;
  font-size: 1.4rem;
  margin-bottom: 1rem;
  font-family: 'SF Mono', monospace;
`;

const ServiceDescription = styled.p`
  color: #8892b0;
  font-size: 0.95rem;
  line-height: 1.6;
`;

const CTAContainer = styled.div`
  text-align: center;
  margin-top: 2.5rem;
`;

const CTAButton = styled.button`
  background: linear-gradient(45deg, #64ffda, #6c63ff);
  color: #0a192f;
  border: none;
  padding: 15px 35px;
  font-size: 1.1rem;
  font-weight: 600;
  border-radius: 8px;
  cursor: pointer;
  font-family: 'SF Mono', monospace;
  letter-spacing: 0.5px;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(100, 255, 218, 0.2);

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 25px rgba(100, 255, 218, 0.3);
  }

  &:active {
    transform: translateY(-1px);
  }
`;

const ServicesPreview = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();

  const handleViewAllServices = () => {
    navigate('/services');
  };

  const services = [
    {
      icon: '💻',
      title: t('servicesFullStack'),
      description: t('servicesFullStackDesc')
    },
    {
      icon: '⚡',
      title: t('servicesBackend'),
      description: t('servicesBackendDesc')
    },
    {
      icon: '🎨',
      title: t('servicesFrontend'),
      description: t('servicesFrontendDesc')
    }
  ];

  return (
    <ServicesSection id="services">
      <Container>
        <SectionTitle>{t('servicesTitle')}</SectionTitle>
        <Intro>
          {t('servicesIntro')}
        </Intro>
        
        <ServicesGrid>
          {services.map((service, index) => (
            <ServiceCard key={index}>
              <ServiceIcon>{service.icon}</ServiceIcon>
              <ServiceTitle>{service.title}</ServiceTitle>
              <ServiceDescription>{service.description}</ServiceDescription>
            </ServiceCard>
          ))}
        </ServicesGrid>

        <CTAContainer>
          <CTAButton onClick={handleViewAllServices}>
            {t('servicesViewAll')}
          </CTAButton>
        </CTAContainer>
      </Container>
    </ServicesSection>
  );
};

export default ServicesPreview;
