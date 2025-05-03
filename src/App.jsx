import Home from './components/Home.jsx'
import ExperienceEducation from './components/Experience.jsx'
import LogoSlider from './components/Tecnologies.jsx'
import Footer from './components/Footer.jsx'
import { HelmetProvider } from 'react-helmet-async'
import './App.css'

function App() {

  return (
    <div>
      <HelmetProvider>
        <title>Tomas Munevar | Full Stack Developer</title>
        <meta name="description" content="Professional portfolio of Tomas Munevar, Full Stack Developer specializing in modern web technologies" />
        <meta name="keywords" content="Full Stack Developer, React, JavaScript, TypeScript, Node.js, Portfolio, Web Development" />
        <meta name="author" content="Tomas Munevar" />
        <Home />
        <LogoSlider />
        <ExperienceEducation />
        <Footer />
      </HelmetProvider>
    </div>
  )
}

export default App
