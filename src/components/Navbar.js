"use client";

import { useState } from "react";

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav>
            <div className="nav-container">

                <div className="logo">Emma Lykke</div>

                <div className={`nav-links ${menuOpen ? "active" : ""}`}>
                    <a href="#home" onClick={() => setMenuOpen(false)}>Forside</a>
                    <a href="#projects" onClick={() => setMenuOpen(false)}>Projekter</a>
                    <a href="#about" onClick={() => setMenuOpen(false)}>Om mig</a>
                </div>

                <div className={`nav-cta ${menuOpen ? "active" : ""}`} >
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