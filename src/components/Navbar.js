export default function Navbar() {
    return (
        <nav>
            <div className="nav-container">
                <div className="logo">Emma Lykke</div>

                <div className="nav-links">
                    <a href="#home">Forside</a>
                    <a href="#projects">Projekter</a>
                    <a href="#about">Om mig</a>
                </div>

                <div className="nav-cta">
                    <a href="#contact">Kontakt</a>
                </div>
            
            </div>
        </nav>
        
    );
}