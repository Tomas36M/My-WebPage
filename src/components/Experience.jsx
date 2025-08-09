import React, { useState } from 'react';
import styled from 'styled-components';
import { Modal, Button, Card } from 'react-bootstrap';
import { useLanguage } from '../hooks/useLanguage.js';
import 'bootstrap/dist/css/bootstrap.min.css';

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 50px;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  color: #ccd6f6;
  margin-bottom: 1rem;
  font-family: 'Calibre', sans-serif;
  position: relative;
  display: inline-block;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -15px;
    left: 50%;
    transform: translateX(-50%);
    width: 100px;
    height: 3px;
    background: linear-gradient(45deg, #64ffda, #6c63ff);
    border-radius: 2px;
  }
`;

const SectionSubtitle = styled.p`
  color: #8892b0;
  font-size: 1.1rem;
  max-width: 600px;
  margin: 1.5rem auto 0;
  line-height: 1.6;
`;

// Project section styles remain unchanged
const ProjectsSection = styled.section`
  padding: 80px 20px;
  background-color: #0a192f;
  min-height: 100vh;
`;

const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  max-width: 1200px;
  margin: 0 auto;
`;

const ProjectContainer = styled(Card)`
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  background-color: #172a45 !important;
  border: 1px solid #2e476b !important;
  border-radius: 15px !important;
  overflow: hidden;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.4);
  }
`;

const ProjectImage = styled(Card.Img)`
  height: 200px;
  object-fit: cover;
  filter: grayscale(30%);
  transition: filter 0.3s;

  ${ProjectContainer}:hover & {
    filter: grayscale(0);
  }
`;

const StyledCardTitle = styled(Card.Title)`
  color: #ccd6f6 !important;
  font-size: 1.4rem;
  font-weight: 600;
  text-align: center;
  padding: 15px 0;
  margin: 0;
`;

// Custom modal styles remain unchanged
const StyledModal = styled(Modal)`
  .modal-content {
    background-color: #0a192f;
    border: 1px solid #2e476b;
    border-radius: 15px;
    color: #8892b0;
  }

  .modal-header {
    border-bottom: 1px solid #2e476b;
  }

  .modal-title {
    color: #ccd6f6;
    font-size: 1.5rem;
    font-weight: 600;
  }

  .modal-footer {
    border-top: 1px solid #2e476b;
  }

  .close {
    color: #ccd6f6;
    text-shadow: none;
    opacity: 0.8;
    
    &:hover {
      opacity: 1;
    }
  }
`;

const TechPill = styled.span`
  display: inline-block;
  background-color: #2e476b;
  color: #64ffda;
  padding: 5px 15px;
  border-radius: 20px;
  margin: 5px;
  font-size: 0.9rem;
`;

