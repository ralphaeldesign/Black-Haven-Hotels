import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { LoadingScreen } from './components/LoadingScreen';

// Pages
import { Home } from './pages/Home';
import { RoomsSuites } from './pages/RoomsSuites';
import { Apartments } from './pages/Apartments';
import { Restaurant } from './pages/Restaurant';
import { SpaWellness } from './pages/SpaWellness';
import { Gallery } from './pages/Gallery';
import { Events } from './pages/Events';
import { AboutUs } from './pages/AboutUs';
import { Contact } from './pages/Contact';
import { BookNow } from './pages/BookNow';
import { NotFound } from './pages/NotFound';

// Scroll to top helper
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <LoadingScreen />
      
      <div className="flex flex-col min-h-screen bg-[#0A0A0A] text-slate-100 selection:bg-[#D4AF37]/30 selection:text-amber-200">
        <Navbar />
        
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/rooms" element={<RoomsSuites />} />
            <Route path="/apartments" element={<Apartments />} />
            <Route path="/restaurant" element={<Restaurant />} />
            <Route path="/spa" element={<SpaWellness />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/events" element={<Events />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/book" element={<BookNow />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}
