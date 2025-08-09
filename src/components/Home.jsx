import React from 'react';
import styled from 'styled-components';
import TypingEffect from 'react-typing-effect';
import { useLanguage } from '../hooks/useLanguage.js';

const Container = styled.div`
  min-height: 66vh;
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
  padding: 0 1rem;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(45deg, rgba(10, 25, 47, 0.95), rgba(23, 42, 69, 0.95)),
                url('https://img.freepik.com/free-vector/matrix-style-binary-code-digital-falling-numbers-blue-background_1017-37387.jpg?semt=ais_hybrid&w=740');
    background-size: cover;
    background-position: center;
    z-index: -1;
    animation: matrixEffect 20s linear infinite;
  }

  @keyframes matrixEffect {
    0% { background-position: 0 0; }
    100% { background-position: 0 100%; }
  }

  @media (max-width: 768px) {
    padding: 40px 1rem;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

const TextContainer = styled.div`
  flex: 1;
  padding-right: 2rem;
  animation: fadeInUp 1s ease;

  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @media (max-width: 768px) {
    padding-right: 0;
    margin-bottom: 2rem;
  }
`;

const Title = styled.h1`
  font-size: 3.5rem;
  color: #ccd6f6;
  margin-bottom: 1.5rem;
  font-family: 'Calibre', sans-serif;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const TypingSubtitle = styled(TypingEffect)`
  color: #8892b0;
  font-size: 1.8rem;
  margin-bottom: 2rem;
  font-family: 'SF Mono', monospace;
  min-height: 2.5rem;

  @media (max-width: 768px) {
    font-size: 1.3rem;
  }
`;

const Description = styled.p`
  color: #8892b0;
  font-size: 1.2rem;
  max-width: 600px;
  line-height: 1.6;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const ProfileImage = styled.img`
  width: 300px;
  height: 300px;
  margin-right: 5rem;
  object-fit: cover;
  border-radius: 10px;
  /* Fix typo missing space after 'solid' */
  border: 3px solid rgb(152, 152, 152);
  box-shadow: 0 0 30px rgba(100, 255, 218, 0.2);
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.03);
    box-shadow: 0 0 40px rgba(100, 255, 218, 0.3);
  }

  @media (max-width: 768px) {
    width: 250px;
    height: 250px;
    margin-right: 0;
  }
`;

const Home = () => {
  const { t } = useLanguage();
  
  return (
    <Container id="home">
      <ContentWrapper>
        <TextContainer>
          <Title>{t('homeTitle')}</Title>
          <TypingSubtitle
            text={t('homeSubtitles')}
            speed={100}
            eraseSpeed={50}
            eraseDelay={2000}
            typingDelay={1000}
          />
          <Description className='mt-3'>
            {t('homeDescription')}
          </Description>
        </TextContainer>
        <ProfileImage
          src="https://res.cloudinary.com/dge1sssip/image/upload/v1754758956/462582772_10229403398162980_5072953741625358888_n_orhiiq.jpg"
          alt="Tomas Munevar Escalante"
        />
      </ContentWrapper>
    </Container>
  );
};

export default Home;