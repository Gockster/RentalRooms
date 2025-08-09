import React, { useState } from "react";
import { useLanguage } from "../contexts/LanguageContext";
import { galleryImages } from "../data/RoomsImages";
import "../styles/main.css";

export default function RoomGallery() {
  const { t } = useLanguage();
  const [searchTerm, setSearchTerm] = useState("");
  const [priceFilter, setPriceFilter] = useState("all");
  const [hoveredCard, setHoveredCard] = useState(null);

  const filteredRooms = galleryImages.filter(room => {
    const matchesSearch = room.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         room.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    let matchesPrice = true;
    if (priceFilter === "low") {
      matchesPrice = parseInt(room.price.replace(/[^0-9]/g, '')) < 100;
    } else if (priceFilter === "mid") {
      matchesPrice = parseInt(room.price.replace(/[^0-9]/g, '')) >= 100 && 
                    parseInt(room.price.replace(/[^0-9]/g, '')) <= 150;
    } else if (priceFilter === "high") {
      matchesPrice = parseInt(room.price.replace(/[^0-9]/g, '')) > 150;
    }
    
    return matchesSearch && matchesPrice;
  }).slice(0, 2); // Limit to only 2 rooms

  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    const stars = [];
    
    for (let i = 0; i < fullStars; i++) {
      stars.push(<span key={i} className="room-gallery-star">★</span>);
    }
    if (hasHalfStar) {
      stars.push(<span key="half" className="room-gallery-star">★</span>);
    }
    return stars;
  };

  const translatePrice = (price) => {
    // Parse price format like "200€/night"
    const priceMatch = price.match(/^(.+?)\/(.+)$/);
    if (priceMatch) {
      const [, amount, period] = priceMatch;
      const translatedPeriod = t.gallery.priceLabels?.[period] || `/${period}`;
      return `${amount}${translatedPeriod}`;
    }
    return price;
  };

  return (
    <div className="room-gallery-container">
      <h1 className="room-gallery-heading">{t.gallery.heading}</h1>
      
      {/* Search and Filter Section */}
      <div className="room-gallery-filter-section">
        <div className="room-gallery-search-container">
          <input
            type="text"
            placeholder={t.gallery.searchPlaceholder}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="room-gallery-search-input"
          />
        </div>
        <div className="room-gallery-filter-container">
          <label className="room-gallery-filter-label">{t.gallery.priceFilter}</label>
          <select 
            value={priceFilter} 
            onChange={(e) => setPriceFilter(e.target.value)}
            className="room-gallery-filter-select"
          >
            <option value="all">{t.gallery.priceOptions.all}</option>
            <option value="low">{t.gallery.priceOptions.low}</option>
            <option value="mid">{t.gallery.priceOptions.mid}</option>
            <option value="high">{t.gallery.priceOptions.high}</option>
          </select>
        </div>
      </div>

      {/* Results count */}
      <div className="room-gallery-results-count">
        {t.gallery.resultsCount(filteredRooms.length)}
      </div>

      <div className="room-gallery-grid">
        {filteredRooms.map((room) => (
          <div 
            key={room.id} 
            className="room-gallery-card"
            onMouseEnter={() => setHoveredCard(room.id)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div className="room-gallery-image-container">
              <img src={room.image} alt={room.title} className="room-gallery-image" />
              <div className="room-gallery-price-tag">{translatePrice(room.price)}</div>
              <div className="room-gallery-availability-tag">{t.gallery.availabilityLabels?.[room.availability] || room.availability}</div>
            </div>
            <div className="room-gallery-card-content">
              <h2 className="room-gallery-title">{t.gallery.rooms[room.id - 1]?.title || room.title}</h2>
              <div className="room-gallery-rating">
                {renderStars(room.rating)}
                <span className="room-gallery-rating-text">{room.rating}</span>
              </div>
              <p className="room-gallery-description">{t.gallery.rooms[room.id - 1]?.description || room.description}</p>
              <div className="room-gallery-amenities">
                {room.amenities.map((amenity, index) => (
                  <span key={index} className="room-gallery-amenity-tag">
                    {t.gallery.amenityLabels?.[amenity] || amenity}
                  </span>
                ))}
              </div>
              <div className="room-gallery-button-container">
                <button className="room-gallery-view-button">{t.gallery.viewButton}</button>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {filteredRooms.length === 0 && (
        <div className="room-gallery-no-results">
          <h3>{t.gallery.noResults.title}</h3>
          <p>{t.gallery.noResults.subtitle}</p>
        </div>
      )}
    </div>
  );
}
