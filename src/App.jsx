import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';

import Contact from './pages/Contact';
import Features from './pages/features'
import Pricing from './pages/Pricing'
import Video from './pages/videopage'
import  PartnerProgram from './pages/PartnerProgram'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-slate-950 text-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        
          <Route path="/contact" element={<Contact />} />
          <Route path="/features" element={<Features />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/video" element={<Video/>} />
          <Route path="/partnerProgram" element={< PartnerProgram/>} />

        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
