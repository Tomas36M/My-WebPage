import React from 'react';
import styled from 'styled-components';


const logos = [
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-plain-wordmark.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-plain.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original-wordmark.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-plain-wordmark.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original-wordmark.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original-wordmark.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/handlebars/handlebars-original-wordmark.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongoose/mongoose-original-wordmark.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original-wordmark.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nestjs/nestjs-original-wordmark.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/oauth/oauth-plain.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original-wordmark.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original-wordmark.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/swagger/swagger-plain-wordmark.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original-wordmark.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
];

const SliderContainer = styled.div`
  overflow: hidden;
  position: relative;
  padding: 60px 0;
  background-color: #0a192f;
  border-top: 1px solid #2e476b;
  border-bottom: 1px solid #2e476b;
`;

const SliderTrack = styled.div`
  display: flex;
  width: max-content;
  animation: slide 50s linear infinite;

  @keyframes slide {
    0% { transform: translateX(0); }
    100% { transform: translateX(-50%); }
  }

  &:hover {
    animation-play-state: paused;
  }
`;

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 0 20px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 15px;
    border: 2px solid transparent;
    transition: all 0.3s ease;
  }

  &:hover {
    transform: scale(1.15);

    &::before {
      border-color: #64ffda;
      box-shadow: 0 0 20px rgba(100, 255, 218, 0.3);
    }

    img {
      filter: brightness(1.2) drop-shadow(0 0 8px rgba(100, 255, 218, 0.3));
    }
  }
`;

const TechLogo = styled.img`
  height: 65px;
  width: auto;
  max-width: 100px;
  object-fit: contain;
  padding: 12px;
  background: #172a45;
  border-radius: 12px;
  border: 1px solid #2e476b;
  transition: all 0.3s ease;
  filter: brightness(0.9);
`;

const GradientOverlay = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  width: 200px;
  pointer-events: none;
  z-index: 2;

  &.left {
    left: 0;
    background: linear-gradient(90deg, #0a192f 0%, transparent 100%);
  }

  &.right {
    right: 0;
    background: linear-gradient(-90deg, #0a192f 0%, transparent 100%);
  }
`;

const Title = styled.h2`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #64ffda;
  font-size: 2.5rem;
  text-shadow: 0 0 15px rgba(100, 255, 218, 0.4);
  z-index: 3;
  white-space: nowrap;
  background: linear-gradient(45deg, #64ffda, #6c63ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-family: 'SF Mono', monospace;
`;

const LogoSlider = () => {
  return (
    <SliderContainer>
      <GradientOverlay className="left" />
      <GradientOverlay className="right" />
      <SliderTrack>
        {[...logos, ...logos, ...logos, ...logos].map((logo, index) => (
          <LogoWrapper key={index}>
            <TechLogo src={logo} alt={`Tech logo ${index}`} />
          </LogoWrapper>
        ))}
      </SliderTrack>
    </SliderContainer>
  );
};

export default LogoSlider;