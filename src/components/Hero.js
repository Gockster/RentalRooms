import React, { useState, useEffect } from "react";
import { useLanguage } from "../contexts/LanguageContext";
import { heroImages } from "../data/RoomsImages";

export default function Hero() {
  const { t } = useLanguage();
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroImages.length) % heroImages.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <section style={styles.hero}>
      {/* Image Carousel Background */}
      <div style={styles.carousel}>
        {heroImages.map((image, index) => (
          <div
            key={index}
            style={{
              ...styles.slide,
              opacity: index === currentSlide ? 1 : 0,
              backgroundImage: `url(${image.url})`
            }}
          />
        ))}
      </div>

      {/* Dark overlay */}
      <div style={styles.overlay}>
        {/* Navigation arrows */}
        <button 
          style={{...styles.navButton, ...styles.prevButton}} 
          onClick={prevSlide}
          aria-label="Previous image"
        >
          ‹
        </button>
        <button 
          style={{...styles.navButton, ...styles.nextButton}} 
          onClick={nextSlide}
          aria-label="Next image"
        >
          ›
        </button>

        {/* Content */}
        <div style={styles.content}>
          <div style={styles.textContent}>
            <h1 style={styles.title}>
              {t.hero.slides[currentSlide]?.title || heroImages[currentSlide].title}
            </h1>
            <p style={styles.subtitle}>
              {t.hero.slides[currentSlide]?.subtitle || heroImages[currentSlide].subtitle}
            </p>
            <p style={styles.description}>
              {t.hero.description}
            </p>
          </div>
          
          <div style={styles.searchSection}>
            <div style={styles.searchBox}>
              <input 
                type="text" 
                placeholder={t.hero.searchPlaceholder}
                style={styles.searchInput}
              />
              <button style={styles.searchButton}>
                {t.hero.searchButton}
              </button>
            </div>
            
            <div style={styles.features}>
              <div style={styles.feature}>
                <span style={styles.featureIcon}>🏠</span>
                <span>{t.hero.features[0]}</span>
              </div>
              <div style={styles.feature}>
                <span style={styles.featureIcon}>⭐</span>
                <span>{t.hero.features[1]}</span>
              </div>
              <div style={styles.feature}>
                <span style={styles.featureIcon}>🔒</span>
                <span>{t.hero.features[2]}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Carousel indicators */}
        <div style={styles.indicators}>
          {heroImages.map((_, index) => (
            <button
              key={index}
              style={{
                ...styles.indicator,
                ...(index === currentSlide ? styles.activeIndicator : {})
              }}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

const styles = {
  hero: {
    height: "80vh",
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden"
  },
  carousel: {
    position: "absolute",
    top: "0",
    left: "0",
    width: "100%",
    height: "100%",
    zIndex: "1"
  },
  slide: {
    position: "absolute",
    top: "0",
    left: "0",
    width: "100%",
    height: "100%",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    transition: "opacity 1s ease-in-out"
  },
  overlay: {
    position: "relative",
    background: "rgba(0,0,0,0.5)",
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    zIndex: "2"
  },
  navButton: {
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    backgroundColor: "rgba(255,255,255,0.2)",
    color: "#fff",
    border: "none",
    fontSize: "2rem",
    padding: "10px 15px",
    cursor: "pointer",
    borderRadius: "50%",
    transition: "all 0.3s ease",
    zIndex: "3",
    backdropFilter: "blur(10px)"
  },
  prevButton: {
    left: "20px"
  },
  nextButton: {
    right: "20px"
  },
  content: {
    textAlign: "center",
    color: "#fff",
    padding: "0 20px",
    maxWidth: "900px",
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "40px",
    alignItems: "center",
    width: "100%"
  },
  textContent: {
    textAlign: "left"
  },
  title: {
    fontSize: "3.5rem",
    fontWeight: "bold",
    marginBottom: "1rem",
    textShadow: "2px 2px 4px rgba(0,0,0,0.7)",
    lineHeight: "1.1"
  },
  subtitle: {
    fontSize: "1.4rem",
    marginBottom: "1rem",
    color: "#f39c12",
    fontWeight: "600",
    textShadow: "1px 1px 2px rgba(0,0,0,0.5)"
  },
  description: {
    fontSize: "1.1rem",
    lineHeight: "1.6",
    opacity: "0.9",
    textShadow: "1px 1px 2px rgba(0,0,0,0.5)"
  },
  searchSection: {
    display: "flex",
    flexDirection: "column",
    gap: "20px"
  },
  searchBox: {
    display: "flex",
    gap: "0",
    borderRadius: "50px",
    overflow: "hidden",
    boxShadow: "0 8px 25px rgba(0,0,0,0.3)",
    backgroundColor: "#fff"
  },
  searchInput: {
    flex: "1",
    padding: "15px 20px",
    border: "none",
    fontSize: "16px",
    outline: "none",
    backgroundColor: "transparent"
  },
  searchButton: {
    backgroundColor: "#e74c3c",
    color: "#fff",
    border: "none",
    padding: "15px 25px",
    fontSize: "16px",
    fontWeight: "600",
    cursor: "pointer",
    transition: "all 0.3s ease"
  },
  features: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    flexWrap: "wrap"
  },
  feature: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    fontSize: "14px",
    fontWeight: "500",
    backgroundColor: "rgba(255,255,255,0.1)",
    padding: "8px 12px",
    borderRadius: "20px",
    backdropFilter: "blur(10px)"
  },
  featureIcon: {
    fontSize: "18px"
  },
  indicators: {
    position: "absolute",
    bottom: "30px",
    left: "50%",
    transform: "translateX(-50%)",
    display: "flex",
    gap: "10px",
    zIndex: "3"
  },
  indicator: {
    width: "12px",
    height: "12px",
    borderRadius: "50%",
    border: "2px solid rgba(255,255,255,0.5)",
    backgroundColor: "transparent",
    cursor: "pointer",
    transition: "all 0.3s ease"
  },
  activeIndicator: {
    backgroundColor: "#fff",
    borderColor: "#fff"
  },
  // Responsive styles
  "@media (max-width: 768px)": {
    content: {
      gridTemplateColumns: "1fr",
      gap: "30px",
      textAlign: "center"
    },
    textContent: {
      textAlign: "center"
    },
    title: {
      fontSize: "2.5rem"
    },
    navButton: {
      fontSize: "1.5rem",
      padding: "8px 12px"
    }
  }
};
