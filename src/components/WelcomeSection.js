import React from "react";
import { useLanguage } from "../contexts/LanguageContext";
import "../styles/main.css";
import { collageImages } from "../data/RoomsImages";

export default function WelcomeSection() {
    const { t } = useLanguage();

   

    return (
        <section className="welcome-section">
            <div className="welcome-container">
                <div className="welcome-content">
                    <div className="welcome-text">
                        <h2 className="welcome-title">
                            {t.welcome?.title}
                        </h2>
                        <h3 className="welcome-subtitle">
                            {t.welcome?.subtitle}
                        </h3>
                        <p className="welcome-description">
                            {t.welcome?.description}
                        </p>
                    </div>

                    <div className="welcome-collage">
                        <div className="photo-collage-board">
                            {collageImages.map((image, index) => (
                                <div key={index} className={`collage-photo photo-${index + 1}`}>
                                    <img
                                        src={image.src}
                                        alt={image.alt}
                                        className="collage-image"
                                    />
                                    <div className="photo-tape tape-1"></div>
                                    <div className="photo-tape tape-2"></div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
