import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Card } from 'react-bootstrap';
import { useLanguage } from '../hooks/useLanguage.js';

const ServicesSection = styled.section`
  min-height: 100vh;
  background-color: #0a192f;
  padding: 40px 40px 80px;
  color: #ccd6f6;
`;

const SectionTitle = styled.h2`
  font-size: 2.8rem;
  margin-bottom: 2.5rem;
  font-family: 'Calibre', sans-serif;
  position: relative;
  display: inline-block;
  background: linear-gradient(45deg, #64ffda, #6c63ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  &::after {
    content: '';
    position: absolute;
    left: 0; bottom: -10px;
    width: 70%; height: 3px;
    background: #64ffda;
    box-shadow: 0 0 10px rgba(100,255,218,0.4);
  }
`;

const Intro = styled.p`
  color: #8892b0;
  max-width: 780px;
  line-height: 1.7;
  font-size: 1.1rem;
  margin-bottom: 3rem;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 35px;
  max-width: 1200px;
`;

const ServiceCard = styled(Card)`
  background-color: #172a45 !important;
  border: 1px solid #2e476b !important;
  border-radius: 18px !important;
  padding: 25px 25px 30px;
  height: 100%;
  position: relative;
  overflow: hidden;
  transition: transform .35s cubic-bezier(.25,.8,.25,1), box-shadow .35s;
  cursor: default;

  &:hover { 
    transform: translateY(-10px);
    box-shadow: 0 10px 35px rgba(0,0,0,.45);

    &::before { opacity: 1; transform: scale(1); }
  }

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: radial-gradient(circle at top left, rgba(100,255,218,0.18), transparent 60%),
                radial-gradient(circle at bottom right, rgba(108,99,255,0.18), transparent 60%);
    opacity: 0; transition: all .5s ease; transform: scale(1.2);
  }
`;

const IconCircle = styled.div`
  width: 60px; height: 60px; border-radius: 50%;
  background: linear-gradient(135deg, rgba(100,255,218,.15), rgba(108,99,255,.15));
  border: 2px solid #2e476b;
  display: flex; align-items: center; justify-content: center;
  font-size: 1.6rem; color: #64ffda;
  margin-bottom: 1.2rem;
`;

const CardTitle = styled.h3`
  font-size: 1.3rem; font-weight: 600; margin-bottom: .9rem; color: #ccd6f6;
`;

const CardText = styled.p`
  color: #8892b0; font-size: .95rem; line-height: 1.55; margin-bottom: 1.1rem;
`;

const TagList = styled.div`
  display: flex; flex-wrap: wrap; gap: 8px; margin-top: auto;
`;

const Tag = styled.span`
  background: #2e476b; color: #64ffda; padding: 5px 12px; border-radius: 20px; font-size: .75rem; font-family: 'SF Mono', monospace;
`;

const CTABox = styled.div`
  margin-top: 70px; 
  padding: 35px 30px; 
  border: 1px solid #2e476b; 
  border-radius: 18px; 
  background: #172a45; 
  max-width: 1100px; 
  position: relative; 
  overflow: visible;
  
  &::before { 
    content: ''; 
    position: absolute; 
    inset: 0; 
    background: linear-gradient(130deg, rgba(100,255,218,.08), rgba(108,99,255,.08)); 
    opacity: .7; 
  }
`;

const CTAHeading = styled.h3`
  font-size: 1.9rem; margin-bottom: 1rem; background: linear-gradient(45deg,#64ffda,#6c63ff); -webkit-background-clip: text; -webkit-text-fill-color: transparent;
`;

const CTAText = styled.p`
  color: #8892b0; font-size: 1rem; line-height: 1.55; max-width: 900px; margin-bottom: 1.2rem;
`;

const CTAButton = styled.button`
  background: linear-gradient(45deg,#64ffda,#6c63ff); 
  color: #0a192f; 
  padding: 14px 34px; 
  font-weight: 600; 
  border-radius: 8px; 
  text-decoration: none; 
  font-family: 'SF Mono', monospace; 
  letter-spacing: .5px; 
  transition: all .3s ease;
  border: none;
  cursor: pointer;
  position: relative;
  
  &:hover{ 
    transform: translateY(-4px); 
    box-shadow: 0 8px 22px rgba(100,255,218,.35); 
  }
`;

const ContactOptions = styled.div`
  position: absolute;
  top: -140px;
  left: 50%;
  transform: translateX(-50%) translateY(${props => props.$show ? '0' : '10px'});
  min-width: 280px;
  background: linear-gradient(135deg, #172a45 0%, #203a43 50%, #2c5364 100%);
  border: 2px solid #64ffda;
  border-radius: 16px;
  padding: 24px;
  opacity: ${props => props.$show ? 1 : 0};
  visibility: ${props => props.$show ? 'visible' : 'hidden'};
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  z-index: 1000;
  box-shadow: 
    0 20px 40px rgba(0, 0, 0, 0.4),
    0 0 30px rgba(100, 255, 218, 0.2),
    inset 0 1px 0 rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  
  &::before {
    content: '';
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    border-left: 12px solid transparent;
    border-right: 12px solid transparent;
    border-top: 12px solid #64ffda;
    filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.2));
  }
  
  &::after {
    content: '';
    position: absolute;
    top: calc(100% - 2px);
    left: 50%;
    transform: translateX(-50%);
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-top: 10px solid #172a45;
  }
`;

