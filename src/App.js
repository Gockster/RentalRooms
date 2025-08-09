import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './contexts/LanguageContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WelcomeSection from './components/WelcomeSection';
import RoomGallery from './components/RoomGallery';
import Footer from './components/Footer';
import OrpheusRoom from './components/OrpheusRoom';
import PersePhoneRoom from './components/PersePhoneRoom';

function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <WelcomeSection />
      <RoomGallery />
      <Footer />
    </>
  );
}

function App() {
  return (
    <LanguageProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/rooms/orpheus-room" element={<OrpheusRoom />} />
          <Route path="/rooms/persephone-room" element={<PersePhoneRoom />} />
        </Routes>
      </Router>
    </LanguageProvider>
  );
}

export default App;
