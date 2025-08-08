import React from "react";

export default function Navbar() {
  return (
    <nav style={styles.navbar}>
      <div style={styles.container}>
        <div style={styles.brand}>
          <h2 style={styles.brandText}>RoomRental</h2>
        </div>
        <ul style={styles.navLinks}>
          <li style={styles.navItem}>
            <a 
              href="#home" 
              style={styles.navLink}
              onMouseEnter={(e) => Object.assign(e.target.style, styles.navLinkHover)}
              onMouseLeave={(e) => Object.assign(e.target.style, styles.navLink)}
            >
              Home
            </a>
          </li>
          <li style={styles.navItem}>
            <a 
              href="#rooms" 
              style={styles.navLink}
              onMouseEnter={(e) => Object.assign(e.target.style, styles.navLinkHover)}
              onMouseLeave={(e) => Object.assign(e.target.style, styles.navLink)}
            >
              Rooms
            </a>
          </li>
          <li style={styles.navItem}>
            <a 
              href="#about" 
              style={styles.navLink}
              onMouseEnter={(e) => Object.assign(e.target.style, styles.navLinkHover)}
              onMouseLeave={(e) => Object.assign(e.target.style, styles.navLink)}
            >
              About
            </a>
          </li>
          <li style={styles.navItem}>
            <a 
              href="#contact" 
              style={styles.navLink}
              onMouseEnter={(e) => Object.assign(e.target.style, styles.navLinkHover)}
              onMouseLeave={(e) => Object.assign(e.target.style, styles.navLink)}
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

const styles = {
  navbar: {
    backgroundColor: "#2c3e50",
    padding: "0",
    position: "sticky",
    top: "0",
    zIndex: "1000",
    boxShadow: "0 2px 4px rgba(0,0,0,0.1)"
  },
  container: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "1rem 2rem",
    maxWidth: "1200px",
    margin: "0 auto"
  },
  brand: {
    display: "flex",
    alignItems: "center"
  },
  brandText: {
    color: "#ecf0f1",
    margin: "0",
    fontSize: "1.5rem",
    fontWeight: "bold"
  },
  navLinks: {
    display: "flex",
    listStyle: "none",
    margin: "0",
    padding: "0",
    gap: "2rem"
  },
  navItem: {
    margin: "0"
  },
  navLink: {
    color: "#ecf0f1",
    textDecoration: "none",
    fontSize: "1rem",
    fontWeight: "500",
    transition: "all 0.3s ease",
    cursor: "pointer",
    padding: "0.5rem 1rem",
    borderRadius: "4px",
    position: "relative"
  },
  navLinkHover: {
    backgroundColor: "#34495e",
    color: "#3498db"
  }
};