const ContactOption = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 16px;
  border-radius: 8px;
  text-decoration: none;
  color: #ccd6f6;
  transition: all 0.3s ease;
  margin-bottom: 8px;
  border: 1px solid transparent;
  cursor: pointer;
  
  &:hover {
    background: rgba(100, 255, 218, 0.1);
    border-color: #64ffda;
    color: #64ffda;
    transform: translateX(5px);
  }
  
  &:last-child {
    margin-bottom: 0;
  }
`;

const ContactIcon = styled.span`
  font-size: 1.2rem;
  min-width: 24px;
`;

const ContactText = styled.div`
  .title {
    font-weight: 600;
    font-size: 0.9rem;
  }
  .subtitle {
    font-size: 0.8rem;
    color: #8892b0;
  }
`;

const Services = () => {
  const { t } = useLanguage();
  const [showContactOptions, setShowContactOptions] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (showContactOptions && !event.target.closest('[data-contact-menu]')) {
        setShowContactOptions(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [showContactOptions]);

  const toggleContactOptions = () => {
    setShowContactOptions(!showContactOptions);
  };

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("¡Hola Tomás! Me interesa trabajar contigo en un proyecto. ¿Podemos hablar?");
    window.open(`https://wa.me/573007970810?text=${message}`, '_blank');
    setShowContactOptions(false);
  };

  const handleEmailClick = () => {
    const subject = encodeURIComponent("Proyecto Freelance");
    const body = encodeURIComponent("Hola Tomás,\n\nMe interesa trabajar contigo en un proyecto. ¿Podemos discutir los detalles?\n\nSaludos!");
    window.open(`mailto:tomasmunevar36@gmail.com?subject=${subject}&body=${body}`, '_blank');
    setShowContactOptions(false);
  };

  const services = [
    {
      icon: '🧩',
      title: t('servicesFullStackTitle'),
      description: t('servicesFullStackDescription'),
      tags: ['React', 'NestJS', 'Node', 'REST', 'PostgreSQL', 'Next.js']
    },
    {
      icon: '⚙️',
      title: t('servicesBackendTitle'),
      description: t('servicesBackendDescription'),
      tags: ['TypeScript', 'Clean Arch', 'TypeORM', 'Swagger', 'JWT', 'OAuth2']
    },
    {
      icon: '🎨',
      title: t('servicesFrontendTitle'),
      description: t('servicesFrontendDescription'),
      tags: ['React', 'Tailwind', 'Styled Components', 'SPA/SSR', 'Responsive']
    },
    {
      icon: '💳',
      title: t('servicesSecurityTitle'),
      description: t('servicesSecurityDescription'),
      tags: ['Stripe', 'Wompi', 'Webhooks', 'Subscriptions', 'E-commerce']
    },
    {
      icon: '🏥',
      title: t('servicesConsultingTitle'),
      description: t('servicesConsultingDescription'),
      tags: ['FHIR', 'Azure Health', 'Microsoft for Healthcare', 'Interoperability']
    },
    {
      icon: '🚀',
      title: t('servicesOptimizationTitle'),
      description: t('servicesOptimizationDescription'),
      tags: ['Performance', 'Caching', 'Profiling', 'CI/CD', 'Docker']
    }
  ];

  return (
    <ServicesSection>
      <SectionTitle>{t('servicesPageTitle')}</SectionTitle>
      <Intro>
        {t('servicesPageIntro')}
      </Intro>
      <Grid>
        {services.map((s, i) => (
          <ServiceCard key={i}>
            <IconCircle>{s.icon}</IconCircle>
            <CardTitle>{s.title}</CardTitle>
            <CardText>{s.description}</CardText>
            <TagList>
              {s.tags.map(tag => <Tag key={tag}>{tag}</Tag>)}
            </TagList>
          </ServiceCard>
        ))}
      </Grid>

      <CTABox>
        <CTAHeading>{t('servicesCTATitle')}</CTAHeading>
        <CTAText>
          {t('servicesCTADescription')}
        </CTAText>
        <div style={{ position: 'relative', display: 'inline-block' }} data-contact-menu>
          <ContactOptions $show={showContactOptions}>
            <ContactOption onClick={handleWhatsAppClick}>
              <ContactIcon>📱</ContactIcon>
              <ContactText>
                <div className="title">WhatsApp</div>
                <div className="subtitle">Respuesta rápida · +57 300 797 0810</div>
              </ContactText>
            </ContactOption>
            <ContactOption onClick={handleEmailClick}>
              <ContactIcon>📧</ContactIcon>
              <ContactText>
                <div className="title">Email</div>
                <div className="subtitle">tomasmunevar36@gmail.com</div>
              </ContactText>
            </ContactOption>
          </ContactOptions>
          <CTAButton onClick={toggleContactOptions}>
            {t('servicesCTAButton')}
          </CTAButton>
        </div>
      </CTABox>
    </ServicesSection>
  );
};

export default Services;