const projects = [
  {
    title: "Inventory Manager - Gestocker",
    image: "https://res.cloudinary.com/dge1sssip/image/upload/v1744500935/Screenshot_2025-04-12_at_6.34.50_PM_dcq3cx.png",
    demoLink: "https://ge-stocker.vercel.app/",
    repoLink: "https://github.com/GeStocker/GeStocker-Front",
    technologies: "Next.js, Tailwind CSS, Socket.io, Figma, React", 
    description: "Gestocker is a web application designed for inventory and sales management, allowing users to efficiently control their products and transactions. The platform features an intuitive and user-friendly interface that simplifies navigation and data management. Users can add, edit, and delete products, as well as track sales and generate detailed reports. Gestocker is designed to be scalable and adaptable to different types of businesses, from small shops to large enterprises.",
  },
  {
    title: "Appointment Manager - Jewelry Store",
    image: "https://res.cloudinary.com/dge1sssip/image/upload/v1745330735/Screenshot_2025-04-22_at_9.04.59_AM_z0f92o.png",
    demoLink: "https://lina-escalante-design.netlify.app/",
    repoLink: "https://github.com/Tomas36M/jeweler-shift-manager",
    technologies: "Node.js, Express, PostgreSQL, Typescript, Typeorm",
    description: "Appointment Manager is a web application designed for scheduling appointments at jewelry stores. It allows users to book appointments, manage schedules, and efficiently track available time slots. The platform features an intuitive interface that simplifies navigation and data management. Users can add, edit, and delete appointments while keeping track of scheduled sessions. The system is designed to be scalable and adaptable to different business sizes, from small jewelry shops to large chains.",
  },
  {
    title: "Economist Portfolio",
    image: "https://res.cloudinary.com/dge1sssip/image/upload/v1754755226/Captura_de_pantalla_2025-08-09_a_la_s_10.58.41_a.m._gyrzuz.png",
    demoLink: "https://www.isabelamunevar.com/",
    repoLink: "https://github.com/Tomas36M/Bela-Web-Page",
    technologies: "Next.js, Bootstrap, React, HTML, CSS, JavaScript",
    description: "A web application designed to showcase an economist's portfolio. Users can explore projects and work samples while learning about the professional's experience and skills. The platform features an intuitive interface for easy navigation and data visualization. Users can access different portfolio sections including featured projects, publications, and contact information. The portfolio is designed to be scalable and adaptable for various professionals.",
  },
  {
    title: "Pokedex using PokeAPI",
    image: "https://res.cloudinary.com/dge1sssip/image/upload/v1746285423/Captura_de_pantalla_2025-05-03_a_la_s_10.16.24_a.m._fkiqua.png",
    demoLink: "https://pokedex-pokeapi-tomasmunevar-d62aae.netlify.app/",
    repoLink: "https://github.com/Tomas36M/Pokedex",
    technologies: "JavaScript, React, HTML, CSS, Axios",
    description: "Pokedex is a web application that lets users explore and search for information about different Pokémon using the PokeAPI. The platform features an intuitive interface for easy navigation and data search. Users can view details about each Pokémon including stats, abilities, and evolutions. The application is designed to be responsive and adaptable to different devices from desktops to mobile phones.",
  },
  {
    title: "Ecommerce API - Swagger Documentation",
    image: "https://res.cloudinary.com/dge1sssip/image/upload/v1746286000/Captura_de_pantalla_2025-05-03_a_la_s_10.26.17_a.m._wyb8hd.png",
    demoLink: "https://ecommerce-nest-p3xi.onrender.com/docs",
    repoLink: "https://github.com/Tomas36M/Ecommerce-Nest",
    technologies: "Nest.js, Swagger, PostgreSQL, TypeORM, TypeScript, Node.js, Express, Swagger, RESTful API, JWT, Bcrypt, Docker, Auth0",
    description: "Ecommerce API is a web application designed to manage an e-commerce system. It allows users to perform operations like registration, login, product management, and order processing. The platform features an intuitive interface for easy navigation and data management. Users can add, edit, and delete products while tracking orders. The API is designed to be scalable and adaptable to different business types from small online stores to large e-commerce platforms.",
  },
  {
    title: "Inventory Manager API - Swagger Documentation",
    image: "https://res.cloudinary.com/dge1sssip/image/upload/v1746288846/Captura_de_pantalla_2025-05-03_a_la_s_11.12.41_a.m._kpddsh.png",
    demoLink: "https://gestocker-back.onrender.com/docs",
    repoLink: "https://github.com/GeStocker/GeStocker-Back",
    technologies: "Nest.js, Swagger, PostgreSQL, TypeORM, TypeScript, Node.js, Express, Swagger, RESTful API, JWT, Bcrypt, Docker, Auth0, Socket.io, Stripe",
    description: "Gestocker is a web application designed for inventory and sales management, enabling users to efficiently control products and transactions. The platform features an intuitive interface for easy navigation and data management. Users can add, edit, and delete products while tracking sales and generating detailed reports. The system is designed to be scalable and adaptable to different business sizes from small shops to large enterprises.",
  }
];

const Projects = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const { t } = useLanguage();

  const openModal = (project) => {
    setSelectedProject(project);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <ProjectsSection id="projects">
      <SectionHeader>
        <SectionTitle>{t('projectsTitle')}</SectionTitle>
        <SectionSubtitle>{t('projectsSubtitle')}</SectionSubtitle>
      </SectionHeader>
      
      <ProjectGrid>
        {projects.map((project, index) => (
          <ProjectContainer key={index} onClick={() => openModal(project)}>
            <ProjectImage variant="top" src={project.image} alt={project.title} />
            <Card.Body>
              <StyledCardTitle>{project.title}</StyledCardTitle>
            </Card.Body>
          </ProjectContainer>
        ))}
      </ProjectGrid>

      <StyledModal show={isModalOpen} onHide={closeModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>{selectedProject?.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedProject && (
            <>
              <ProjectImage 
                variant="top" 
                src={selectedProject.image} 
                alt={selectedProject.title} 
                style={{ borderRadius: '10px', marginBottom: '20px' }}
              />
              <div style={{ marginBottom: '15px' }}>
                {selectedProject.technologies.split(', ').map((tech, i) => (
                  <TechPill key={i}>{tech}</TechPill>
                ))}
              </div>
              <p style={{ lineHeight: '1.6', marginBottom: '25px' }}>
                {selectedProject.description}
              </p>
              <div className="d-flex gap-3">
                <Button 
                  variant="primary" 
                  href={selectedProject.demoLink} 
                  target="_blank"
                  style={{
                    backgroundColor: '#6c63ff',
                    border: 'none',
                    padding: '10px 25px',
                    borderRadius: '5px',
                    fontWeight: '600'
                  }}
                >
                  View Demo
                </Button>
                <Button 
                  variant="secondary" 
                  href={selectedProject.repoLink} 
                  target="_blank"
                  style={{
                    backgroundColor: '#2e476b',
                    border: 'none',
                    padding: '10px 25px',
                    borderRadius: '5px',
                    fontWeight: '600',
                    color: '#ccd6f6'
                  }}
                >
                  Repository
                </Button>
              </div>
            </>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button 
            variant="danger" 
            onClick={closeModal}
            style={{
              backgroundColor: 'transparent',
              border: '1px solid #ff4d4d',
              color: '#ff4d4d',
              fontWeight: '600',
              transition: 'all 0.3s',
              
              '&:hover': {
                backgroundColor: '#ff4d4d',
                color: '#fff'
              }
            }}
          >
            Close
          </Button>
        </Modal.Footer>
      </StyledModal>
    </ProjectsSection>
  );
};

export default Projects;