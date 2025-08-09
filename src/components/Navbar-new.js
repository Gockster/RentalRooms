import React, { useState } from "react";
import { useLanguage } from "../contexts/LanguageContext";
import "../styles/main.css";

export default function Navbar() {
  const { currentLanguage, switchLanguage, t } = useLanguage();
  const [showLangDropdown, setShowLangDropdown] = useState(false);

  const selectLanguage = (lang) => {
    switchLanguage(lang);
    setShowLangDropdown(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-brand">
          <h2 className="navbar-brand-text">
            {t.navbar.brandName}
          </h2>
        </div>
        <ul className="navbar-links">
          <li className="navbar-item">
            <div className="language-selector">
              <button
                onClick={() => setShowLangDropdown(!showLangDropdown)}
                className="lang-button"
                title={t.navbar.selectLang}
              >
                {t.navbar.language}
                <span className="dropdown-arrow">
                  {showLangDropdown ? '▲' : '▼'}
                </span>
              </button>
              {showLangDropdown && (
                <div className="dropdown">
                  <button
                    onClick={() => selectLanguage('en')}
                    className={`dropdown-item ${currentLanguage === 'en' ? 'active-language' : ''}`}
                  >
                    🇺🇸 English
                  </button>
                  <button
                    onClick={() => selectLanguage('gr')}
                    className={`dropdown-item ${currentLanguage === 'gr' ? 'active-language' : ''}`}
                  >
                    🇬🇷 Ελληνικά
                  </button>
                </div>
              )}
            </div>
          </li>
          <li className="navbar-item">
            <a 
              href="tel:+30123456789" 
              className="nav-link"
              title={t.navbar.callUs}
            >
              {t.navbar.mobile}
            </a>
          </li>
          <li className="navbar-item">
            <a 
              href="https://maps.google.com/?q=Nana's+Rooms+Athens+Greece" 
              target="_blank"
              rel="noopener noreferrer"
              className="nav-link"
              title={t.navbar.viewOnMaps}
            >
              {t.navbar.maps}
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
