import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import LandingPage from './pages/LandingPage';
import Builder from './pages/Builder';
import About from './pages/About';
import Blog from './pages/Blog';
import Careers from './pages/Careers';
import Contact from './pages/Contact';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import Preloader from './components/Preloader';

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);

  return (
    <>
      <AnimatePresence mode="wait">
        {loading && <Preloader onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      {!loading && (
        <Router>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/build" element={<Builder />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
          </Routes>
        </Router>
      )}
    </>
  );
};

export default App;