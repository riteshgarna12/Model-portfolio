import { useState } from "react";
import { navItems, modelInfo } from "../data/portfolioData";

const Navbar = ({ scrollY, onScrollTo }) => {
  const isScrolled = scrollY > 60;
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNav = (item) => {
    onScrollTo(item);
    setMenuOpen(false);
  };

  return (
    <>
      <nav
        style={{
          position: "fixed",
          top: 0, left: 0, right: 0,
          zIndex: 100,
          background: isScrolled ? "rgba(10,10,10,0.95)" : "transparent",
          borderBottom: isScrolled ? "1px solid #1a1a1a" : "none",
          transition: "background 0.4s, border-color 0.4s",
          padding: "20px 5%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Logo */}
        <div
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 20,
            fontWeight: 700,
            letterSpacing: 4,
            color: "#C8A96E",
          }}
        >
          {modelInfo.name}
        </div>

        {/* Desktop Nav Links */}
        <div className="nav-links-desktop" style={{ display: "flex", gap: 36 }}>
          {navItems.map((item) => (
            <span key={item} className="nav-link" onClick={() => onScrollTo(item)}>
              {item}
            </span>
          ))}
        </div>

        {/* Desktop CTA */}
        

        {/* Hamburger — shown on mobile/tablet via CSS */}
        <button
          className="hamburger"
          onClick={() => setMenuOpen(true)}
          aria-label="Open menu"
        >
          <span />
          <span />
          <span />
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        <button className="mobile-close" onClick={() => setMenuOpen(false)}>
          ×
        </button>
        {navItems.map((item) => (
          <span key={item} className="nav-link" onClick={() => handleNav(item)}>
            {item}
          </span>
        ))}
      </div>
    </>
  );
};

export default Navbar;
