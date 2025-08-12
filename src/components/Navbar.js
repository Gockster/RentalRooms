import React, { useState } from "react";
import { useLanguage } from "../contexts/LanguageContext";
import "../styles/main.css";

export default function Navbar() {
  const { currentLanguage, switchLanguage, t } = useLanguage();
  const [showLangDropdown, setShowLangDropdown] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const selectLanguage = (lang) => {
    switchLanguage(lang);
    setShowLangDropdown(false);
  };

  const toggleMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-brand" style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <img 
            src="/nanas.png" 
            alt="Nana's Rooms Logo" 
            style={{ 
              height: 'clamp(50px, 8vw, 70px)', 
              width: 'clamp(90px, 15vw, 130px)', 
              borderRadius: 8, 
              background: '#fff' 
            }} 
          />
          {/* Mobile Hamburger Menu - now next to logo */}
          <button 
            className="mobile-menu-toggle"
            onClick={toggleMobileMenu}
            style={{
              display: 'none',
              background: 'none',
              border: 'none',
              fontSize: '24px',
              cursor: 'pointer',
              color: '#fff', // Set to white
              marginLeft: 10
            }}
          >
            {showMobileMenu ? '✕' : '☰'}
          </button>
        </div>

        <ul className={`navbar-links ${showMobileMenu ? 'mobile-active' : ''}`}>
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
                  <button
                    onClick={() => selectLanguage('it')}
                    className={`dropdown-item ${currentLanguage === 'it' ? 'active-language' : ''}`}
                  >
                    🇮🇹 Italiano
                  </button>
                  <button
                    onClick={() => selectLanguage('de')}
                    className={`dropdown-item ${currentLanguage === 'de' ? 'active-language' : ''}`}
                  >
                    🇩🇪 Deutsch
                  </button>
                  <button
                    onClick={() => selectLanguage('es')}
                    className={`dropdown-item ${currentLanguage === 'es' ? 'active-language' : ''}`}
                  >
                    🇪🇸 Español
                  </button>
                  <button
                    onClick={() => selectLanguage('ar')}
                    className={`dropdown-item ${currentLanguage === 'ar' ? 'active-language' : ''}`}
                  >
                    🇸🇦 العربية
                  </button>
                  <button
                    onClick={() => selectLanguage('fr')}
                    className={`dropdown-item ${currentLanguage === 'fr' ? 'active-language' : ''}`}
                  >
                    🇫🇷 Français
                  </button>
                </div>
              )}
            </div>
          </li>
          <li className="navbar-item">
            <a 
              href="tel:+306955217820" 
              className="nav-link"
              title={t.navbar.callUs}
            >
              📱 +30 6955217820
              <br />
              📱 +30 6947203554
            </a>
          </li>
          <li className="navbar-item">
            <a 
              href="https://www.google.com/maps/place/nanasroooms+Town+1/@37.4401481,25.3166531,14.13z/data=!4m13!1m2!2m1!1sNana's+Rooms+Mykonos+Chora+Greece!3m9!1s0x14a2bfbe1317b0dd:0xf8aa5ffd5a3297ef!5m2!4m1!1i2!8m2!3d37.4467706!4d25.3274205!15sCiFOYW5hJ3MgUm9vbXMgTXlrb25vcyBDaG9yYSBHcmVlY2WSARZzZXJ2aWNlZF9hY2NvbW1vZGF0aW9u4AEA!16s%2Fg%2F11kqs3tn93?entry=ttu&g_ep=EgoyMDI1MDgwNi4wIKXMDSoASAFQAw%3D%3D" 
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

      {/* Mobile Responsive Styles */}
      <style jsx>{`
        @media (max-width: 768px) {
          .mobile-menu-toggle {
            display: block !important;
            color: #fff !important;
          }
          
          .navbar-links {
            position: fixed;
            top: 80px;
            left: -100%;
            width: 100%;
            height: calc(100vh - 80px);
            background: white;
            flex-direction: column;
            align-items: center;
            justify-content: flex-start;
            padding-top: 2rem;
            transition: left 0.3s ease;
            z-index: 1000;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            padding-top: 0 !important;
            gap: 0 !important;
            row-gap: 0 !important;
          }
          
          .navbar-links.mobile-active {
            left: 0;
          }
          
          .navbar-item {
            margin: 0 !important;
            padding: 0 !important;
            width: 100%;
            text-align: center;
          }
          
          .nav-link {
            font-size: 18px;
            padding: 12px;
            display: block;
            border-radius: 8px;
            background: #f8f9fa;
          }
          
          .language-selector {
            width: 100%;
          }
          
          .lang-button {
            width: 100%;
            padding: 12px;
            font-size: 18px;
          }
          
          .dropdown {
            position: static;
            width: 100%;
            box-shadow: none;
            border: 1px solid #ddd;
            margin-top: 8px;
          }
        }
        
        @media (max-width: 480px) {
          .navbar-container {
            padding: 0 1rem;
          }
          
          .nav-link {
            font-size: 16px;
          }
        }
      `}</style>
    </nav>
  );
}
