import React, { useState } from "react";
import { useLanguage } from "../contexts/LanguageContext";
import { ariesSuiteImages } from "../data/RoomsImages";
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
  Bed,
  MapPin,
  Camera,
  Coffee,
  Waves,
  Plane,
  Clock,
  Shield,
  CreditCard,
  Phone
} from "lucide-react";

export default function AriesSuite() {
  const { t, currentLanguage } = useLanguage();
  const images = ariesSuiteImages;
  const [mainImage, setMainImage] = useState(images[0]);
  const [enlargedImage, setEnlargedImage] = useState(null);
  const [showAllImages, setShowAllImages] = useState(false);
  const initialImageCount = 4; // Show first 4 images initially
  
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
                {currentLanguage === 'en' ? 'Aries Suite' : 'Aries Suite'}
              </span>
            </div>
            <div className="room-title-section">
              <h1 className="room-title">
                {t.gallery?.rooms?.find(room => room.id === 'aries-suite')?.title || 'Aries Suite'}
              </h1>
              <p className="room-subtitle">
                <a 
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent('Καλλιάρχη 9, Μύκονος Χώρα, 846 00, Ελλάδα')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: '#007bff', textDecoration: 'none' }}
                >
                  Καλλιάρχη 9, Μύκονος Χώρα, 846 00, Ελλάδα
                </a>
              </p>
            </div>
          </div>

          {/* Image Gallery Section */}
          <div className="room-gallery-section">
            <div className="main-image-container">
              <img
                src={mainImage}
                alt="Aries Suite"
                className="main-room-image"
                onClick={() => setEnlargedImage(mainImage)}
              />
            </div>
            <div className="thumbnail-images">
              {displayedImages.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Aries Suite ${index + 1}`}
                  className={`thumbnail-image ${image === mainImage ? 'active' : ''}`}
                  onClick={() => setMainImage(image)}
                />
              ))}
              {images.length > initialImageCount && (
                <button
                  className="show-more-images-btn"
                  onClick={() => setShowAllImages(!showAllImages)}
                >
                  {showAllImages 
                    ? `${currentLanguage === 'en' ? 'Show Less' : 'Λιγότερες'}`
                    : `+${images.length - initialImageCount} ${currentLanguage === 'en' ? 'more' : 'ακόμα'}`
                  }
                </button>
              )}
            </div>
          </div>

          {/* Enlarged Image Modal */}
          {enlargedImage && (
            <div className="image-modal" onClick={() => setEnlargedImage(null)}>
              <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <img src={enlargedImage} alt="Enlarged" className="enlarged-image" />
                <button className="modal-close" onClick={() => setEnlargedImage(null)}>
                  ×
                </button>
                <button className="modal-prev" onClick={goToPrev}>
                  ‹
                </button>
                <button className="modal-next" onClick={goToNext}>
                  ›
                </button>
              </div>
            </div>
          )}

          {/* About This Property Section */}
          <div className="room-details-section">
            <h2 className="section-title">
              <Home size={24} style={{ marginRight: '10px' }} />
              {currentLanguage === 'en' ? 'About This Property' : 'Σχετικά με το Ακίνητο'}
            </h2>
            <div className="room-info-grid">
              <div className="room-info-card">
                <div className="room-description">
                  <p>
                    {currentLanguage === 'en' 
                      ? 'Welcome to Aries Suite, an elegant accommodation in the heart of Mykonos. This beautifully designed suite offers the perfect blend of traditional Cycladic architecture and modern amenities, providing guests with an unforgettable stay experience.'
                      : 'Καλώς ήρθατε στη Σουίτα Κριού, ένα κομψό κατάλυμα στην καρδιά της Μυκόνου. Αυτή η όμορφα σχεδιασμένη σουίτα προσφέρει τον τέλειο συνδυασμό παραδοσιακής κυκλαδίτικης αρχιτεκτονικής και σύγχρονων ανέσεων, παρέχοντας στους επισκέπτες μια αξέχαστη εμπειρία διαμονής.'
                    }
                  </p>
                  <p>
                    {currentLanguage === 'en' 
                      ? 'Located just minutes away from the iconic windmills and Little Venice, our suite provides easy access to Mykonos\' most famous attractions while offering a peaceful retreat from the bustling town center.'
                      : 'Βρίσκεται μόλις λίγα λεπτά μακριά από τους εμβληματικούς ανεμόμυλους και τη Μικρή Βενετία, η σουίτα μας παρέχει εύκολη πρόσβαση στα πιο διάσημα αξιοθέατα της Μυκόνου ενώ προσφέρει ένα ήσυχο καταφύγιο από το πολυσύχναστο κέντρο της πόλης.'
                    }
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Suite Specifications Section */}
          <div className="room-specifications-section">
            <h2 className="section-title">
              <Ruler size={24} style={{ marginRight: '10px' }} />
              {currentLanguage === 'en' ? 'Suite Specifications' : 'Προδιαγραφές Σουίτας'}
            </h2>
            <div className="specifications-grid">
              <div className="spec-card">
                <div className="spec-icon">
                  <Users size={32} />
                </div>
                <h4>{currentLanguage === 'en' ? 'Guests' : 'Επισκέπτες'}</h4>
                <p>{currentLanguage === 'en' ? 'Up to 4 guests' : 'Έως 4 επισκέπτες'}</p>
              </div>
              <div className="spec-card">
                <div className="spec-icon">
                  <Bed size={32} />
                </div>
                <h4>{currentLanguage === 'en' ? 'Bedrooms' : 'Υπνοδωμάτια'}</h4>
                <p>{currentLanguage === 'en' ? '2 bedrooms' : '2 υπνοδωμάτια'}</p>
              </div>
              <div className="spec-card">
                <div className="spec-icon">
                  <Bath size={32} />
                </div>
                <h4>{currentLanguage === 'en' ? 'Bathrooms' : 'Μπάνια'}</h4>
                <p>{currentLanguage === 'en' ? '2 bathrooms' : '2 μπάνια'}</p>
              </div>
              <div className="spec-card">
                <div className="spec-icon">
                  <Building size={32} />
                </div>
                <h4>{currentLanguage === 'en' ? 'Area' : 'Εμβαδόν'}</h4>
                <p>85 m²</p>
              </div>
            </div>
          </div>

          {/* Amenities Section */}
          <div className="amenities-section">
            <h3 className="section-title">
              <Sparkles size={24} style={{ marginRight: '10px' }} />
              {currentLanguage === 'en' ? 'Amenities' : 'Ανέσεις'}
            </h3>
            <div className="amenities-grid">
              <div className="amenity-item">
                <Wifi size={20} />
                <span>{currentLanguage === 'en' ? 'Free Wi-Fi' : 'Δωρεάν Wi-Fi'}</span>
              </div>
              <div className="amenity-item">
                <Snowflake size={20} />
                <span>{currentLanguage === 'en' ? 'Air Conditioning' : 'Κλιματισμός'}</span>
              </div>
              <div className="amenity-item">
                <ShowerHead size={20} />
                <span>{currentLanguage === 'en' ? 'Private Bathroom' : 'Ιδιωτικό Μπάνιο'}</span>
              </div>
              <div className="amenity-item">
                <Bell size={20} />
                <span>{currentLanguage === 'en' ? '24/7 Reception' : '24ωρη Υποδοχή'}</span>
              </div>
            </div>
          </div>

          {/* Pricing Section */}
          <div className="pricing-section">
            <h2 className="section-title">
              <CreditCard size={24} style={{ marginRight: '10px' }} />
              {currentLanguage === 'en' ? 'Pricing & Availability' : 'Τιμές & Διαθεσιμότητα'}
            </h2>
            <div className="pricing-card">
              <div className="price-display">
                <span className="price-amount">€120</span>
                <span className="price-period">{currentLanguage === 'en' ? '/night' : '/βράδυ'}</span>
              </div>
              <p className="price-note">
                {currentLanguage === 'en' 
                  ? 'Prices may vary depending on season and availability' 
                  : 'Οι τιμές μπορεί να διαφέρουν ανάλογα με την εποχή και τη διαθεσιμότητα'}
              </p>
            </div>
          </div>

          {/* Contact Section */}
          <div className="contact-section">
            <h2 className="section-title">
              <Phone size={24} style={{ marginRight: '10px' }} />
              {currentLanguage === 'en' ? 'Book Your Stay' : 'Κλείστε τη Διαμονή σας'}
            </h2>
            <div className="contact-card">
              <div className="contact-info">
                <div className="phone-number">
                  <Phone size={20} style={{ marginRight: '8px' }} />
                  <span>+30 6955217820</span>
                </div>
                <p className="contact-description">
                  {currentLanguage === 'en' 
                    ? 'Call us directly to book your stay or for any inquiries. We speak Greek, English, and Arabic.'
                    : 'Καλέστε μας απευθείας για να κλείσετε τη διαμονή σας ή για οποιαδήποτε ερώτηση. Μιλάμε Ελληνικά, Αγγλικά και Αραβικά.'}
                </p>
                <div className="availability-info">
                  <Clock size={16} style={{ marginRight: '5px' }} />
                  <span>{currentLanguage === 'en' ? 'Available 24/7' : 'Διαθέσιμο 24/7'}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Property Area Hero Section - Full Width */}
        <div style={{
          width: '100vw',
          marginLeft: 'calc(-50vw + 50%)',
          backgroundColor: '#f5f5f5',
          padding: '60px 20px',
          marginTop: '40px',
          marginBottom: '40px'
        }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <h2 style={{ fontSize: '32px', fontWeight: 'bold', marginBottom: '20px', textAlign: 'center', color: '#333' }}>
              <MapPin size={28} style={{ marginRight: '12px', verticalAlign: 'middle', color: '#28a745' }} />
              {currentLanguage === 'en' ? 'Property Area' : 'Περιοχή Καταλύματος'}
            </h2>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '25px', marginTop: '30px' }}>
              <div style={{ 
                backgroundColor: 'white',
                padding: '25px',
                borderRadius: '12px',
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                border: '1px solid #e0e0e0'
              }}>
                <h3 style={{ 
                  fontSize: '24px', 
                  fontWeight: 'bold', 
                  marginBottom: '20px', 
                  color: '#333',
                  display: 'flex',
                  alignItems: 'center'
                }}>
                  <Camera size={28} style={{ marginRight: '10px', color: '#007bff' }} />
                  {currentLanguage === 'en' ? 'Attractions' : 'Αξιοθέατα'}
                </h3>
                <div style={{ fontSize: '16px', lineHeight: '1.8' }}>
                  <p style={{ marginBottom: '12px' }}>
                    <strong style={{ color: '#007bff', fontSize: '18px' }}>
                      {currentLanguage === 'en' ? 'Mykonos Windmills:' : 'Ανεμόμυλοι Μυκόνου:'}
                    </strong> 
                    <span style={{ marginLeft: '8px', color: '#007bff', fontWeight: 'bold' }}>5 min walk</span>
                  </p>
                  <p style={{ marginBottom: '12px' }}>
                    <strong style={{ color: '#007bff', fontSize: '18px' }}>
                      {currentLanguage === 'en' ? 'Little Venice:' : 'Μικρή Βενετία:'}
                    </strong> 
                    <span style={{ marginLeft: '8px', color: '#007bff', fontWeight: 'bold' }}>6 min walk</span>
                  </p>
                  <p style={{ marginBottom: '12px' }}>
                    <strong style={{ color: '#007bff', fontSize: '18px' }}>
                      {currentLanguage === 'en' ? 'Mykonos Old Port:' : 'Παλιό Λιμάνι Μυκόνου:'}
                    </strong> 
                    <span style={{ marginLeft: '8px', color: '#007bff', fontWeight: 'bold' }}>7 min walk</span>
                  </p>
                  <p style={{ marginBottom: '0' }}>
                    <strong style={{ color: '#007bff', fontSize: '18px' }}>
                      {currentLanguage === 'en' ? 'Matogianni Street:' : 'Οδός Ματογιάννη:'}
                    </strong> 
                    <span style={{ marginLeft: '8px', color: '#007bff', fontWeight: 'bold' }}>3 min walk</span>
                  </p>
                </div>
              </div>

              <div style={{ 
                backgroundColor: 'white',
                padding: '25px',
                borderRadius: '12px',
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                border: '1px solid #e0e0e0'
              }}>
                <h3 style={{ 
                  fontSize: '24px', 
                  fontWeight: 'bold', 
                  marginBottom: '20px', 
                  color: '#333',
                  display: 'flex',
                  alignItems: 'center'
                }}>
                  <Coffee size={28} style={{ marginRight: '10px', color: '#28a745' }} />
                  {currentLanguage === 'en' ? 'Restaurants' : 'Εστιατόρια'}
                </h3>
                <div style={{ fontSize: '16px', lineHeight: '1.8' }}>
                  <p style={{ marginBottom: '12px' }}>
                    <strong style={{ color: '#28a745', fontSize: '18px' }}>Kastro's:</strong> 
                    <span style={{ marginLeft: '8px', color: '#28a745', fontWeight: 'bold' }}>5 min walk</span>
                  </p>
                  <p style={{ marginBottom: '12px' }}>
                    <strong style={{ color: '#28a745', fontSize: '18px' }}>Caprice Bar:</strong> 
                    <span style={{ marginLeft: '8px', color: '#28a745', fontWeight: 'bold' }}>4 min walk</span>
                  </p>
                  <p style={{ marginBottom: '12px' }}>
                    <strong style={{ color: '#28a745', fontSize: '18px' }}>Scarpa Bar:</strong> 
                    <span style={{ marginLeft: '8px', color: '#28a745', fontWeight: 'bold' }}>6 min walk</span>
                  </p>
                  <p style={{ marginBottom: '0' }}>
                    <strong style={{ color: '#28a745', fontSize: '18px' }}>Sea Satin Market:</strong> 
                    <span style={{ marginLeft: '8px', color: '#28a745', fontWeight: 'bold' }}>2 min walk</span>
                  </p>
                </div>
              </div>

              <div style={{ 
                backgroundColor: 'white',
                padding: '25px',
                borderRadius: '12px',
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                border: '1px solid #e0e0e0'
              }}>
                <h3 style={{ 
                  fontSize: '24px', 
                  fontWeight: 'bold', 
                  marginBottom: '20px', 
                  color: '#333',
                  display: 'flex',
                  alignItems: 'center'
                }}>
                  <Waves size={28} style={{ marginRight: '10px', color: '#17a2b8' }} />
                  {currentLanguage === 'en' ? 'Beaches & Transportation' : 'Παραλίες & Μεταφορά'}
                </h3>
                <div style={{ fontSize: '16px', lineHeight: '1.8' }}>
                  <p style={{ marginBottom: '12px' }}>
                    <strong style={{ color: '#17a2b8', fontSize: '18px' }}>
                      {currentLanguage === 'en' ? 'Megali Ammos Beach:' : 'Παραλία Μεγάλη Άμμος:'}
                    </strong> 
                    <span style={{ marginLeft: '8px', color: '#17a2b8', fontWeight: 'bold' }}>10 min walk</span>
                  </p>
                  <p style={{ marginBottom: '12px' }}>
                    <strong style={{ color: '#17a2b8', fontSize: '18px' }}>
                      {currentLanguage === 'en' ? 'Ornos Beach:' : 'Παραλία Όρνος:'}
                    </strong> 
                    <span style={{ marginLeft: '8px', color: '#17a2b8', fontWeight: 'bold' }}>15 min by bus</span>
                  </p>
                  <p style={{ marginBottom: '0' }}>
                    <strong style={{ color: '#dc3545', fontSize: '18px' }}>
                      <Plane size={18} style={{ marginRight: '5px', verticalAlign: 'middle' }} />
                      {currentLanguage === 'en' ? 'Mykonos Airport:' : 'Αεροδρόμιο Μυκόνου:'}
                    </strong> 
                    <span style={{ marginLeft: '8px', color: '#dc3545', fontWeight: 'bold' }}>15 min by car</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Information Hero Section - Full Width */}
        <div style={{
          width: '100vw',
          marginLeft: 'calc(-50vw + 50%)',
          backgroundColor: '#e3f2fd',
          padding: '60px 20px',
          marginBottom: '40px'
        }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <h2 style={{ fontSize: '32px', fontWeight: 'bold', marginBottom: '20px', textAlign: 'center', color: '#1976d2' }}>
              <Shield size={28} style={{ marginRight: '12px', verticalAlign: 'middle', color: '#1976d2' }} />
              {currentLanguage === 'en' ? 'Additional Information' : 'Επιπλέον Πληροφορίες'}
            </h2>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '25px', marginTop: '30px' }}>
              <div style={{ 
                backgroundColor: 'white',
                padding: '25px',
                borderRadius: '12px',
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                border: '1px solid #e3f2fd'
              }}>
                <h4 style={{ 
                  fontSize: '24px', 
                  fontWeight: 'bold', 
                  marginBottom: '15px', 
                  color: '#1976d2',
                  display: 'flex',
                  alignItems: 'center'
                }}>
                  <CreditCard size={28} style={{ marginRight: '10px', color: '#1976d2' }} />
                  {currentLanguage === 'en' ? 'Payment & Policies' : 'Πληρωμή & Πολιτικές'}
                </h4>
                <div style={{ fontSize: '16px', lineHeight: '1.8' }}>
                  <p style={{ marginBottom: '12px' }}>
                    <strong style={{ color: '#1976d2' }}>{currentLanguage === 'en' ? 'Check-in:' : 'Άφιξη:'}</strong> 
                    <span style={{ marginLeft: '8px' }}>{currentLanguage === 'en' ? 'After 3:00 PM' : 'Μετά τις 3:00 μμ'}</span>
                  </p>
                  <p style={{ marginBottom: '12px' }}>
                    <strong style={{ color: '#1976d2' }}>{currentLanguage === 'en' ? 'Check-out:' : 'Αναχώρηση:'}</strong> 
                    <span style={{ marginLeft: '8px' }}>{currentLanguage === 'en' ? 'Before 11:00 AM' : 'Πριν τις 11:00 πμ'}</span>
                  </p>
                  <p style={{ marginBottom: '12px' }}>
                    <strong style={{ color: '#1976d2' }}>{currentLanguage === 'en' ? 'Payment:' : 'Πληρωμή:'}</strong> 
                    <span style={{ marginLeft: '8px' }}>{currentLanguage === 'en' ? 'Cash, Card, Bank Transfer' : 'Μετρητά, Κάρτα, Τραπεζική Μεταφορά'}</span>
                  </p>
                  <p style={{ marginBottom: '0' }}>
                    <strong style={{ color: '#1976d2' }}>{currentLanguage === 'en' ? 'Cancellation:' : 'Ακύρωση:'}</strong> 
                    <span style={{ marginLeft: '8px' }}>{currentLanguage === 'en' ? 'Flexible policy available' : 'Ευέλικτη πολιτική διαθέσιμη'}</span>
                  </p>
                </div>
              </div>

              <div style={{ 
                backgroundColor: 'white',
                padding: '25px',
                borderRadius: '12px',
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                border: '1px solid #e3f2fd'
              }}>
                <h4 style={{ 
                  fontSize: '24px', 
                  fontWeight: 'bold', 
                  marginBottom: '15px', 
                  color: '#1976d2',
                  display: 'flex',
                  alignItems: 'center'
                }}>
                  <Phone size={28} style={{ marginRight: '10px', color: '#1976d2' }} />
                  {currentLanguage === 'en' ? 'Contact Information' : 'Στοιχεία Επικοινωνίας'}
                </h4>
                <div style={{ fontSize: '16px', lineHeight: '1.8' }}>
                  <p style={{ marginBottom: '12px' }}>
                    <strong style={{ color: '#1976d2' }}>{currentLanguage === 'en' ? 'Phone:' : 'Τηλέφωνο:'}</strong> 
                    <span style={{ marginLeft: '8px', fontSize: '18px', fontWeight: 'bold', color: '#007bff' }}>+30 6955217820</span>
                  </p>
                  <p style={{ marginBottom: '12px' }}>
                    <strong style={{ color: '#1976d2' }}>{currentLanguage === 'en' ? 'Available:' : 'Διαθέσιμο:'}</strong> 
                    <span style={{ marginLeft: '8px' }}>{currentLanguage === 'en' ? '24/7 for bookings and inquiries' : '24/7 για κρατήσεις και πληροφορίες'}</span>
                  </p>
                  <p style={{ marginBottom: '0' }}>
                    <strong style={{ color: '#1976d2' }}>{currentLanguage === 'en' ? 'Languages:' : 'Γλώσσες:'}</strong> 
                    <span style={{ marginLeft: '8px' }}>{currentLanguage === 'en' ? 'Greek, English, Arabic' : 'Ελληνικά, Αγγλικά, Αραβικά'}</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Final Information Section */}
        <div className="room-detail-container">
          <div className="final-info-section" style={{ 
            backgroundColor: '#f8f9fa', 
            padding: '40px 20px', 
            marginTop: '40px',
            borderRadius: '8px',
            textAlign: 'center'
          }}>
            <div style={{ maxWidth: '800px', margin: '0 auto' }}>
              <h3 style={{ fontSize: '24px', marginBottom: '20px', color: '#333' }}>
                {currentLanguage === 'en' ? 'Ready to Book Your Stay?' : 'Έτοιμοι να Κλείσετε τη Διαμονή σας;'}
              </h3>
              
              <p style={{ fontSize: '16px', lineHeight: '1.6', marginBottom: '25px', color: '#666' }}>
                {currentLanguage === 'en' 
                  ? 'Experience the luxury and comfort of Aries Suite in the heart of Mykonos. Our dedicated team is ready to assist you 24/7 to make your stay unforgettable.' 
                  : 'Ζήστε την πολυτέλεια και την άνεση του Aries Suite στην καρδιά της Μυκόνου. Η αφοσιωμένη ομάδα μας είναι έτοιμη να σας εξυπηρετήσει 24/7 για να κάνει τη διαμονή σας αξέχαστη.'}
              </p>

              <div style={{ 
                display: 'flex', 
                justifyContent: 'center', 
                gap: '20px', 
                flexWrap: 'wrap',
                marginBottom: '25px'
              }}>
                <div style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  backgroundColor: 'white',
                  padding: '15px 20px',
                  borderRadius: '8px',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
                }}>
                  <Phone size={20} style={{ marginRight: '10px', color: '#007bff' }} />
                  <div style={{ textAlign: 'left' }}>
                    <strong style={{ display: 'block', fontSize: '14px' }}>
                      {currentLanguage === 'en' ? 'Call Now' : 'Καλέστε Τώρα'}
                    </strong>
                    <span style={{ fontSize: '16px', color: '#007bff', fontWeight: 'bold' }}>
                      +30 6955217820
                    </span>
                  </div>
                </div>

                <div style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  backgroundColor: 'white',
                  padding: '15px 20px',
                  borderRadius: '8px',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
                }}>
                  <Clock size={20} style={{ marginRight: '10px', color: '#28a745' }} />
                  <div style={{ textAlign: 'left' }}>
                    <strong style={{ display: 'block', fontSize: '14px' }}>
                      {currentLanguage === 'en' ? 'Available' : 'Διαθέσιμο'}
                    </strong>
                    <span style={{ fontSize: '14px', color: '#28a745' }}>
                      {currentLanguage === 'en' ? '24/7 Support' : '24/7 Υποστήριξη'}
                    </span>
                  </div>
                </div>

                <div style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  backgroundColor: 'white',
                  padding: '15px 20px',
                  borderRadius: '8px',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
                }}>
                  <MapPin size={20} style={{ marginRight: '10px', color: '#dc3545' }} />
                  <div style={{ textAlign: 'left' }}>
                    <strong style={{ display: 'block', fontSize: '14px' }}>
                      {currentLanguage === 'en' ? 'Location' : 'Τοποθεσία'}
                    </strong>
                    <span style={{ fontSize: '14px', color: '#dc3545' }}>
                      {currentLanguage === 'en' ? 'Mykonos Town' : 'Μύκονος Χώρα'}
                    </span>
                  </div>
                </div>
              </div>

              <button 
                className="btn btn-primary btn-large"
                style={{ 
                  fontSize: '18px', 
                  padding: '15px 40px',
                  borderRadius: '8px',
                  boxShadow: '0 4px 12px rgba(0,123,255,0.3)',
                  border: 'none',
                  cursor: 'pointer',
                  backgroundColor: '#007bff',
                  color: 'white'
                }}
                onClick={() => window.open('tel:+306955217820')}
              >
                {currentLanguage === 'en' 
                  ? '📞 Book Now - Call +30 6955217820' 
                  : '📞 Κλείστε Τώρα - Καλέστε +30 6955217820'}
              </button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
