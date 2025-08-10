import React, { useState } from "react";
import { useLanguage } from "../contexts/LanguageContext";
import { venusSuiteImages } from "../data/RoomsImages";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "../styles/main.css";

export default function VenusSuite() {
  const { t, currentLanguage } = useLanguage();
  const images = venusSuiteImages;
  const [mainImage, setMainImage] = useState(images[0]);
  const [enlargedImage, setEnlargedImage] = useState(null);
  const [showAllImages, setShowAllImages] = useState(false);
  const initialImageCount = 6; // Show first 6 images initially for Venus Suite
  
  const displayedImages = showAllImages ? images : images.slice(0, initialImageCount);
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
                {currentLanguage === 'en' ? 'Venus Suite' : 'Venus Suite'}
              </span>
            </div>
            <div className="room-title-section">
              <h1 className="room-title">
                {currentLanguage === 'en' ? 'Venus Suite' : 'Venus Suite'}
              </h1>
              <p className="room-subtitle">
                {currentLanguage === 'en' 
                  ? 'Luxurious suite inspired by the goddess of love and beauty.' 
                  : 'Πολυτελής σουίτα εμπνευσμένη από τη θεά του έρωτα και της ομορφιάς.'}
              </p>
            </div>
          </div>
          <div className="room-content">
            <div className="room-gallery-section">
              <div className="room-main-image">
                <img 
                  src={mainImage}
                  alt={currentLanguage === 'en' ? 'Venus Suite' : 'Σουίτα Αφροδίτη'}
                  className="main-room-image"
                  style={{ cursor: 'pointer' }}
                  onClick={() => {
                    setEnlargedImage(mainImage);
                    setShowAllImages(true); // Show all images when opening lightbox
                  }}
                />
              </div>
              <div className="room-thumbnail-gallery">
                {displayedImages.map((img, idx) => (
                  <img
                    key={img}
                    src={img}
                    alt={`Room view ${idx + 1}`}
                    className="thumbnail"
                    style={{ cursor: 'pointer', border: mainImage === img ? '2px solid #007bff' : 'none' }}
                    onClick={() => setMainImage(img)}
                    onDoubleClick={() => {
                      setEnlargedImage(img);
                      setShowAllImages(true); // Show all images when opening lightbox
                    }}
                  />
                ))}
                {images.length > initialImageCount && (
                  <div className="show-more-container" style={{ 
                    display: 'flex', 
                    justifyContent: 'center', 
                    marginTop: '15px' 
                  }}>
                    <button 
                      className="btn btn-secondary"
                      onClick={() => setShowAllImages(!showAllImages)}
                      style={{ 
                        padding: '8px 16px', 
                        fontSize: '14px',
                        borderRadius: '5px',
                        backgroundColor: '#6c757d',
                        color: 'white',
                        border: 'none',
                        cursor: 'pointer'
                      }}
                    >
                      {showAllImages 
                        ? (currentLanguage === 'en' ? 'Show Less' : 'Λιγότερα') 
                        : (currentLanguage === 'en' ? `Show More (${images.length - initialImageCount} more)` : `Περισσότερα (${images.length - initialImageCount} ακόμη)`)}
                    </button>
                  </div>
                )}
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
                    <span className="amenity-icon">⌂</span>
                    <span>{currentLanguage === 'en' ? 'Entire place to yourself' : 'Όλο το κατάλυμα στη διάθεσή σας'}</span>
                  </div>
                  <div className="amenity-item">
                    <span className="amenity-icon">□</span>
                    <span>{currentLanguage === 'en' ? '42 m² size' : '42 τ.μ. μέγεθος'}</span>
                  </div>
                  <div className="amenity-item">
                    <span className="amenity-icon">◉</span>
                    <span>{currentLanguage === 'en' ? 'Free WiFi' : 'Δωρεάν Wi-Fi'}</span>
                  </div>
                  <div className="amenity-item">
                    <span className="amenity-icon">�</span>
                    <span>{currentLanguage === 'en' ? 'Private Bathroom' : 'Ιδιωτικό μπάνιο'}</span>
                  </div>
                  <div className="amenity-item">
                    <span className="amenity-icon">❋</span>
                    <span>{currentLanguage === 'en' ? 'Air Conditioning' : 'Κλιματισμός'}</span>
                  </div>
                  <div className="amenity-item">
                    <span className="amenity-icon">▢</span>
                    <span>{currentLanguage === 'en' ? 'Balcony' : 'Μπαλκόνι'}</span>
                  </div>
                  <div className="amenity-item">
                    <span className="amenity-icon">◈</span>
                    <span>{currentLanguage === 'en' ? 'Terrace' : 'Βεράντα'}</span>
                  </div>
                  <div className="amenity-item">
                    <span className="amenity-icon"><i className="fas fa-shower"></i></span>
                    <span>{currentLanguage === 'en' ? 'Bath or Shower' : 'Μπανιέρα ή ντους'}</span>
                  </div>
                  <div className="amenity-item">
                    <span className="amenity-icon"><i className="fas fa-concierge-bell"></i></span>
                    <span>{currentLanguage === 'en' ? '24-hour Front Desk' : '24ωρη Ρεσεψιόν'}</span>
                  </div>
                  <div className="amenity-item">
                    <span className="amenity-icon"><i className="fas fa-broom"></i></span>
                    <span>{currentLanguage === 'en' ? 'Daily Housekeeping' : 'Καθημερινή υπηρεσία καθαριότητας'}</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="room-details-section">
              <div className="room-info">
                <h2 className="section-title">
                  {currentLanguage === 'en' ? 'About This Property' : 'Σχετικά με το Ακίνητο'}
                </h2>
                
                {/* Property Description */}
                <div className="property-description" style={{ marginBottom: '25px' }}>
                  <p style={{ fontSize: '16px', lineHeight: '1.6', marginBottom: '15px' }}>
                    {currentLanguage === 'en' 
                      ? "The entire place is yours. VENUS Suite in Mykonos offers a holiday home with comfortable accommodation featuring 42 m² of space, two bedrooms and two bathrooms." 
                      : "Στην καρδιά του προορισμού Μύκονος Χώρα και σε μικρή απόσταση από τα σημεία ενδιαφέροντος Παραλία Αγία Άννα και Αρχαιολογικό Μουσείο Μυκόνου, το VENUS Suite προσφέρει δωρεάν WiFi, κλιματισμό και οικιακές παροχές, όπως ψυγείο και ηλεκτρικό βραστήρα. Αυτό το κατάλυμα προσφέρει πρόσβαση σε βεράντα."}
                  </p>
                  <p style={{ fontSize: '16px', lineHeight: '1.6', marginBottom: '15px' }}>
                    {currentLanguage === 'en' 
                      ? "The property features 2 bathrooms with bath or shower, and free toiletries and hair dryer are provided." 
                      : "Το κατάλυμα έχει επίσης 2 μπάνια με μπανιέρα ή ντους, ενώ διατίθενται δωρεάν προϊόντα μπάνιου και στεγνωτήρας μαλλιών."}
                  </p>
                  <p style={{ fontSize: '16px', lineHeight: '1.6', marginBottom: '15px' }}>
                    {currentLanguage === 'en' 
                      ? "The reception staff speaks Arabic, Greek and English." 
                      : "Οι γλώσσες που μιλάει το προσωπικό στη ρεσεψιόν είναι Αραβικά, Ελληνικά και Αγγλικά."}
                  </p>
                  <p style={{ fontSize: '16px', lineHeight: '1.6' }}>
                    {currentLanguage === 'en' 
                      ? "Near VENUS Suite you will find popular attractions such as Mykonos Old Port, Mykonos Windmills and Little Venice. Mykonos Airport is 3 km away from the property." 
                      : "Κοντά στο VENUS Suite θα βρείτε δημοφιλή σημεία ενδιαφέροντος, όπως Παλιό Λιμάνι Μυκόνου, Ανεμόμυλοι Μυκόνου και Μικρή Βενετία. Το αεροδρόμιο Αεροδρόμιο Μυκόνου είναι 3 χλμ μακριά από το κατάλυμα."}
                  </p>
                </div>

                <h3 className="section-title" style={{ fontSize: '20px', marginBottom: '15px' }}>
                  {currentLanguage === 'en' ? 'Suite Specifications' : 'Προδιαγραφές Σουίτας'}
                </h3>
                <div className="room-specs">
                  <div className="spec-item">
                    <span className="spec-icon">�</span>
                    <div className="spec-info">
                      <h4>{currentLanguage === 'en' ? 'Size' : 'Μέγεθος'}</h4>
                      <p>42 m²</p>
                    </div>
                  </div>
                  <div className="spec-item">
                    <span className="spec-icon">�🛏️</span>
                    <div className="spec-info">
                      <h4>{currentLanguage === 'en' ? 'Bedrooms' : 'Υπνοδωμάτια'}</h4>
                      <p>{currentLanguage === 'en' ? '2 Bedrooms' : '2 Υπνοδωμάτια'}</p>
                    </div>
                  </div>
                  <div className="spec-item">
                    <span className="spec-icon">🚿</span>
                    <div className="spec-info">
                      <h4>{currentLanguage === 'en' ? 'Bathrooms' : 'Μπάνια'}</h4>
                      <p>{currentLanguage === 'en' ? '2 Private Bathrooms' : '2 Ιδιωτικά Μπάνια'}</p>
                    </div>
                  </div>
                  <div className="spec-item">
                    <span className="spec-icon">👥</span>
                    <div className="spec-info">
                      <h4>{currentLanguage === 'en' ? 'Guests' : 'Επισκέπτες'}</h4>
                      <p>{currentLanguage === 'en' ? 'Up to 4 people' : 'Έως 4 άτομα'}</p>
                    </div>
                  </div>
                </div>
                <div className="room-pricing">
                  <h3>{currentLanguage === 'en' ? 'Pricing' : 'Τιμές'}</h3>
                  <div className="price-info">
                    <span className="price">300</span>
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
