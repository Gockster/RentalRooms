import React, { useState } from "react";
import { useLanguage } from "../contexts/LanguageContext";
import { venusSuiteImages } from "../data/RoomsImages";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "../styles/main.css";
import { 
  Home, 
  Ruler, 
  Wifi, 
  Users, 
  Bath, 
  Snowflake, 
  Building, 
  ShowerHead, 
  Bell, 
  Sparkles,
  Calendar
} from "lucide-react";

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
                    <span className="amenity-icon"><Home size={20} /></span>
                    <span>{currentLanguage === 'en' ? 'Entire place to yourself' : 'Όλο το κατάλυμα στη διάθεσή σας'}</span>
                  </div>
                  <div className="amenity-item">
                    <span className="amenity-icon"><Ruler size={20} /></span>
                    <span>{currentLanguage === 'en' ? '32 m² size' : '32 τ.μ. μέγεθος'}</span>
                  </div>
                  <div className="amenity-item">
                    <span className="amenity-icon"><Wifi size={20} /></span>
                    <span>{currentLanguage === 'en' ? 'Free WiFi' : 'Δωρεάν Wi-Fi'}</span>
                  </div>
                  <div className="amenity-item">
                    <span className="amenity-icon"><Users size={20} /></span>
                    <span>{currentLanguage === 'en' ? 'Family rooms' : 'Οικογενειακά δωμάτια'}</span>
                  </div>
                  <div className="amenity-item">
                    <span className="amenity-icon"><Bath size={20} /></span>
                    <span>{currentLanguage === 'en' ? 'Private Bathroom' : 'Ιδιωτικό μπάνιο'}</span>
                  </div>
                  <div className="amenity-item">
                    <span className="amenity-icon"><Snowflake size={20} /></span>
                    <span>{currentLanguage === 'en' ? 'Air Conditioning' : 'Κλιματισμός'}</span>
                  </div>
                  <div className="amenity-item">
                    <span className="amenity-icon"><Building size={20} /></span>
                    <span>{currentLanguage === 'en' ? 'Balcony' : 'Μπαλκόνι'}</span>
                  </div>
                  <div className="amenity-item">
                    <span className="amenity-icon"><ShowerHead size={20} /></span>
                    <span>{currentLanguage === 'en' ? 'Shower' : 'Ντους'}</span>
                  </div>
                  <div className="amenity-item">
                    <span className="amenity-icon"><Bell size={20} /></span>
                    <span>{currentLanguage === 'en' ? '24-hour Front Desk' : '24ωρη Ρεσεψιόν'}</span>
                  </div>
                  <div className="amenity-item">
                    <span className="amenity-icon"><Sparkles size={20} /></span>
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
                      ? "VENUS Suite is located in Mykonos Town and is 300m from Agia Anna Beach. It features a terrace, free WiFi, 24-hour front desk and ATM. The property was built in 1980 and has a balcony." 
                      : "Το VENUS Suite είναι στη Μύκονο Χώρα και απέχει 300μ από Παραλία Αγία Άννα. Διαθέτει βεράντα, δωρεάν WiFi, 24ωρη ρεσεψιόν και ΑΤΜ. Το κατάλυμα χτίστηκε το 1980 και έχει μπαλκόνι."}
                  </p>
                  <p style={{ fontSize: '16px', lineHeight: '1.6', marginBottom: '15px' }}>
                    {currentLanguage === 'en' 
                      ? "The air-conditioned accommodation also features 1 bathroom with shower." 
                      : "Το κλιματιζόμενο κατάλυμα διαθέτει επίσης 1 μπάνιο με ντους."}
                  </p>
                  <p style={{ fontSize: '16px', lineHeight: '1.6', marginBottom: '15px' }}>
                    {currentLanguage === 'en' 
                      ? "Near VENUS Suite you will find popular attractions such as Little Venice, Archaeological Museum of Mykonos and Mykonos Old Port. Mykonos Airport is 3 km away from the property." 
                      : "Κοντά στο VENUS Suite θα βρείτε δημοφιλή σημεία ενδιαφέροντος, όπως Μικρή Βενετία, Αρχαιολογικό Μουσείο Μυκόνου και Παλιό Λιμάνι Μυκόνου. Το αεροδρόμιο Αεροδρόμιο Μυκόνου είναι 3 χλμ μακριά από το κατάλυμα."}
                  </p>
                  <p style={{ fontSize: '16px', lineHeight: '1.6' }}>
                    {currentLanguage === 'en' 
                      ? "This location is especially popular with couples – they rated it 10.0 for a two-person trip." 
                      : "Η τοποθεσία αρέσει ιδιαίτερα σε ζευγάρια – τη βαθμολόγησαν με 10,0 για ταξίδι δύο ατόμων."}
                  </p>
                </div>

                <h3 className="section-title" style={{ fontSize: '20px', marginBottom: '15px' }}>
                  {currentLanguage === 'en' ? 'Suite Specifications' : 'Προδιαγραφές Σουίτας'}
                </h3>
                <div className="room-specs">
                  <div className="spec-item">
                    <span className="spec-icon"><Ruler size={24} /></span>
                    <div className="spec-info">
                      <h4>{currentLanguage === 'en' ? 'Size' : 'Μέγεθος'}</h4>
                      <p>32 m²</p>
                    </div>
                  </div>
                  <div className="spec-item">
                    <span className="spec-icon"><Users size={24} /></span>
                    <div className="spec-info">
                      <h4>{currentLanguage === 'en' ? 'Room Type' : 'Τύπος Δωματίου'}</h4>
                      <p>{currentLanguage === 'en' ? 'Family Room' : 'Οικογενειακό Δωμάτιο'}</p>
                    </div>
                  </div>
                  <div className="spec-item">
                    <span className="spec-icon"><ShowerHead size={24} /></span>
                    <div className="spec-info">
                      <h4>{currentLanguage === 'en' ? 'Bathroom' : 'Μπάνιο'}</h4>
                      <p>{currentLanguage === 'en' ? '1 Private Bathroom with Shower' : '1 Ιδιωτικό Μπάνιο με Ντους'}</p>
                    </div>
                  </div>
                  <div className="spec-item">
                    <span className="spec-icon"><Calendar size={24} /></span>
                    <div className="spec-info">
                      <h4>{currentLanguage === 'en' ? 'Built' : 'Χτίστηκε'}</h4>
                      <p>1980</p>
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
