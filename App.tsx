import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import LandingPage from './pages/LandingPage';
import Builder from './pages/Builder';
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
          </Routes>
        </Router>
      )}
    </>
  );
};

export default App;