import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './contexts/LanguageContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WelcomeSection from './components/WelcomeSection';
import RoomGallery from './components/RoomGallery';
import Footer from './components/Footer';
import AriesSuite from './components/AriesSuite';
import VenusSuite from './components/VenusSuite';

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
  const routes = [
    { path: '/', element: <HomePage /> },
    { path: '/rooms/AriesSuite', element: <AriesSuite /> },
    { path: '/rooms/VenusSuite', element: <VenusSuite /> },
  ];
  return (
    <LanguageProvider>
      <Router>
        <Routes>
          {routes.map(({ path, element }) => (
            <Route key={path} path={path} element={element} />
          ))}
        </Routes>
      </Router>
    </LanguageProvider>
  );
}

export default App;
