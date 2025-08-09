import React from "react";
import { useLanguage } from "../contexts/LanguageContext";
import "../styles/main.css";

export default function Footer() {
  const { t } = useLanguage();
  
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-center-section">
            <div className="footer-section">
              <h3 className="footer-section-title">{t.footer.brandName}</h3>
              <p className="footer-description">
                {t.footer.description}
              </p>
              <div className="social-links">
                <a href="#" className="social-link">📘</a>
                <a href="#" className="social-link">📷</a>
              </div>
            </div>
            
            <div className="footer-section">
              <h4 className="footer-section-title">{t.footer.contactInfo.title}</h4>
              <div className="contact-info">
                <p className="contact-item">📧 {t.footer.contactInfo.email}</p>
                <p className="contact-item">📞 {t.footer.contactInfo.phone}</p>
                <p className="contact-item">📍 {t.footer.contactInfo.address}</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p className="footer-copyright">
            {t.footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}
