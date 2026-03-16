'use client';

import { useEffect, useState } from 'react';
import Script from 'next/script';
import './globals.css';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

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

  const handleMenuClick = (category: string) => {
    setActiveMenu(activeMenu === category ? null : category);
  };

  const handleNavClick = (targetId: string) => {
    const target = document.querySelector(targetId);
    if (target) {
      const offsetTop = (target as HTMLElement).offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };

  return (
    <>
      <Script
        src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/js/all.min.js"
        strategy="afterInteractive"
      />
      
      {/* Header Section */}
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

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="hero-title">Holiday Hotel</h1>
          <p className="hero-tagline">Best Hotel in Addis Ababa, Ethiopia Since 2010</p>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="menu-section">
        <div className="container">
          <h2 className="section-title">Our Restaurant Menu</h2>
          <div className="menu-categories">
            <button 
              className={`menu-btn ${activeMenu === 'food' ? 'active' : ''}`}
              onClick={() => handleMenuClick('food')}
            >
              <span className="btn-icon">🍽</span>
              <span>Food Menu</span>
            </button>
            <button 
              className={`menu-btn ${activeMenu === 'beverages' ? 'active' : ''}`}
              onClick={() => handleMenuClick('beverages')}
            >
              <span className="btn-icon">🥤</span>
              <span>Beverages</span>
            </button>
            <button 
              className={`menu-btn ${activeMenu === 'alcoholic' ? 'active' : ''}`}
              onClick={() => handleMenuClick('alcoholic')}
            >
              <span className="btn-icon">🍷</span>
              <span>Alcoholic Drinks</span>
            </button>
            <button 
              className={`menu-btn ${activeMenu === 'non-alcoholic' ? 'active' : ''}`}
              onClick={() => handleMenuClick('non-alcoholic')}
            >
              <span className="btn-icon">🧃</span>
              <span>Non-Alcoholic Drinks</span>
            </button>
            <button 
              className={`menu-btn ${activeMenu === 'hot' ? 'active' : ''}`}
              onClick={() => handleMenuClick('hot')}
            >
              <span className="btn-icon">☕</span>
              <span>Hot Drinks</span>
            </button>
          </div>

          <div className="menu-lists">
            <div className={`menu-list ${activeMenu !== 'food' ? 'hidden' : ''}`}>
              <h3>Food Menu</h3>
              <div className="menu-items">
                <div className="menu-item">
                  <span className="item-name">Injera with Doro Wat</span>
                  <span className="item-price">ETB 250</span>
                </div>
                <div className="menu-item">
                  <span className="item-name">Tibs (Beef/Lamb)</span>
                  <span className="item-price">ETB 280</span>
                </div>
                <div className="menu-item">
                  <span className="item-name">Kitfo (Ethiopian Steak Tartare)</span>
                  <span className="item-price">ETB 320</span>
                </div>
                <div className="menu-item">
                  <span className="item-name">Shiro Ful</span>
                  <span className="item-price">ETB 180</span>
                </div>
                <div className="menu-item">
                  <span className="item-name">Grilled Salmon</span>
                  <span className="item-price">ETB 450</span>
                </div>
                <div className="menu-item">
                  <span className="item-name">Mixed Vegetables</span>
                  <span className="item-price">ETB 150</span>
                </div>
              </div>
            </div>

            <div className={`menu-list ${activeMenu !== 'beverages' ? 'hidden' : ''}`}>
              <h3>Beverages</h3>
              <div className="menu-items">
                <div className="menu-item">
                  <span className="item-name">Fresh Orange Juice</span>
                  <span className="item-price">ETB 60</span>
                </div>
                <div className="menu-item">
                  <span className="item-name">Mango Juice</span>
                  <span className="item-price">ETB 65</span>
                </div>
                <div className="menu-item">
                  <span className="item-name">Pineapple Juice</span>
                  <span className="item-price">ETB 60</span>
                </div>
                <div className="menu-item">
                  <span className="item-name">Avocado Smoothie</span>
                  <span className="item-price">ETB 70</span>
                </div>
                <div className="menu-item">
                  <span className="item-name">Mixed Berry Juice</span>
                  <span className="item-price">ETB 65</span>
                </div>
              </div>
            </div>

            <div className={`menu-list ${activeMenu !== 'alcoholic' ? 'hidden' : ''}`}>
              <h3>Alcoholic Drinks</h3>
              <div className="menu-items">
                <div className="menu-item">
                  <span className="item-name">Red Wine (Glass)</span>
                  <span className="item-price">ETB 120</span>
                </div>
                <div className="menu-item">
                  <span className="item-name">White Wine (Glass)</span>
                  <span className="item-price">ETB 110</span>
                </div>
                <div className="menu-item">
                  <span className="item-name">Beer (Local)</span>
                  <span className="item-price">ETB 45</span>
                </div>
                <div className="menu-item">
                  <span className="item-name">Beer (Import)</span>
                  <span className="item-price">ETB 65</span>
                </div>
                <div className="menu-item">
                  <span className="item-name">Whiskey (Shot)</span>
                  <span className="item-price">ETB 150</span>
                </div>
                <div className="menu-item">
                  <span className="item-name">Gin & Tonic</span>
                  <span className="item-price">ETB 130</span>
                </div>
                <div className="menu-item">
                  <span className="item-name">Mojito</span>
                  <span className="item-price">ETB 140</span>
                </div>
              </div>
            </div>

            <div className={`menu-list ${activeMenu !== 'non-alcoholic' ? 'hidden' : ''}`}>
              <h3>Non-Alcoholic Drinks</h3>
              <div className="menu-items">
                <div className="menu-item">
                  <span className="item-name">Soft Drinks (Coke, Sprite, Fanta)</span>
                  <span className="item-price">ETB 35</span>
                </div>
                <div className="menu-item">
                  <span className="item-name">Mineral Water</span>
                  <span className="item-price">ETB 25</span>
                </div>
                <div className="menu-item">
                  <span className="item-name">Fresh Lemonade</span>
                  <span className="item-price">ETB 50</span>
                </div>
                <div className="menu-item">
                  <span className="item-name">Iced Tea</span>
                  <span className="item-price">ETB 45</span>
                </div>
                <div className="menu-item">
                  <span className="item-name">Virgin Mojito</span>
                  <span className="item-price">ETB 60</span>
                </div>
                <div className="menu-item">
                  <span className="item-name">Milkshake</span>
                  <span className="item-price">ETB 70</span>
                </div>
              </div>
            </div>

            <div className={`menu-list ${activeMenu !== 'hot' ? 'hidden' : ''}`}>
              <h3>Hot Drinks</h3>
              <div className="menu-items">
                <div className="menu-item">
                  <span className="item-name">Espresso</span>
                  <span className="item-price">ETB 40</span>
                </div>
                <div className="menu-item">
                  <span className="item-name">Cappuccino</span>
                  <span className="item-price">ETB 55</span>
                </div>
                <div className="menu-item">
                  <span className="item-name">Latte</span>
                  <span className="item-price">ETB 60</span>
                </div>
                <div className="menu-item">
                  <span className="item-name">Ethiopian Coffee</span>
                  <span className="item-price">ETB 65</span>
                </div>
                <div className="menu-item">
                  <span className="item-name">Tea (Black/Green)</span>
                  <span className="item-price">ETB 35</span>
                </div>
                <div className="menu-item">
                  <span className="item-name">Hot Chocolate</span>
                  <span className="item-price">ETB 50</span>
                </div>
                <div className="menu-item">
                  <span className="item-name">Spiced Tea</span>
                  <span className="item-price">ETB 45</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Payment Section */}
      <section id="payment" className="payment-section">
        <div className="container">
          <h2 className="section-title">Payment Options</h2>
          <div className="payment-container">
            <div className="payment-info">
              <div className="bank-info">
                <h3>Bank Name: Commercial Bank of Ethiopia</h3>
                <p>Account: Holiday Hotel - Addis Ababa Branch</p>
              </div>
              <div className="payment-methods">
                <h4>Available Payment Methods:</h4>
                <div className="payment-icons">
                  <i className="fab fa-cc-visa"></i>
                  <i className="fab fa-cc-mastercard"></i>
                  <i className="fas fa-mobile-alt"></i>
                  <i className="fas fa-university"></i>
                </div>
              </div>
            </div>
            <div className="qr-code">
              <h3>Scan QR Code to Pay</h3>
              <div className="qr-placeholder">
                <i className="fas fa-qrcode"></i>
                <p>QR Code for Payment</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer id="contact" className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h3>Contact Information</h3>
              <div className="contact-info">
                <p><i className="fas fa-map-marker-alt"></i> Bole Road, Addis Ababa, Ethiopia</p>
                <p><i className="fas fa-phone"></i> +251 11 123 4567</p>
                <p><i className="fas fa-envelope"></i> info@holidayhotel.et</p>
              </div>
            </div>
            <div className="footer-section">
              <h3>Follow Us</h3>
              <div className="social-icons">
                <a href="#" className="social-icon"><i className="fab fa-facebook"></i></a>
                <a href="#" className="social-icon"><i className="fab fa-instagram"></i></a>
                <a href="#" className="social-icon"><i className="fab fa-twitter"></i></a>
                <a href="#" className="social-icon"><i className="fab fa-linkedin"></i></a>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; Holiday Hotel – All Rights Reserved</p>
          </div>
        </div>
      </footer>
    </>

  );
}
