import React from "react";

export default function Hero() {
  return (
    <section style={styles.hero}>
      <div style={styles.overlay}>
        <div style={styles.content}>
          <h1 style={styles.title}>Find Your Perfect Stay</h1>
          <p style={styles.subtitle}>
            Discover comfortable and affordable rooms in prime locations. 
            Your home away from home awaits.
          </p>
          <div style={styles.searchBox}>
            <input 
              type="text" 
              placeholder="Where would you like to stay?" 
              style={styles.searchInput}
            />
            <button style={styles.searchButton}>
              Search Rooms
            </button>
          </div>
          <div style={styles.features}>
            <div style={styles.feature}>
              <span style={styles.featureIcon}>🏠</span>
              <span>Verified Properties</span>
            </div>
            <div style={styles.feature}>
              <span style={styles.featureIcon}>⭐</span>
              <span>Best Prices</span>
            </div>
            <div style={styles.feature}>
              <span style={styles.featureIcon}>🔒</span>
              <span>Secure Booking</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const styles = {
  hero: {
    height: "60vh",
    background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  overlay: {
    background: "rgba(0,0,0,0.4)",
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  content: {
    textAlign: "center",
    color: "#fff",
    padding: "0 20px",
    maxWidth: "600px"
  },
  title: {
    fontSize: "3rem",
    fontWeight: "bold",
    marginBottom: "1rem",
    textShadow: "2px 2px 4px rgba(0,0,0,0.3)"
  },
  subtitle: {
    fontSize: "1.2rem",
    marginBottom: "2rem",
    opacity: "0.9",
    lineHeight: "1.6"
  },
  searchBox: {
    display: "flex",
    gap: "0",
    marginBottom: "2rem",
    maxWidth: "500px",
    margin: "0 auto 2rem auto",
    borderRadius: "50px",
    overflow: "hidden",
    boxShadow: "0 8px 25px rgba(0,0,0,0.2)"
  },
  searchInput: {
    flex: "1",
    padding: "15px 20px",
    border: "none",
    fontSize: "16px",
    outline: "none"
  },
  searchButton: {
    backgroundColor: "#e74c3c",
    color: "#fff",
    border: "none",
    padding: "15px 25px",
    fontSize: "16px",
    fontWeight: "600",
    cursor: "pointer",
    transition: "background-color 0.3s ease"
  },
  features: {
    display: "flex",
    justifyContent: "center",
    gap: "30px",
    flexWrap: "wrap"
  },
  feature: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    fontSize: "14px",
    fontWeight: "500"
  },
  featureIcon: {
    fontSize: "20px"
  }
};
