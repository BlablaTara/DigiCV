"use client";

import { useState } from "react";

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav>
            <div className="nav-container">

                <div className="logo">
                    
                    <a href="#home">Emma Lykke</a>

                </div>

                <div className={`nav-links ${menuOpen ? "active" : ""}`}>
                    <a href="#projects" onClick={() => setMenuOpen(false)}>Projekter</a>
                    <a href="#about" onClick={() => setMenuOpen(false)}>Om mig</a>
                    <a href="#contact" className="mobile-cta" onClick={() => setMenuOpen(false)}>
                        Kontakt
                    </a>
                </div>

                <div className="nav-cta">
                    <a href="#contact">Kontakt</a>
                </div>

                <div
                    className={`burger ${menuOpen ? "open" : ""}`}
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    <span></span>
                    <span></span>
                    <span></span>

                </div>
            
            </div>
        </nav>
        
    );
}