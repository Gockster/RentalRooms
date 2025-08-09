import React from 'react';
import { LanguageProvider } from './contexts/LanguageContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import RoomGallery from './components/RoomGallery';
import Footer from './components/Footer';

function App() {
  return (
    <LanguageProvider>
      <Navbar />
      <Hero />
      <RoomGallery />
      <Footer />
    </LanguageProvider>
  );
}

export default App;
