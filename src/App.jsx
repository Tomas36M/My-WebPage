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
            <title>Tomás Munévar| Full Stack Developer · AI · Healthcare Tech</title>
            <meta name="description" content="Full Stack Developer especializado en TypeScript (NestJS/React/Next.js), integración de LLMs (LangChain, OpenAI, Anthropic, Gemini), healthcare tech (FHIR/HL7) y pasarelas de pago. Disponible para nuevas oportunidades y proyectos freelance." />
            <meta name="keywords" content="Full Stack Developer, React, NestJS, Next.js, TypeScript, LangChain, OpenAI, Anthropic, Gemini, Deepgram, AI, LLM, Healthcare Tech, FHIR, HL7, Azure, AWS, Docker, Stripe, Payment Gateway, Bogotá, Colombia, Freelance" />
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
