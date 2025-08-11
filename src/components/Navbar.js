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
        <div className="navbar-brand" style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <img src="/nanas.png" alt="Nana's Rooms Logo" style={{ height: 70, width: 140, borderRadius: 8, background: '#fff' }} />
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
    </nav>
  );
}
