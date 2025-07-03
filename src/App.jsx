import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'

// PAGES
import Landing from './pages/Landing';
import About from './pages/About';
import Work from './pages/Work';
import Contact from './pages/Contact';
import ProjectPage from './pages/ProjectPage';

// COMPONENTS
import Nav from './components/Nav';
import Footer from './components/Footer';
import Preloader from './components/Preloader';
import PageTransition from './components/PageTransition';


function App() {

  return (
    <Router>
      <PageTransition />
      <Preloader />
      <Nav />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/about" element={<About />} />
        <Route path="/work" element={<Work />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects/:id" element={<ProjectPage />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
