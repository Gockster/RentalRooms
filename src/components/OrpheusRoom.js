import React, { useState } from "react";
import { useLanguage } from "../contexts/LanguageContext";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "../styles/main.css";

export default function OrpheusRoom() {
  const { t, currentLanguage } = useLanguage();
  const images = [
    '/images/RoomsImages/room-nana-02.jpg',
    '/images/RoomsImages/room-nana-03.jpg',
    '/images/RoomsImages/room-nana-04.webp',
    '/images/RoomsImages/room-nana-05.webp',
    '/images/RoomsImages/room-nana-08.jpg',
  ];
  const [mainImage, setMainImage] = useState(images[0]);
  const [enlargedImage, setEnlargedImage] = useState(null);
  const enlargedIndex = enlargedImage ? images.indexOf(enlargedImage) : -1;
  const goToNext = (e) => {
    e.stopPropagation();
    if (enlargedIndex !== -1) {
      setEnlargedImage(images[(enlargedIndex + 1) % images.length]);
    }
  };
  const goToPrev = (e) => {
    e.stopPropagation();
    if (enlargedIndex !== -1) {
      setEnlargedImage(images[(enlargedIndex - 1 + images.length) % images.length]);
    }
  };

  return (
    <div className="App">
      <Navbar />
      <main className="room-detail-main">
        <div className="room-detail-container">
          <div className="room-header">
            <div className="room-breadcrumb">
              <a href="/" className="breadcrumb-link">{t.footer?.quickLinks?.home}</a>
              <span className="breadcrumb-separator"></span>
              <a href="/#rooms" className="breadcrumb-link">{t.footer?.quickLinks?.rooms}</a>
              <span className="breadcrumb-separator"></span>
              <span className="breadcrumb-current">
                {currentLanguage === 'en' ? 'Orpheus Room' : 'Δωμάτιο Ορφέας'}
              </span>
            </div>
            <div className="room-title-section">
              <h1 className="room-title">
                {currentLanguage === 'en' ? 'Orpheus Room' : 'Δωμάτιο Ορφέας'}
              </h1>
              <p className="room-subtitle">
                {currentLanguage === 'en' 
                  ? 'Modern accommodation in the heart of Mykonos.' 
                  : 'Μοντέρνο κατάλυμα στη καρδιά της Μυκόνου.'}
              </p>
            </div>
          </div>
          <div className="room-content">
            <div className="room-gallery-section">
              <div className="room-main-image">
                <img 
                  src={mainImage}
                  alt={currentLanguage === 'en' ? 'Orpheus Room' : 'Δωμάτιο Ορφέας'}
                  className="main-room-image"
                  style={{ cursor: 'pointer' }}
                  onClick={() => setEnlargedImage(mainImage)}
                />
              </div>
              <div className="room-thumbnail-gallery">
                {images.map((img, idx) => (
                  <img
                    key={img}
                    src={img}
                    alt={`Room view ${idx + 1}`}
                    className="thumbnail"
                    style={{ cursor: 'pointer', border: mainImage === img ? '2px solid #007bff' : 'none' }}
                    onClick={() => setMainImage(img)}
                    onDoubleClick={() => setEnlargedImage(img)}
                  />
                ))}
              </div>
              {enlargedImage && (
                <div className="lightbox-overlay" style={{
                  position: 'fixed',
                  top: 0,
                  left: 0,
                  width: '100vw',
                  height: '100vh',
                  background: 'rgba(0,0,0,0.8)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  zIndex: 1000
                }} onClick={() => setEnlargedImage(null)}>
                  {/* Prev arrow */}
                  <button onClick={goToPrev} style={{
                    position: 'absolute',
                    left: 32,
                    top: '50%',
                    transform: 'translateY(-50%)',
                    fontSize: 48,
                    color: '#fff',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    zIndex: 1001
                  }} aria-label="Previous">‹</button>
                  {/* Next arrow */}
                  <button onClick={goToNext} style={{
                    position: 'absolute',
                    right: 32,
                    top: '50%',
                    transform: 'translateY(-50%)',
                    fontSize: 48,
                    color: '#fff',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    zIndex: 1001
                  }} aria-label="Next">›</button>
                  <img src={enlargedImage} alt="Enlarged" style={{ maxWidth: '90vw', maxHeight: '90vh', borderRadius: 8, boxShadow: '0 2px 16px #000' }} />
                  <button onClick={() => setEnlargedImage(null)} style={{
                    position: 'absolute',
                    top: 32,
                    right: 32,
                    fontSize: 32,
                    color: '#fff',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    zIndex: 1001
                  }} aria-label="Close">×</button>
                  <div style={{
                    position: 'absolute',
                    bottom: 48,
                    left: '50%',
                    transform: 'translateX(-50%)',
                    zIndex: 1002
                  }}>
                    <button className="btn btn-primary btn-large">
                      {currentLanguage === 'en' 
                        ? <>For booking call us on <span role="img" aria-label="phone">📞</span> +30 6955217820</> 
                        : <>Για κράτηση καλέστε μας στο <span role="img" aria-label="phone">📞</span> +30 6955217820</>}
                    </button>
                  </div>
                </div>
              )}
              <div className="room-facilities-hero">
                <h3>{currentLanguage === 'en' ? 'Facilities' : 'Παροχές'}</h3>
                <div className="amenities-grid">
                  <div className="amenity-item">
                    <span className="amenity-icon">❄️</span>
                    <span>{currentLanguage === 'en' ? 'Air Conditioning' : 'Κλιματισμός'}</span>
                  </div>
                  <div className="amenity-item">
                    <span className="amenity-icon">📶</span>
                    <span>{currentLanguage === 'en' ? 'WiFi' : 'WiFi'}</span>
                  </div>
                  <div className="amenity-item">
                    <span className="amenity-icon">📺</span>
                    <span>{currentLanguage === 'en' ? 'LCD TV' : 'LCD Τηλεόραση'}</span>
                  </div>
                  <div className="amenity-item">
                    <span className="amenity-icon">🧊</span>
                    <span>{currentLanguage === 'en' ? 'Fridge' : 'Ψυγείο'}</span>
                  </div>
                  <div className="amenity-item">
                    <span className="amenity-icon">🧴</span>
                    <span>{currentLanguage === 'en' ? 'Hair Dryer' : 'Σεσουάρ για τα μαλλιά'}</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="room-details-section">
              <div className="room-info">
                <h2 className="section-title">
                  {currentLanguage === 'en' ? 'Room Details' : 'Λεπτομέρειες Δωματίου'}
                </h2>
                <div className="room-specs">
                  <div className="spec-item">
                    <span className="spec-icon">🛏️</span>
                    <div className="spec-info">
                      <h4>{currentLanguage === 'en' ? 'Bed' : 'Κρεβάτι'}</h4>
                      <p>{currentLanguage === 'en' ? '1 Double Bed' : '1 Διπλό Κρεβάτι'}</p>
                    </div>
                  </div>
                  <div className="spec-item">
                    <span className="spec-icon">👥</span>
                    <div className="spec-info">
                      <h4>{currentLanguage === 'en' ? 'Guests' : 'Επισκέπτες'}</h4>
                      <p>{currentLanguage === 'en' ? 'Up to 2 people' : 'Έως 2 άτομα'}</p>
                    </div>
                  </div>
                </div>
                <div className="room-pricing">
                  <h3>{currentLanguage === 'en' ? 'Pricing' : 'Τιμές'}</h3>
                  <div className="price-info">
                    <span className="price">200</span>
                    <span className="price-period">{t.gallery?.priceLabels?.night}</span>
                  </div>
                  <div className="availability-status available">
                    <span className="status-indicator"></span>
                    <span>{t.gallery?.availabilityLabels?.Available}</span>
                  </div>
                </div>
                {!enlargedImage && (
                  <div className="room-actions">
                    <button className="btn btn-primary btn-large">
                      {currentLanguage === 'en' 
                        ? <>For booking call us on <span role="img" aria-label="phone">📞</span> +30 6955217820</> 
                        : <>Για κράτηση καλέστε μας στο <span role="img" aria-label="phone">📞</span> +30 6955217820</>}
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
