import React from 'react';
import styled from 'styled-components';


const technologies = [
  { name: "HTML5", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" },
  { name: "CSS3", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-plain-wordmark.svg" },
  { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-plain.svg" },
  { name: "Bootstrap", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg" },
  { name: "Express.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original-wordmark.svg" },
  { name: "Figma", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg" },
  { name: "Firebase", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-plain-wordmark.svg" },
  { name: "Git", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original-wordmark.svg" },
  { name: "GitHub", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original-wordmark.svg" },
  { name: "Handlebars", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/handlebars/handlebars-original-wordmark.svg" },
  { name: "Mongoose", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongoose/mongoose-original-wordmark.svg" },
  { name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original-wordmark.svg" },
  { name: "NestJS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nestjs/nestjs-original-wordmark.svg" },
  { name: "Next.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" },
  { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg" },
  { name: "OAuth", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/oauth/oauth-plain.svg" },
  { name: "PostgreSQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original-wordmark.svg" },
  { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original-wordmark.svg" },
  { name: "Swagger", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/swagger/swagger-plain-wordmark.svg" },
  { name: "Tailwind CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original-wordmark.svg" },
  { name: "TypeScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" },
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

const Tooltip = styled.div`
  position: absolute;
  bottom: -45px;
  left: 50%;
  transform: translateX(-50%);
  background: linear-gradient(135deg, #0f2027, #203a43, #2c5364);
  color: #64ffda;
  padding: 8px 12px;
  border-radius: 8px;
  font-size: 0.875rem;
  font-weight: 600;
  white-space: nowrap;
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  z-index: 10;
  border: 1px solid #64ffda;
  box-shadow: 0 4px 15px rgba(100, 255, 218, 0.2);

  &::before {
    content: '';
    position: absolute;
    top: -6px;
    left: 50%;
    transform: translateX(-50%);
    border-left: 6px solid transparent;
    border-right: 6px solid transparent;
    border-bottom: 6px solid #64ffda;
  }

  ${LogoWrapper}:hover & {
    opacity: 1;
    visibility: visible;
    transform: translateX(-50%) translateY(-5px);
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
  const repeatedTechnologies = [...technologies, ...technologies, ...technologies, ...technologies];
  
  return (
    <SliderContainer>
      <GradientOverlay className="left" />
      <GradientOverlay className="right" />
      <SliderTrack>
        {repeatedTechnologies.map((tech, index) => (
          <LogoWrapper key={index}>
            <TechLogo src={tech.logo} alt={tech.name} />
            <Tooltip>{tech.name}</Tooltip>
          </LogoWrapper>
        ))}
      </SliderTrack>
    </SliderContainer>
  );
};

export default LogoSlider;