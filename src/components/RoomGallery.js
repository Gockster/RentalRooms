import React, { useState } from "react";
import { useLanguage } from "../contexts/LanguageContext";
import { galleryImages } from "../data/RoomsImages";

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
  });

  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    const stars = [];
    
    for (let i = 0; i < fullStars; i++) {
      stars.push(<span key={i} style={styles.star}>★</span>);
    }
    if (hasHalfStar) {
      stars.push(<span key="half" style={styles.star}>★</span>);
    }
    return stars;
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>{t.gallery.heading}</h1>
      
      {/* Search and Filter Section */}
      <div style={styles.filterSection}>
        <div style={styles.searchContainer}>
          <input
            type="text"
            placeholder={t.gallery.searchPlaceholder}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={styles.searchInput}
          />
        </div>
        <div style={styles.filterContainer}>
          <label style={styles.filterLabel}>{t.gallery.priceFilter}</label>
          <select 
            value={priceFilter} 
            onChange={(e) => setPriceFilter(e.target.value)}
            style={styles.filterSelect}
          >
            <option value="all">{t.gallery.priceOptions.all}</option>
            <option value="low">{t.gallery.priceOptions.low}</option>
            <option value="mid">{t.gallery.priceOptions.mid}</option>
            <option value="high">{t.gallery.priceOptions.high}</option>
          </select>
        </div>
      </div>

      {/* Results count */}
      <div style={styles.resultsCount}>
        {t.gallery.resultsCount(filteredRooms.length)}
      </div>

      <div style={styles.grid}>
        {filteredRooms.map((room) => (
          <div 
            key={room.id} 
            style={{
              ...styles.card,
              ...(hoveredCard === room.id ? styles.cardHover : {})
            }}
            onMouseEnter={() => setHoveredCard(room.id)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div style={styles.imageContainer}>
              <img src={room.image} alt={room.title} style={styles.image} />
              <div style={styles.priceTag}>{room.price}</div>
              <div style={styles.availabilityTag}>{room.availability}</div>
            </div>
            <div style={styles.cardContent}>
              <h2 style={styles.title}>{t.gallery.rooms[room.id - 1]?.title || room.title}</h2>
              <div style={styles.rating}>
                {renderStars(room.rating)}
                <span style={styles.ratingText}>{room.rating}</span>
              </div>
              <p style={styles.description}>{t.gallery.rooms[room.id - 1]?.description || room.description}</p>
              <div style={styles.amenities}>
                {room.amenities.map((amenity, index) => (
                  <span key={index} style={styles.amenityTag}>
                    {amenity}
                  </span>
                ))}
              </div>
              <div style={styles.buttonContainer}>
                <button style={styles.viewButton}>{t.gallery.viewButton}</button>
                <button style={styles.bookButton}>{t.gallery.bookButton}</button>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {filteredRooms.length === 0 && (
        <div style={styles.noResults}>
          <h3>{t.gallery.noResults.title}</h3>
          <p>{t.gallery.noResults.subtitle}</p>
        </div>
      )}
    </div>
  );
}

const styles = {
  container: {
    padding: "20px",
    fontFamily: "sans-serif",
    backgroundColor: "#f8f9fa",
    minHeight: "100vh"
  },
  heading: {
    textAlign: "center",
    marginBottom: "30px",
    color: "#2c3e50",
    fontSize: "2.5rem",
    fontWeight: "bold"
  },
  filterSection: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "20px",
    marginBottom: "30px",
    flexWrap: "wrap",
    backgroundColor: "#fff",
    padding: "20px",
    borderRadius: "12px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)"
  },
  searchContainer: {
    flex: "1",
    maxWidth: "400px"
  },
  searchInput: {
    width: "100%",
    padding: "12px 16px",
    borderRadius: "8px",
    border: "2px solid #e1e8ed",
    fontSize: "16px",
    outline: "none",
    transition: "border-color 0.3s ease",
    ":focus": {
      borderColor: "#3498db"
    }
  },
  filterContainer: {
    display: "flex",
    alignItems: "center",
    gap: "10px"
  },
  filterLabel: {
    fontWeight: "600",
    color: "#2c3e50"
  },
  filterSelect: {
    padding: "10px 12px",
    borderRadius: "6px",
    border: "2px solid #e1e8ed",
    fontSize: "14px",
    outline: "none"
  },
  resultsCount: {
    textAlign: "center",
    marginBottom: "20px",
    color: "#7f8c8d",
    fontSize: "14px"
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
    gap: "25px",
    maxWidth: "1200px",
    margin: "0 auto"
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: "16px",
    overflow: "hidden",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
    transition: "all 0.3s ease",
    cursor: "pointer"
  },
  cardHover: {
    transform: "translateY(-8px)",
    boxShadow: "0 8px 25px rgba(0,0,0,0.15)"
  },
  imageContainer: {
    position: "relative",
    overflow: "hidden"
  },
  image: {
    width: "100%",
    height: "220px",
    objectFit: "cover",
    transition: "transform 0.3s ease"
  },
  priceTag: {
    position: "absolute",
    top: "15px",
    left: "15px",
    backgroundColor: "#e74c3c",
    color: "#fff",
    padding: "8px 12px",
    borderRadius: "20px",
    fontSize: "14px",
    fontWeight: "bold"
  },
  availabilityTag: {
    position: "absolute",
    top: "15px",
    right: "15px",
    backgroundColor: "#27ae60",
    color: "#fff",
    padding: "6px 10px",
    borderRadius: "12px",
    fontSize: "12px",
    fontWeight: "500"
  },
  cardContent: {
    padding: "20px"
  },
  title: {
    margin: "0 0 8px 0",
    color: "#2c3e50",
    fontSize: "1.3rem",
    fontWeight: "600"
  },
  rating: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    marginBottom: "12px"
  },
  star: {
    color: "#f39c12",
    fontSize: "16px"
  },
  ratingText: {
    color: "#7f8c8d",
    fontSize: "14px",
    fontWeight: "500"
  },
  description: {
    color: "#5d6d7e",
    fontSize: "14px",
    lineHeight: "1.5",
    marginBottom: "15px"
  },
  amenities: {
    display: "flex",
    flexWrap: "wrap",
    gap: "8px",
    marginBottom: "20px"
  },
  amenityTag: {
    backgroundColor: "#ecf0f1",
    color: "#2c3e50",
    padding: "4px 8px",
    borderRadius: "12px",
    fontSize: "12px",
    fontWeight: "500"
  },
  buttonContainer: {
    display: "flex",
    gap: "10px"
  },
  viewButton: {
    flex: "1",
    padding: "10px",
    backgroundColor: "transparent",
    color: "#3498db",
    border: "2px solid #3498db",
    borderRadius: "8px",
    fontSize: "14px",
    fontWeight: "600",
    cursor: "pointer",
    transition: "all 0.3s ease"
  },
  bookButton: {
    flex: "1",
    padding: "10px",
    backgroundColor: "#3498db",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    fontSize: "14px",
    fontWeight: "600",
    cursor: "pointer",
    transition: "all 0.3s ease"
  },
  noResults: {
    textAlign: "center",
    padding: "60px 20px",
    color: "#7f8c8d"
  }
};
