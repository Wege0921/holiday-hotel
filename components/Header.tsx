'use client';

import { useState, useEffect } from 'react';

interface HeaderProps {
  onNavClick: (targetId: string) => void;
}

export default function Header({ onNavClick }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    // Header scroll effect
    const handleScroll = () => {
      const header = document.querySelector('.header');
      if (header) {
        if (window.scrollY > 100) {
          (header as HTMLElement).style.background = 'rgba(26, 26, 26, 0.98)';
          (header as HTMLElement).style.boxShadow = '0 2px 20px rgba(0,0,0,0.3)';
        } else {
          (header as HTMLElement).style.background = 'rgba(26, 26, 26, 0.95)';
          (header as HTMLElement).style.boxShadow = 'none';
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (targetId: string) => {
    onNavClick(targetId);
    setIsMenuOpen(false);
  };

  return (
    <header className="header">
      <nav className="navbar">
        <div className="nav-container">
          <div className="logo">
            <h1>Holiday Hotel</h1>
          </div>
          <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
            <li><a href="#home" className="nav-link" onClick={(e) => { e.preventDefault(); handleNavClick('#home'); }}>Home</a></li>
            <li><a href="#menu" className="nav-link" onClick={(e) => { e.preventDefault(); handleNavClick('#menu'); }}>Menu</a></li>
            <li><a href="#payment" className="nav-link" onClick={(e) => { e.preventDefault(); handleNavClick('#payment'); }}>Payment</a></li>
            <li><a href="#contact" className="nav-link" onClick={(e) => { e.preventDefault(); handleNavClick('#contact'); }}>Contact</a></li>
          </ul>
          <div className="hamburger" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
        </div>
      </nav>
    </header>
  );
}
