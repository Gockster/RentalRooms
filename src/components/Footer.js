import React from "react";

export default function Footer() {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        <div style={styles.content}>
          <div style={styles.section}>
            <h3 style={styles.sectionTitle}>RoomRental</h3>
            <p style={styles.description}>
              Your trusted partner in finding the perfect accommodation. 
              Comfortable stays, affordable prices.
            </p>
            <div style={styles.socialLinks}>
              <a href="#" style={styles.socialLink}>📘</a>
              <a href="#" style={styles.socialLink}>🐦</a>
              <a href="#" style={styles.socialLink}>📷</a>
            </div>
          </div>
          
          <div style={styles.section}>
            <h4 style={styles.sectionTitle}>Quick Links</h4>
            <ul style={styles.linksList}>
              <li><a href="#" style={styles.link}>Home</a></li>
              <li><a href="#" style={styles.link}>Rooms</a></li>
              <li><a href="#" style={styles.link}>About Us</a></li>
              <li><a href="#" style={styles.link}>Contact</a></li>
            </ul>
          </div>
          
          <div style={styles.section}>
            <h4 style={styles.sectionTitle}>Support</h4>
            <ul style={styles.linksList}>
              <li><a href="#" style={styles.link}>Help Center</a></li>
              <li><a href="#" style={styles.link}>Safety</a></li>
              <li><a href="#" style={styles.link}>Cancellation</a></li>
              <li><a href="#" style={styles.link}>Terms & Conditions</a></li>
            </ul>
          </div>
          
          <div style={styles.section}>
            <h4 style={styles.sectionTitle}>Contact Info</h4>
            <div style={styles.contactInfo}>
              <p style={styles.contactItem}>📧 info@roomrental.com</p>
              <p style={styles.contactItem}>📞 +1 (555) 123-4567</p>
              <p style={styles.contactItem}>📍 123 Main St, City</p>
            </div>
          </div>
        </div>
        
        <div style={styles.bottom}>
          <p style={styles.copyright}>
            © 2025 RoomRental. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

const styles = {
  footer: {
    backgroundColor: "#2c3e50",
    color: "#ecf0f1",
    marginTop: "60px"
  },
  container: {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "40px 20px 20px"
  },
  content: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "30px",
    marginBottom: "30px"
  },
  section: {
    display: "flex",
    flexDirection: "column"
  },
  sectionTitle: {
    fontSize: "1.2rem",
    fontWeight: "bold",
    marginBottom: "15px",
    color: "#3498db"
  },
  description: {
    fontSize: "14px",
    lineHeight: "1.6",
    marginBottom: "15px",
    opacity: "0.9"
  },
  socialLinks: {
    display: "flex",
    gap: "10px"
  },
  socialLink: {
    fontSize: "20px",
    textDecoration: "none",
    padding: "8px",
    borderRadius: "50%",
    backgroundColor: "#34495e",
    transition: "transform 0.3s ease"
  },
  linksList: {
    listStyle: "none",
    padding: "0",
    margin: "0"
  },
  link: {
    color: "#ecf0f1",
    textDecoration: "none",
    fontSize: "14px",
    lineHeight: "2",
    opacity: "0.8",
    transition: "opacity 0.3s ease"
  },
  contactInfo: {
    fontSize: "14px"
  },
  contactItem: {
    margin: "8px 0",
    opacity: "0.9"
  },
  bottom: {
    borderTop: "1px solid #34495e",
    paddingTop: "20px",
    textAlign: "center"
  },
  copyright: {
    fontSize: "14px",
    opacity: "0.7",
    margin: "0"
  }
};
