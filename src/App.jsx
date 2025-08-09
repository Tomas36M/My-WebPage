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
            <title>Tomas Munevar | Full Stack Developer</title>
            <meta name="description" content="Professional portfolio of Tomas Munevar, Full Stack Developer specializing in modern web technologies" />
            <meta name="keywords" content="Full Stack Developer, React, JavaScript, TypeScript, Node.js, Portfolio, Web Development" />
            <meta name="author" content="Tomas Munevar" />
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
