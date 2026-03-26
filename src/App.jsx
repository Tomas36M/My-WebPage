import Home from './components/Home.jsx'
import ExperienceEducation from './components/Experience.jsx'
import LogoSlider from './components/Tecnologies.jsx'
import Footer from './components/Footer.jsx'
import Services from './components/Services.jsx'
import ServicesPreview from './components/ServicesPreview.jsx'
import Navigation from './components/Navbar.jsx'
import LanguageProvider from './contexts/LanguageContext.jsx'
import { HelmetProvider, Helmet } from 'react-helmet-async'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'

function App() {

  return (
    <LanguageProvider>
      <HelmetProvider>
        <Router>
          <Helmet>
            <title>Tomás Munévar Escalante | Full Stack Developer · Healthcare Tech · Freelance</title>
            <meta name="description" content="Desarrollador Full Stack especializado en salud digital (Microsoft for Healthcare, FHIR), integración de pasarelas de pago y aplicaciones web escalables con React, NestJS y TypeScript. Disponible para proyectos freelance desde Bogotá, Colombia." />
            <meta name="keywords" content="Full Stack Developer, React, NestJS, TypeScript, Node.js, Healthcare Tech, Microsoft for Healthcare, FHIR, Azure, Stripe, Payment Gateway, Bogotá, Colombia, Freelance, Portfolio" />
            <meta name="author" content="Tomás Munévar Escalante" />
          </Helmet>
          <Navigation />
          <Routes>
            <Route path="/" element={<>
              <Home />
              <LogoSlider />
              <ExperienceEducation />
              <ServicesPreview />
            </>} />
            <Route path="/services" element={<Services />} />
          </Routes>
          <Footer />
        </Router>
      </HelmetProvider>
    </LanguageProvider>
  )
}

export default App
