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
  Calendar,
  Coffee,
  Waves,
  Plane,
  MapPin,
  Car,
  Utensils,
  Zap,
  Clock,
  Wind,
  Plug,
  Shirt,
  TreePine,
  DoorOpen,
  Flame,
  Receipt,
  Luggage,
  Languages
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

        {/* Property Area Section - Full Width */}
        <div style={{
          width: '100vw',
          marginLeft: 'calc(-50vw + 50%)',
          backgroundColor: '#f8f9fa',
          padding: '60px 20px',
          marginTop: '40px',
          marginBottom: '0'
        }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <h2 style={{ fontSize: '32px', fontWeight: 'bold', marginBottom: '30px', textAlign: 'center', color: '#333' }}>
              {currentLanguage === 'en' ? 'Property Area' : 'Περιοχή καταλύματος'}
            </h2>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '30px' }}>
              {/* Nearby Attractions */}
              <div style={{ 
                backgroundColor: 'white',
                padding: '25px',
                borderRadius: '12px',
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
              }}>
                <h3 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '20px', color: '#007bff', display: 'flex', alignItems: 'center' }}>
                  <Building size={24} style={{ marginRight: '10px' }} />
                  {currentLanguage === 'en' ? 'What\'s nearby' : 'Τι υπάρχει κοντά'}
                </h3>
                <div style={{ fontSize: '15px', lineHeight: '1.8' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                    <span>{currentLanguage === 'en' ? 'Little Venice' : 'Μικρή Βενετία'}</span>
                    <span style={{ color: '#666' }}>200 μ.</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                    <span>{currentLanguage === 'en' ? 'Archaeological Museum of Mykonos' : 'Αρχαιολογικό Μουσείο Μυκόνου'}</span>
                    <span style={{ color: '#666' }}>250 μ.</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                    <span>{currentLanguage === 'en' ? 'Agia Anna Beach' : 'Παραλία Αγία Άννα'}</span>
                    <span style={{ color: '#666' }}>300 μ.</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                    <span>{currentLanguage === 'en' ? 'Mykonos Windmills' : 'Ανεμόμυλοι Μυκόνου'}</span>
                    <span style={{ color: '#666' }}>400 μ.</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                    <span>{currentLanguage === 'en' ? 'Mykonos Old Port' : 'Παλιό Λιμάνι Μυκόνου'}</span>
                    <span style={{ color: '#666' }}>500 μ.</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                    <span>Fabrica Square</span>
                    <span style={{ color: '#666' }}>600 μ.</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                    <span>{currentLanguage === 'en' ? 'Tholos Tomb of Mykonos' : 'Θολωτοσ Ταφοσ Μυκονου'}</span>
                    <span style={{ color: '#666' }}>1,5 χλμ.</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                    <span>{currentLanguage === 'en' ? 'Armenistis Lighthouse' : 'Φάρος Αρμενιστής'}</span>
                    <span style={{ color: '#666' }}>4,8 χλμ.</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                    <span>{currentLanguage === 'en' ? 'Neolithic Settlement of Ftelia Mykonos' : 'Νεολιθικοσ Οικισμοσ Φτελιασ Μυκονου'}</span>
                    <span style={{ color: '#666' }}>5,8 χλμ.</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span>{currentLanguage === 'en' ? 'Stadium District' : 'Συνοικια Του Σταδιου'}</span>
                    <span style={{ color: '#666' }}>9,5 χλμ.</span>
                  </div>
                </div>
              </div>

              {/* Restaurants & Cafes */}
              <div style={{ 
                backgroundColor: 'white',
                padding: '25px',
                borderRadius: '12px',
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
              }}>
                <h3 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '20px', color: '#28a745', display: 'flex', alignItems: 'center' }}>
                  <Coffee size={24} style={{ marginRight: '10px' }} />
                  {currentLanguage === 'en' ? 'Restaurants & Cafes' : 'Εστιατόρια & καφέ'}
                </h3>
                <div style={{ fontSize: '15px', lineHeight: '1.8' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                    <span>{currentLanguage === 'en' ? 'Cafe/Bar Venetia' : 'Καφέ/μπαρ Βενετία'}</span>
                    <span style={{ color: '#666' }}>50 μ.</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                    <span>{currentLanguage === 'en' ? 'Restaurant Kastro' : 'Εστιατόριο Κάστρο'}</span>
                    <span style={{ color: '#666' }}>100 μ.</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span>{currentLanguage === 'en' ? 'Cafe/Bar Sunset' : 'Καφέ/μπαρ Sunset'}</span>
                    <span style={{ color: '#666' }}>150 μ.</span>
                  </div>
                </div>
              </div>

              {/* Nearby Beaches */}
              <div style={{ 
                backgroundColor: 'white',
                padding: '25px',
                borderRadius: '12px',
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
              }}>
                <h3 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '20px', color: '#17a2b8', display: 'flex', alignItems: 'center' }}>
                  <Waves size={24} style={{ marginRight: '10px' }} />
                  {currentLanguage === 'en' ? 'Nearby Beaches' : 'Κοντινές παραλίες'}
                </h3>
                <div style={{ fontSize: '15px', lineHeight: '1.8' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                    <span>{currentLanguage === 'en' ? 'Agia Anna Beach' : 'Παραλία Αγία Άννα'}</span>
                    <span style={{ color: '#666' }}>300 μ.</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                    <span>{currentLanguage === 'en' ? 'Agios Charalampos Beach' : 'Παραλία Άγιος Χαράλαμπος'}</span>
                    <span style={{ color: '#666' }}>450 μ.</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                    <span>{currentLanguage === 'en' ? 'Megali Ammos Beach' : 'Παραλία Μεγάλη Άμμος'}</span>
                    <span style={{ color: '#666' }}>850 μ.</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                    <span>{currentLanguage === 'en' ? 'Korfos Beach' : 'Παραλία Κόρφος'}</span>
                    <span style={{ color: '#666' }}>1,4 χλμ.</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span>{currentLanguage === 'en' ? 'Tourlos Beach' : 'Παραλία Τούρλος'}</span>
                    <span style={{ color: '#666' }}>1,5 χλμ.</span>
                  </div>
                </div>
              </div>

              {/* Nearest Airports */}
              <div style={{ 
                backgroundColor: 'white',
                padding: '25px',
                borderRadius: '12px',
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
              }}>
                <h3 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '20px', color: '#dc3545', display: 'flex', alignItems: 'center' }}>
                  <Plane size={24} style={{ marginRight: '10px' }} />
                  {currentLanguage === 'en' ? 'Nearest Airports' : 'Κοντινότερα αεροδρόμια'}
                </h3>
                <div style={{ fontSize: '15px', lineHeight: '1.8' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                    <span>{currentLanguage === 'en' ? 'Mykonos Airport' : 'Αεροδρόμιο Μυκόνου'}</span>
                    <span style={{ color: '#666' }}>3 χλμ.</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                    <span>{currentLanguage === 'en' ? 'Syros Airport' : 'Αεροδρόμιο Σύρου'}</span>
                    <span style={{ color: '#666' }}>42 χλμ.</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span>{currentLanguage === 'en' ? 'Naxos State Airport' : 'Κρατικός Αερολιμένας Νάξου'}</span>
                    <span style={{ color: '#666' }}>49 χλμ.</span>
                  </div>
                </div>
              </div>
            </div>

            <div style={{ marginTop: '30px', textAlign: 'center' }}>
              <p style={{ fontSize: '14px', color: '#666', fontStyle: 'italic' }}>
                {currentLanguage === 'en' 
                  ? 'Approximate shortest walking or driving distances are shown. Actual distances may differ.'
                  : 'Εμφανίζονται οι κατά προσέγγιση συντομότερες αποστάσεις με τα πόδια ή το αυτοκίνητο. Οι πραγματικές αποστάσεις ενδέχεται να διαφέρουν.'}
              </p>
            </div>
          </div>
        </div>

        {/* VENUS Suite Amenities Section - Full Width */}
        <div style={{
          width: '100vw',
          marginLeft: 'calc(-50vw + 50%)',
          backgroundColor: '#ffffff',
          padding: '60px 20px',
          borderTop: '1px solid #e0e0e0'
        }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <h2 style={{ fontSize: '32px', fontWeight: 'bold', marginBottom: '30px', textAlign: 'center', color: '#333' }}>
              {currentLanguage === 'en' ? 'VENUS Suite Amenities' : 'Παροχές του VENUS Suite'}
            </h2>

            {/* Most Popular Amenities */}
            <div style={{ marginBottom: '40px' }}>
              <h3 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '20px', color: '#007bff', textAlign: 'center' }}>
                <Sparkles size={24} style={{ marginRight: '10px', verticalAlign: 'middle' }} />
                {currentLanguage === 'en' ? 'Most Popular Amenities' : 'Οι πιο δημοφιλείς παροχές'}
              </h3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '15px', marginBottom: '30px' }}>
                <div style={{ display: 'flex', alignItems: 'center', padding: '15px', backgroundColor: '#f8f9fa', borderRadius: '8px' }}>
                  <Wifi size={20} style={{ marginRight: '10px', color: '#28a745' }} />
                  <span>{currentLanguage === 'en' ? 'Free Wi-Fi' : 'Δωρεάν Wi-Fi'}</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', padding: '15px', backgroundColor: '#f8f9fa', borderRadius: '8px' }}>
                  <Bell size={20} style={{ marginRight: '10px', color: '#28a745' }} />
                  <span>{currentLanguage === 'en' ? '24-hour Reception' : '24ωρη Ρεσεψιόν'}</span>
                </div>
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '30px' }}>
              
              {/* Perfect for your stay */}
              <div style={{ 
                backgroundColor: '#f8f9fa',
                padding: '25px',
                borderRadius: '12px',
                border: '1px solid #e0e0e0'
              }}>
                <h3 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '20px', color: '#007bff', display: 'flex', alignItems: 'center' }}>
                  <Home size={24} style={{ marginRight: '10px' }} />
                  {currentLanguage === 'en' ? 'Perfect for your stay' : 'Ιδανικά για τη διαμονή σας'}
                </h3>
                <div style={{ display: 'grid', gap: '10px' }}>
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <ShowerHead size={18} style={{ marginRight: '10px', color: '#666' }} />
                    <span>{currentLanguage === 'en' ? 'Private Bathroom' : 'Ιδιωτικό μπάνιο'}</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <Snowflake size={18} style={{ marginRight: '10px', color: '#666' }} />
                    <span>{currentLanguage === 'en' ? 'Air Conditioning' : 'Κλιματισμός'}</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <Building size={18} style={{ marginRight: '10px', color: '#666' }} />
                    <span>{currentLanguage === 'en' ? 'Balcony' : 'Μπαλκόνι'}</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <Wifi size={18} style={{ marginRight: '10px', color: '#666' }} />
                    <span>{currentLanguage === 'en' ? 'Free Wi-Fi' : 'Δωρεάν Wi-Fi'}</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <Building size={18} style={{ marginRight: '10px', color: '#666' }} />
                    <span>{currentLanguage === 'en' ? 'Terrace' : 'Βεράντα'}</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <Users size={18} style={{ marginRight: '10px', color: '#666' }} />
                    <span>{currentLanguage === 'en' ? 'Family Room' : 'Οικογενειακό Δωμάτιο'}</span>
                  </div>
                </div>
              </div>

              {/* Parking */}
              <div style={{ 
                backgroundColor: 'white',
                padding: '25px',
                borderRadius: '12px',
                boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
              }}>
                <h3 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '15px', color: '#dc3545', display: 'flex', alignItems: 'center' }}>
                  <Car size={24} style={{ marginRight: '10px' }} />
                  {currentLanguage === 'en' ? 'Parking' : 'Χώρος στάθμευσης'}
                </h3>
                <p style={{ margin: '0', color: '#666' }}>
                  {currentLanguage === 'en' ? 'No parking available.' : 'Δεν υπάρχει χώρος στάθμευσης.'}
                </p>
              </div>

              {/* Internet */}
              <div style={{ 
                backgroundColor: 'white',
                padding: '25px',
                borderRadius: '12px',
                boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
              }}>
                <h3 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '15px', color: '#28a745', display: 'flex', alignItems: 'center' }}>
                  <Wifi size={24} style={{ marginRight: '10px' }} />
                  {currentLanguage === 'en' ? 'Internet' : 'Ίντερνετ'}
                </h3>
                <p style={{ margin: '0', color: '#666' }}>
                  {currentLanguage === 'en' ? 'Wi-Fi is available throughout and is not charged.' : 'Wi-Fi διατίθεται σε όλους τους χώρους και δεν χρεώνεται.'}
                </p>
              </div>

              {/* Bedroom */}
              <div style={{ 
                backgroundColor: 'white',
                padding: '25px',
                borderRadius: '12px',
                boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
              }}>
                <h3 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '15px', color: '#6f42c1', display: 'flex', alignItems: 'center' }}>
                  <Home size={24} style={{ marginRight: '10px' }} />
                  {currentLanguage === 'en' ? 'Bedroom' : 'Υπνοδωμάτιο'}
                </h3>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <Clock size={18} style={{ marginRight: '10px', color: '#666' }} />
                  <span>{currentLanguage === 'en' ? 'Alarm clock' : 'Ξυπνητήρι'}</span>
                </div>
              </div>

              {/* Bathroom */}
              <div style={{ 
                backgroundColor: 'white',
                padding: '25px',
                borderRadius: '12px',
                boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
              }}>
                <h3 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '20px', color: '#17a2b8', display: 'flex', alignItems: 'center' }}>
                  <ShowerHead size={24} style={{ marginRight: '10px' }} />
                  {currentLanguage === 'en' ? 'Bathroom' : 'Μπάνιο'}
                </h3>
                <div style={{ display: 'grid', gap: '8px' }}>
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <Building size={18} style={{ marginRight: '10px', color: '#666' }} />
                    <span>{currentLanguage === 'en' ? 'Toilet paper' : 'Χαρτί υγείας'}</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <Sparkles size={18} style={{ marginRight: '10px', color: '#666' }} />
                    <span>{currentLanguage === 'en' ? 'Towels' : 'Πετσέτες'}</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <ShowerHead size={18} style={{ marginRight: '10px', color: '#666' }} />
                    <span>{currentLanguage === 'en' ? 'Shower' : 'Ντους'}</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <ShowerHead size={18} style={{ marginRight: '10px', color: '#666' }} />
                    <span>{currentLanguage === 'en' ? 'Private bathroom' : 'Ιδιωτικό μπάνιο'}</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <Sparkles size={18} style={{ marginRight: '10px', color: '#666' }} />
                    <span>{currentLanguage === 'en' ? 'Free toiletries' : 'Δωρεάν προϊόντα περιποίησης'}</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <Wind size={18} style={{ marginRight: '10px', color: '#666' }} />
                    <span>{currentLanguage === 'en' ? 'Hair dryer' : 'Στεγνωτήρας μαλλιών'}</span>
                  </div>
                </div>
              </div>

              {/* Room Amenities */}
              <div style={{ 
                backgroundColor: 'white',
                padding: '25px',
                borderRadius: '12px',
                boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
              }}>
                <h3 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '20px', color: '#e91e63', display: 'flex', alignItems: 'center' }}>
                  <Home size={24} style={{ marginRight: '10px' }} />
                  {currentLanguage === 'en' ? 'Room Amenities' : 'Παροχές Δωματίου'}
                </h3>
                <div style={{ display: 'grid', gap: '8px' }}>
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <Plug size={18} style={{ marginRight: '10px', color: '#666' }} />
                    <span>{currentLanguage === 'en' ? 'Socket near bed' : 'Πρίζα κοντά στο κρεβάτι'}</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <Shirt size={18} style={{ marginRight: '10px', color: '#666' }} />
                    <span>{currentLanguage === 'en' ? 'Clothes drying rack' : 'Απλώστρα ρούχων'}</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <TreePine size={18} style={{ marginRight: '10px', color: '#666' }} />
                    <span>{currentLanguage === 'en' ? 'Wooden or parquet flooring' : 'Ξύλινο ή παρκέ δάπεδο'}</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <Building size={18} style={{ marginRight: '10px', color: '#666' }} />
                    <span>{currentLanguage === 'en' ? 'Tiled/marble flooring' : 'Δάπεδο με πλακάκια / μάρμαρο'}</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <DoorOpen size={18} style={{ marginRight: '10px', color: '#666' }} />
                    <span>{currentLanguage === 'en' ? 'Private entrance' : 'Ιδιωτική είσοδος'}</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <Flame size={18} style={{ marginRight: '10px', color: '#666' }} />
                    <span>{currentLanguage === 'en' ? 'Heating' : 'Θέρμανση'}</span>
                  </div>
                </div>
              </div>

            </div>

            {/* Additional Services */}
            <div style={{ marginTop: '40px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '25px' }}>
              
              {/* Reception Services */}
              <div style={{ 
                backgroundColor: '#e3f2fd',
                padding: '25px',
                borderRadius: '12px'
              }}>
                <h4 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '15px', color: '#1976d2', display: 'flex', alignItems: 'center' }}>
                  <Bell size={20} style={{ marginRight: '10px' }} />
                  {currentLanguage === 'en' ? 'Reception Services' : 'Υπηρεσίες ρεσεψιόν'}
                </h4>
                <div style={{ display: 'grid', gap: '8px', fontSize: '14px' }}>
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <Receipt size={16} style={{ marginRight: '8px', color: '#666' }} />
                    {currentLanguage === 'en' ? 'Invoice provision possible' : 'Δυνατότητα παροχής τιμολογίου'}
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <Luggage size={16} style={{ marginRight: '8px', color: '#666' }} />
                    {currentLanguage === 'en' ? 'Luggage storage (extra charge)' : 'Χώρος φύλαξης αποσκευών (επιπλέον χρέωση)'}
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <Clock size={16} style={{ marginRight: '8px', color: '#666' }} />
                    {currentLanguage === 'en' ? 'Express check-in/out (extra charge)' : 'Γρήγορο check in/check out (επιπλέον χρέωση)'}
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <Bell size={16} style={{ marginRight: '8px', color: '#666' }} />
                    {currentLanguage === 'en' ? '24-hour reception' : '24ωρη Ρεσεψιόν'}
                  </div>
                </div>
              </div>

              {/* Cleaning Services */}
              <div style={{ 
                backgroundColor: '#e8f5e8',
                padding: '25px',
                borderRadius: '12px'
              }}>
                <h4 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '15px', color: '#2e7d32', display: 'flex', alignItems: 'center' }}>
                  <Sparkles size={20} style={{ marginRight: '10px' }} />
                  {currentLanguage === 'en' ? 'Cleaning Services' : 'Υπηρεσίες καθαριότητας'}
                </h4>
                <div style={{ fontSize: '14px', display: 'flex', alignItems: 'center' }}>
                  <Sparkles size={16} style={{ marginRight: '8px', color: '#666' }} />
                  {currentLanguage === 'en' ? 'Daily housekeeping (extra charge)' : 'Καθημερινή υπηρεσία καθαριότητας (επιπλέον χρέωση)'}
                </div>
              </div>

              {/* Languages */}
              <div style={{ 
                backgroundColor: '#fff3e0',
                padding: '25px',
                borderRadius: '12px'
              }}>
                <h4 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '15px', color: '#f57c00', display: 'flex', alignItems: 'center' }}>
                  <Languages size={20} style={{ marginRight: '10px' }} />
                  {currentLanguage === 'en' ? 'Communication Languages' : 'Γλώσσες επικοινωνίας'}
                </h4>
                <div style={{ display: 'grid', gap: '5px', fontSize: '14px' }}>
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <Languages size={16} style={{ marginRight: '8px', color: '#666' }} />
                    {currentLanguage === 'en' ? 'Arabic' : 'Αραβικά'}
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <Languages size={16} style={{ marginRight: '8px', color: '#666' }} />
                    {currentLanguage === 'en' ? 'Greek' : 'Ελληνικά'}
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <Languages size={16} style={{ marginRight: '8px', color: '#666' }} />
                    {currentLanguage === 'en' ? 'English' : 'Αγγλικά'}
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Property Rules Section - Full Width */}
        <div style={{
          width: '100vw',
          marginLeft: 'calc(-50vw + 50%)',
          backgroundColor: '#f8f9fa',
          padding: '60px 20px',
          borderTop: '1px solid #e0e0e0'
        }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <h2 style={{ fontSize: '32px', fontWeight: 'bold', marginBottom: '30px', textAlign: 'center', color: '#333' }}>
              {currentLanguage === 'en' ? 'Property Rules & Policies' : 'Κανονισμοί καταλύματος'}
            </h2>

            <div style={{ marginBottom: '30px', textAlign: 'center' }}>
              <p style={{ fontSize: '16px', color: '#007bff', fontWeight: '500' }}>
                {currentLanguage === 'en' 
                  ? 'VENUS Suite welcomes special requests - add them in the next step!' 
                  : 'Το VENUS Suite δέχεται ειδικά αιτήματα - προσθέστε τα στο επόμενο βήμα!'}
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '30px' }}>
              
              {/* Check-in/Check-out */}
              <div style={{ 
                backgroundColor: 'white',
                padding: '25px',
                borderRadius: '12px',
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
              }}>
                <h3 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '20px', color: '#007bff', display: 'flex', alignItems: 'center' }}>
                  <Calendar size={24} style={{ marginRight: '10px' }} />
                  {currentLanguage === 'en' ? 'Check Available Dates' : 'Έλεγχος διαθέσιμων ημερομηνιών'}
                </h3>
                
                <div style={{ marginBottom: '20px' }}>
                  <h4 style={{ fontSize: '16px', fontWeight: 'bold', color: '#333', marginBottom: '8px' }}>
                    {currentLanguage === 'en' ? 'Check-in' : 'Check-in'}
                  </h4>
                  <p style={{ fontSize: '14px', color: '#666', marginBottom: '5px' }}>
                    {currentLanguage === 'en' ? 'From 3:00 PM to 8:00 PM' : 'Από 3:00 μ.μ. έως 8:00 μ.μ.'}
                  </p>
                  <p style={{ fontSize: '13px', color: '#888', fontStyle: 'italic' }}>
                    {currentLanguage === 'en' 
                      ? 'You must inform the property in advance about your arrival time.' 
                      : 'Θα πρέπει να ενημερώσετε το κατάλυμα εκ των προτέρων τι ώρα θα φτάσετε.'}
                  </p>
                </div>

                <div style={{ marginBottom: '20px' }}>
                  <h4 style={{ fontSize: '16px', fontWeight: 'bold', color: '#333', marginBottom: '8px' }}>
                    {currentLanguage === 'en' ? 'Check-out' : 'Check-out'}
                  </h4>
                  <p style={{ fontSize: '14px', color: '#666' }}>
                    {currentLanguage === 'en' ? 'From 8:00 AM to 12:00 PM' : 'Από 8:00 π.μ. έως 12:00 μ.μ.'}
                  </p>
                </div>
              </div>

              {/* Cancellation/Prepayment */}
              <div style={{ 
                backgroundColor: 'white',
                padding: '25px',
                borderRadius: '12px',
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
              }}>
                <h3 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '20px', color: '#dc3545', display: 'flex', alignItems: 'center' }}>
                  <Receipt size={24} style={{ marginRight: '10px' }} />
                  {currentLanguage === 'en' ? 'Cancellation/Prepayment' : 'Ακύρωση/ προπληρωμή'}
                </h3>
                <p style={{ fontSize: '14px', color: '#666', lineHeight: '1.6' }}>
                  {currentLanguage === 'en' 
                    ? 'Cancellation and prepayment policies vary according to accommodation type. Please check the conditions that may apply to each unit when making your selection.'
                    : 'Οι πολιτικές ακύρωσης και προπληρωμής διαφέρουν ανάλογα με τον τύπο καταλύματος. Παρακαλούμε ελέγξτε τους όρους που μπορεί να ισχύουν για κάθε μονάδα όταν κάνετε την επιλογή σας.'}
                </p>
              </div>

              {/* Children and Beds */}
              <div style={{ 
                backgroundColor: 'white',
                padding: '25px',
                borderRadius: '12px',
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
              }}>
                <h3 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '20px', color: '#28a745', display: 'flex', alignItems: 'center' }}>
                  <Home size={24} style={{ marginRight: '10px' }} />
                  {currentLanguage === 'en' ? 'Children and Beds' : 'Παιδιά και κρεβάτια'}
                </h3>
                
                <div style={{ marginBottom: '15px' }}>
                  <h4 style={{ fontSize: '16px', fontWeight: 'bold', color: '#333', marginBottom: '8px' }}>
                    {currentLanguage === 'en' ? 'Children Policies' : 'Πολιτικές σχετικά με τα παιδιά'}
                  </h4>
                  <p style={{ fontSize: '14px', color: '#666' }}>
                    {currentLanguage === 'en' ? 'Children are welcome.' : 'Τα παιδιά είναι ευπρόσδεκτα.'}
                  </p>
                </div>

                <div style={{ marginBottom: '15px' }}>
                  <h4 style={{ fontSize: '16px', fontWeight: 'bold', color: '#333', marginBottom: '8px' }}>
                    {currentLanguage === 'en' ? 'Crib and Extra Bed Policies' : 'Πολιτικές για βρεφικές κούνιες και επιπλέον κρεβάτια'}
                  </h4>
                  <p style={{ fontSize: '14px', color: '#666' }}>
                    {currentLanguage === 'en' 
                      ? 'This property does not have cribs and extra beds available.'
                      : 'Αυτό το κατάλυμα δεν διαθέτει βρεφικές κούνιες και επιπλέον κρεβάτια.'}
                  </p>
                </div>

                <div>
                  <h4 style={{ fontSize: '16px', fontWeight: 'bold', color: '#333', marginBottom: '8px' }}>
                    {currentLanguage === 'en' ? 'No Age Restrictions' : 'Χωρίς περιορισμό ηλικίας'}
                  </h4>
                  <p style={{ fontSize: '14px', color: '#666' }}>
                    {currentLanguage === 'en' 
                      ? 'There are no age restrictions for check-in.'
                      : 'Δεν υπάρχουν περιορισμοί ηλικίας για το check-in'}
                  </p>
                </div>
              </div>

              {/* Property Policies */}
              <div style={{ 
                backgroundColor: 'white',
                padding: '25px',
                borderRadius: '12px',
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
              }}>
                <h3 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '20px', color: '#6f42c1', display: 'flex', alignItems: 'center' }}>
                  <Building size={24} style={{ marginRight: '10px' }} />
                  {currentLanguage === 'en' ? 'Property Policies' : 'Πολιτικές καταλύματος'}
                </h3>
                
                <div style={{ marginBottom: '15px' }}>
                  <h4 style={{ fontSize: '16px', fontWeight: 'bold', color: '#333', marginBottom: '8px', display: 'flex', alignItems: 'center' }}>
                    <Wind size={18} style={{ marginRight: '8px', color: '#dc3545' }} />
                    {currentLanguage === 'en' ? 'Smoking Policy' : 'Πολιτική καπνίσματος'}
                  </h4>
                  <p style={{ fontSize: '14px', color: '#666' }}>
                    {currentLanguage === 'en' ? 'Smoking is not allowed.' : 'Δεν επιτρέπεται το κάπνισμα.'}
                  </p>
                </div>

                <div style={{ marginBottom: '15px' }}>
                  <h4 style={{ fontSize: '16px', fontWeight: 'bold', color: '#333', marginBottom: '8px', display: 'flex', alignItems: 'center' }}>
                    <Sparkles size={18} style={{ marginRight: '8px', color: '#dc3545' }} />
                    {currentLanguage === 'en' ? 'Parties' : 'Πάρτι'}
                  </h4>
                  <p style={{ fontSize: '14px', color: '#666' }}>
                    {currentLanguage === 'en' 
                      ? 'Parties or events are not allowed.'
                      : 'Δεν επιτρέπονται τα πάρτι ή/και οι εκδηλώσεις'}
                  </p>
                </div>

                <div>
                  <h4 style={{ fontSize: '16px', fontWeight: 'bold', color: '#333', marginBottom: '8px', display: 'flex', alignItems: 'center' }}>
                    <Home size={18} style={{ marginRight: '8px', color: '#dc3545' }} />
                    {currentLanguage === 'en' ? 'Pets' : 'Κατοικίδια ζώα'}
                  </h4>
                  <p style={{ fontSize: '14px', color: '#666' }}>
                    {currentLanguage === 'en' ? 'Pets are not allowed.' : 'Τα κατοικίδια δεν επιτρέπονται.'}
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
