'use client';

import { useEffect, useState } from 'react';
import Script from 'next/script';
import './globals.css';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [activeFoodMenu, setActiveFoodMenu] = useState<string | null>(null);
  const [activeAlcoholicMenu, setActiveAlcoholicMenu] = useState<string | null>(null);

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
    // Only scroll to menu lists for non-parent buttons
    if (category !== 'food' && category !== 'alcoholic') {
      setTimeout(() => {
        const menuLists = document.querySelector('.menu-lists');
        if (menuLists) {
          const offsetTop = (menuLists as HTMLElement).offsetTop - 80;
          window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
          });
        }
      }, 100);
    }
    
    if (category === 'food') {
      // Toggle food menu open/closed
      if (activeMenu === 'food') {
        setActiveMenu(null);
        setActiveFoodMenu(null);
      } else {
        setActiveMenu('food');
        setActiveFoodMenu(null);
        setActiveAlcoholicMenu(null); // Clear alcoholic menu when switching to food
      }
    } else if (category === 'alcoholic') {
      // Toggle alcoholic menu open/closed
      if (activeMenu === 'alcoholic') {
        setActiveMenu(null);
        setActiveAlcoholicMenu(null);
      } else {
        setActiveMenu('alcoholic');
        setActiveAlcoholicMenu(null);
        setActiveFoodMenu(null); // Clear food menu when switching to alcoholic
      }
    } else if (category === 'beef' || category === 'chicken' || category === 'pasta' || category === 'fish' || 
               category === 'indian' || category === 'ethiopian' || category === 'snacks' || category === 'pizza' ||
               category === 'soup' || category === 'salad' || category === 'breakfast' || category === 'dessert') {
      // Toggle specific food category
      setActiveFoodMenu(activeFoodMenu === category ? null : category);
      setActiveMenu('food'); // Ensure food menu stays open
      setActiveAlcoholicMenu(null); // Clear alcoholic menu
    } else if (category === 'wine' || category === 'beer' || category === 'whisky' || category === 'vodka' ||
               category === 'gin' || category === 'liqueur') {
      // Toggle specific alcoholic category
      setActiveAlcoholicMenu(activeAlcoholicMenu === category ? null : category);
      setActiveMenu('alcoholic'); // Ensure alcoholic menu stays open
      setActiveFoodMenu(null); // Clear food menu
    } else {
      // Handle other categories
      setActiveMenu(activeMenu === category ? null : category);
      setActiveFoodMenu(null);
      setActiveAlcoholicMenu(null);
    }
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
              {/* <img src="https://res.cloudinary.com/dpral0rfp/image/upload/v1773670211/holiday-logo_ivfnzy.png" alt="Holiday Hotel Logo" className="logo-image" /> */}
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
          <p className="hero-tagline">Best Hotel in Addis Ababa, Ethiopia Since 1986</p>
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
              <span className="btn-icon">🍽️</span>
              <span>Food</span>
            </button>
            
            {/* Food Subcategories */}
            <div className={`food-subcategories ${activeMenu !== 'food' ? 'hidden' : ''}`}>
              <button 
                className={`submenu-btn ${activeFoodMenu === 'beef' ? 'active' : ''}`}
                onClick={() => handleMenuClick('beef')}
              >
                <span className="btn-icon">🥩</span>
                <span>Beef</span>
              </button>
              <button 
                className={`submenu-btn ${activeFoodMenu === 'chicken' ? 'active' : ''}`}
                onClick={() => handleMenuClick('chicken')}
              >
                <span className="btn-icon">🍗</span>
                <span>Chicken</span>
              </button>
              <button 
                className={`submenu-btn ${activeFoodMenu === 'pasta' ? 'active' : ''}`}
                onClick={() => handleMenuClick('pasta')}
              >
                <span className="btn-icon">🍝</span>
                <span>Pasta & Rice</span>
              </button>
              <button 
                className={`submenu-btn ${activeFoodMenu === 'fish' ? 'active' : ''}`}
                onClick={() => handleMenuClick('fish')}
              >
                <span className="btn-icon">🐟</span>
                <span>Fish</span>
              </button>
              <button 
                className={`submenu-btn ${activeFoodMenu === 'indian' ? 'active' : ''}`}
                onClick={() => handleMenuClick('indian')}
              >
                <span className="btn-icon">🍛</span>
                <span>Indian Flavor</span>
              </button>
              <button 
                className={`submenu-btn ${activeFoodMenu === 'ethiopian' ? 'active' : ''}`}
                onClick={() => handleMenuClick('ethiopian')}
              >
                <span className="btn-icon">🫒</span>
                <span>Ethiopian Corner</span>
              </button>
              <button 
                className={`submenu-btn ${activeFoodMenu === 'snacks' ? 'active' : ''}`}
                onClick={() => handleMenuClick('snacks')}
              >
                <span className="btn-icon">🥪</span>
                <span>Snacks</span>
              </button>
              <button 
                className={`submenu-btn ${activeFoodMenu === 'pizza' ? 'active' : ''}`}
                onClick={() => handleMenuClick('pizza')}
              >
                <span className="btn-icon">🍕</span>
                <span>Pizzeria</span>
              </button>
              <button 
                className={`submenu-btn ${activeFoodMenu === 'soup' ? 'active' : ''}`}
                onClick={() => handleMenuClick('soup')}
              >
                <span className="btn-icon">🍲</span>
                <span>Soup</span>
              </button>
              <button 
                className={`submenu-btn ${activeFoodMenu === 'salad' ? 'active' : ''}`}
                onClick={() => handleMenuClick('salad')}
              >
                <span className="btn-icon">🥗</span>
                <span>Salads</span>
              </button>
              <button 
                className={`submenu-btn ${activeFoodMenu === 'breakfast' ? 'active' : ''}`}
                onClick={() => handleMenuClick('breakfast')}
              >
                <span className="btn-icon">🍳</span>
                <span>Breakfast</span>
              </button>
              <button 
                className={`submenu-btn ${activeFoodMenu === 'dessert' ? 'active' : ''}`}
                onClick={() => handleMenuClick('dessert')}
              >
                <span className="btn-icon">🍰</span>
                <span>Dessert</span>
              </button>
            </div>
            
            <button 
              className={`menu-btn ${activeMenu === 'non-alcoholic' ? 'active' : ''}`}
              onClick={() => handleMenuClick('non-alcoholic')}
            >
              <span className="btn-icon">🧃</span>
              <span>Non-Alcoholic Beverages</span>
            </button>
            <button 
              className={`menu-btn ${activeMenu === 'hot' ? 'active' : ''}`}
              onClick={() => handleMenuClick('hot')}
            >
              <span className="btn-icon">☕</span>
              <span>Hot Drinks</span>
            </button>
            <button 
              className={`menu-btn ${activeMenu === 'alcoholic' ? 'active' : ''}`}
              onClick={() => handleMenuClick('alcoholic')}
            >
              <span className="btn-icon">🍷</span>
              <span>Alcoholic Beverages</span>
            </button>
            
            {/* Alcoholic Subcategories */}
            <div className={`alcoholic-subcategories ${activeMenu !== 'alcoholic' ? 'hidden' : ''}`}>
              <button 
                className={`submenu-btn ${activeAlcoholicMenu === 'wine' ? 'active' : ''}`}
                onClick={() => handleMenuClick('wine')}
              >
                <span className="btn-icon">🍷</span>
                <span>Wine</span>
              </button>
              <button 
                className={`submenu-btn ${activeAlcoholicMenu === 'beer' ? 'active' : ''}`}
                onClick={() => handleMenuClick('beer')}
              >
                <span className="btn-icon">🍺</span>
                <span>Beer</span>
              </button>
              <button 
                className={`submenu-btn ${activeAlcoholicMenu === 'whisky' ? 'active' : ''}`}
                onClick={() => handleMenuClick('whisky')}
              >
                <span className="btn-icon">🥃</span>
                <span>Whisky</span>
              </button>
              <button 
                className={`submenu-btn ${activeAlcoholicMenu === 'vodka' ? 'active' : ''}`}
                onClick={() => handleMenuClick('vodka')}
              >
                <span className="btn-icon">🫙</span>
                <span>Vodka</span>
              </button>
              <button 
                className={`submenu-btn ${activeAlcoholicMenu === 'gin' ? 'active' : ''}`}
                onClick={() => handleMenuClick('gin')}
              >
                <span className="btn-icon">🍸</span>
                <span>Gin</span>
              </button>
              <button 
                className={`submenu-btn ${activeAlcoholicMenu === 'liqueur' ? 'active' : ''}`}
                onClick={() => handleMenuClick('liqueur')}
              >
                <span className="btn-icon">🥃</span>
                <span>Liqueur</span>
              </button>
            </div>
            <button 
              className={`menu-btn ${activeMenu === 'juice' ? 'active' : ''}`}
              onClick={() => handleMenuClick('juice')}
            >
              <span className="btn-icon">🥤</span>
              <span>Juice</span>
            </button>
            <button 
              className={`menu-btn ${activeMenu === 'cake' ? 'active' : ''}`}
              onClick={() => handleMenuClick('cake')}
            >
              <span className="btn-icon">🍰</span>
              <span>Cake</span>
            </button>
          </div>

          <div className="menu-lists">
            <div className={`menu-list ${activeFoodMenu !== 'beef' ? 'hidden' : ''}`}>
              <h3>Beef</h3>
              <div className="menu-items">
                <div className="menu-item">
                  <span className="item-name">Festive beef tenderloin</span>
                  <span className="item-price">ETB 880</span>
                </div>
                <div className="menu-item">
                  <span className="item-name">Stake alabesmaka</span>
                  <span className="item-price">ETB 880</span>
                </div>
                <div className="menu-item">
                  <span className="item-name">Beef fillet sizzlers</span>
                  <span className="item-price">ETB 800</span>
                </div>
                <div className="menu-item">
                  <span className="item-name">Pepper steak</span>
                  <span className="item-price">ETB 880</span>
                </div>
              </div>
            </div>

            <div className={`menu-list ${activeFoodMenu !== 'chicken' ? 'hidden' : ''}`}>
              <h3>Chicken</h3>
              <div className="menu-items">
                <div className="menu-item">
                  <span className="item-name">Chicken cordon bleu</span>
                  <span className="item-price">ETB 700</span>
                </div>
                <div className="menu-item">
                  <span className="item-name">Chicken stroganoff</span>
                  <span className="item-price">ETB 700</span>
                </div>
                <div className="menu-item">
                  <span className="item-name">Roasted chicken leg</span>
                  <span className="item-price">ETB 780</span>
                </div>
                <div className="menu-item">
                  <span className="item-name">Chicken breast</span>
                  <span className="item-price">ETB 780</span>
                </div>
                <div className="menu-item">
                  <span className="item-name">Chicken cutlet</span>
                  <span className="item-price">ETB 699</span>
                </div>
                <div className="menu-item">
                  <span className="item-name">Stir fried chicken</span>
                  <span className="item-price">ETB 700</span>
                </div>
              </div>
            </div>

            <div className={`menu-list ${activeFoodMenu !== 'pasta' ? 'hidden' : ''}`}>
              <h3>Pasta and Rice</h3>
              <div className="menu-items">
                <div className="menu-item">
                  <span className="item-name">Meat sauce</span>
                  <span className="item-price">ETB 650</span>
                </div>
                <div className="menu-item">
                  <span className="item-name">Tomato sauce</span>
                  <span className="item-price">ETB 580</span>
                </div>
                <div className="menu-item">
                  <span className="item-name">Carbonara sauce</span>
                  <span className="item-price">ETB 620</span>
                </div>
                <div className="menu-item">
                  <span className="item-name">Vegetable sauce</span>
                  <span className="item-price">ETB 590</span>
                </div>
                <div className="menu-item">
                  <span className="item-name">Chicken sauce</span>
                  <span className="item-price">ETB 650</span>
                </div>
              </div>
            </div>

            <div className={`menu-list ${activeFoodMenu !== 'fish' ? 'hidden' : ''}`}>
              <h3>Fish</h3>
              <div className="menu-items">
                <div className="menu-item">
                  <span className="item-name">Fish cutlet</span>
                  <span className="item-price">ETB 680</span>
                </div>
                <div className="menu-item">
                  <span className="item-name">Spice napoleon fish</span>
                  <span className="item-price">ETB 650</span>
                </div>
                <div className="menu-item">
                  <span className="item-name">Fish goulash</span>
                  <span className="item-price">ETB 700</span>
                </div>
              </div>
            </div>

            <div className={`menu-list ${activeFoodMenu !== 'indian' ? 'hidden' : ''}`}>
              <h3>Indian Flavor</h3>
              <div className="menu-items">
                <div className="menu-item">
                  <span className="item-name">Beef madras</span>
                  <span className="item-price">ETB 690</span>
                </div>
                <div className="menu-item">
                  <span className="item-name">Chicken Curry</span>
                  <span className="item-price">ETB 690</span>
                </div>
                <div className="menu-item">
                  <span className="item-name">Indian pilaf with egg</span>
                  <span className="item-price">ETB 650</span>
                </div>
              </div>
            </div>

            <div className={`menu-list ${activeFoodMenu !== 'ethiopian' ? 'hidden' : ''}`}>
              <h3>Ethiopian Corner</h3>
              <div className="menu-items">
                <div className="menu-item">
                  <span className="item-name">Doro fir fir</span>
                  <span className="item-price">ETB 700</span>
                </div>
                <div className="menu-item">
                  <span className="item-name">Doro Wet key</span>
                  <span className="item-price">ETB 780</span>
                </div>
                <div className="menu-item">
                  <span className="item-name">Chikina Tibs</span>
                  <span className="item-price">ETB 890</span>
                </div>
                <div className="menu-item">
                  <span className="item-name">Tibs Fir fir</span>
                  <span className="item-price">ETB 580</span>
                </div>
                <div className="menu-item">
                  <span className="item-name">Quanta Firfir</span>
                  <span className="item-price">ETB 590</span>
                </div>
                <div className="menu-item">
                  <span className="item-name">Lamb Tibs</span>
                  <span className="item-price">ETB 900</span>
                </div>
                <div className="menu-item">
                  <span className="item-name">Fasting Fir fir</span>
                  <span className="item-price">ETB 530</span>
                </div>
                <div className="menu-item">
                  <span className="item-name">Bozena Shiro</span>
                  <span className="item-price">ETB 580</span>
                </div>
                <div className="menu-item">
                  <span className="item-name">Tegabino Shiro</span>
                  <span className="item-price">ETB 520</span>
                </div>
                <div className="menu-item">
                  <span className="item-name">Fasting Beyanet</span>
                  <span className="item-price">ETB 790</span>
                </div>
                <div className="menu-item">
                  <span className="item-name">MISER WET</span>
                  <span className="item-price">ETB 580</span>
                </div>
              </div>
            </div>

            <div className={`menu-list ${activeFoodMenu !== 'snacks' ? 'hidden' : ''}`}>
              <h3>Snacks</h3>
              <div className="menu-items">
                <div className="menu-item">
                  <span className="item-name">Tuna Sandwich</span>
                  <span className="item-price">ETB 680</span>
                </div>
                <div className="menu-item">
                  <span className="item-name">Club Sandwich</span>
                  <span className="item-price">ETB 750</span>
                </div>
                <div className="menu-item">
                  <span className="item-name">Mexican vegetable wrap</span>
                  <span className="item-price">ETB 580</span>
                </div>
                <div className="menu-item">
                  <span className="item-name">Chicken Wrap</span>
                  <span className="item-price">ETB 690</span>
                </div>
                <div className="menu-item">
                  <span className="item-name">Cheese burger</span>
                  <span className="item-price">ETB 780</span>
                </div>
                <div className="menu-item">
                  <span className="item-name">French fries</span>
                  <span className="item-price">ETB 450</span>
                </div>
                <div className="menu-item">
                  <span className="item-name">Cooked vegetable</span>
                  <span className="item-price">ETB 480</span>
                </div>
              </div>
            </div>

            <div className={`menu-list ${activeFoodMenu !== 'pizza' ? 'hidden' : ''}`}>
              <h3>Pizzeria</h3>
              <div className="menu-items">
                <div className="menu-item">
                  <span className="item-name">Holiday Special pizza</span>
                  <span className="item-price">ETB 899</span>
                </div>
                <div className="menu-item">
                  <span className="item-name">Chicken pizza</span>
                  <span className="item-price">ETB 850</span>
                </div>
                <div className="menu-item">
                  <span className="item-name">Beef pizza</span>
                  <span className="item-price">ETB 850</span>
                </div>
                <div className="menu-item">
                  <span className="item-name">Tuna Pizza</span>
                  <span className="item-price">ETB 880</span>
                </div>
                <div className="menu-item">
                  <span className="item-name">Vegetable pizza</span>
                  <span className="item-price">ETB 710</span>
                </div>
                <div className="menu-item">
                  <span className="item-name">Margherita pizza</span>
                  <span className="item-price">ETB 800</span>
                </div>
              </div>
            </div>

            <div className={`menu-list ${activeFoodMenu !== 'soup' ? 'hidden' : ''}`}>
              <h3>Soup</h3>
              <div className="menu-items">
                <div className="menu-item">
                  <span className="item-name">Chicken and mushroom</span>
                  <span className="item-price">ETB 550</span>
                </div>
                <div className="menu-item">
                  <span className="item-name">Vegetable soup</span>
                  <span className="item-price">ETB 400</span>
                </div>
                <div className="menu-item">
                  <span className="item-name">Corn and fish chowder soup</span>
                  <span className="item-price">ETB 420</span>
                </div>
                <div className="menu-item">
                  <span className="item-name">Tomato and lentil soup</span>
                  <span className="item-price">ETB 400</span>
                </div>
                <div className="menu-item">
                  <span className="item-name">Porridge</span>
                  <span className="item-price">ETB 450</span>
                </div>
              </div>
            </div>

            <div className={`menu-list ${activeFoodMenu !== 'salad' ? 'hidden' : ''}`}>
              <h3>Salads</h3>
              <div className="menu-items">
                <div className="menu-item">
                  <span className="item-name">Fresh garden salad</span>
                  <span className="item-price">ETB 380</span>
                </div>
                <div className="menu-item">
                  <span className="item-name">House salad</span>
                  <span className="item-price">ETB 480</span>
                </div>
                <div className="menu-item">
                  <span className="item-name">Tuna salad</span>
                  <span className="item-price">ETB 520</span>
                </div>
                <div className="menu-item">
                  <span className="item-name">Holy social salad</span>
                  <span className="item-price">ETB 590</span>
                </div>
              </div>
            </div>

            <div className={`menu-list ${activeFoodMenu !== 'breakfast' ? 'hidden' : ''}`}>
              <h3>Breakfast</h3>
              <div className="menu-items">
                <div className="menu-item">
                  <span className="item-name">Full breakfast</span>
                  <span className="item-price">ETB 600</span>
                </div>
                <div className="menu-item">
                  <span className="item-name">Continental breakfast</span>
                  <span className="item-price">ETB 450</span>
                </div>
                <div className="menu-item">
                  <span className="item-name">Scrambled egg</span>
                  <span className="item-price">ETB 560</span>
                </div>
                <div className="menu-item">
                  <span className="item-name">Plane Omelet</span>
                  <span className="item-price">ETB 560</span>
                </div>
                <div className="menu-item">
                  <span className="item-name">Special omelet</span>
                  <span className="item-price">ETB 600</span>
                </div>
                <div className="menu-item">
                  <span className="item-name">Spanish omelet</span>
                  <span className="item-price">ETB 570</span>
                </div>
                <div className="menu-item">
                  <span className="item-name">Cheese Omelet</span>
                  <span className="item-price">ETB 590</span>
                </div>
                <div className="menu-item">
                  <span className="item-name">Scrambled egg with meat</span>
                  <span className="item-price">ETB 570</span>
                </div>
                <div className="menu-item">
                  <span className="item-name">Boiled egg</span>
                  <span className="item-price">ETB 500</span>
                </div>
                <div className="menu-item">
                  <span className="item-name">Fasting Firfir</span>
                  <span className="item-price">ETB 560</span>
                </div>
                <div className="menu-item">
                  <span className="item-name">Tibs Firfir</span>
                  <span className="item-price">ETB 580</span>
                </div>
                <div className="menu-item">
                  <span className="item-name">Fasting chechebesa</span>
                  <span className="item-price">ETB 500</span>
                </div>
                <div className="menu-item">
                  <span className="item-name">Non fasting chechebesa</span>
                  <span className="item-price">ETB 560</span>
                </div>
              </div>
            </div>

            <div className={`menu-list ${activeFoodMenu !== 'dessert' ? 'hidden' : ''}`}>
              <h3>Dessert</h3>
              <div className="menu-items">
                <div className="menu-item">
                  <span className="item-name">Seasonal Fruit Salad</span>
                  <span className="item-price">ETB 380</span>
                </div>
                <div className="menu-item">
                  <span className="item-name">Crepes Suzette</span>
                  <span className="item-price">ETB 360</span>
                </div>
                <div className="menu-item">
                  <span className="item-name">Varieties of cake</span>
                  <span className="item-price">ETB 360</span>
                </div>
              </div>
            </div>

            <div className={`menu-list ${activeMenu !== 'non-alcoholic' ? 'hidden' : ''}`}>
              <h3>Non-Alcoholic Beverages</h3>
              <div className="menu-items">
                <div className="menu-item">
                  <span className="item-name">Soft drink</span>
                  <span className="item-price">ETB 119.99</span>
                </div>
                <div className="menu-item">
                  <span className="item-name">Ambo water</span>
                  <span className="item-price">ETB 119.99</span>
                </div>
                <div className="menu-item">
                  <span className="item-name">Water ½ liter</span>
                  <span className="item-price">ETB 110.00</span>
                </div>
                <div className="menu-item">
                  <span className="item-name">Water 1 liter</span>
                  <span className="item-price">ETB 125.00</span>
                </div>
                <div className="menu-item">
                  <span className="item-name">Water 2 liter</span>
                  <span className="item-price">ETB 199.99</span>
                </div>
              </div>
            </div>

            <div className={`menu-list ${activeMenu !== 'hot' ? 'hidden' : ''}`}>
              <h3>Hot Drinks</h3>
              <div className="menu-items">
                <div className="menu-item">
                  <span className="item-name">Special Tea</span>
                  <span className="item-price">ETB 200</span>
                </div>
                <div className="menu-item">
                  <span className="item-name">Macchiato</span>
                  <span className="item-price">ETB 130</span>
                </div>
                <div className="menu-item">
                  <span className="item-name">Tea</span>
                  <span className="item-price">ETB 80</span>
                </div>
                <div className="menu-item">
                  <span className="item-name">Hot Chocolate</span>
                  <span className="item-price">ETB 200</span>
                </div>
                <div className="menu-item">
                  <span className="item-name">Cappuccino</span>
                  <span className="item-price">ETB 200</span>
                </div>
                <div className="menu-item">
                  <span className="item-name">Milk with Coffee</span>
                  <span className="item-price">ETB 130</span>
                </div>
                <div className="menu-item">
                  <span className="item-name">Milk</span>
                  <span className="item-price">ETB 130</span>
                </div>
                <div className="menu-item">
                  <span className="item-name">Fasting Macchiato</span>
                  <span className="item-price">ETB 120</span>
                </div>
                <div className="menu-item">
                  <span className="item-name">Ginger/Lemon Tea</span>
                  <span className="item-price">ETB 110</span>
                </div>
                <div className="menu-item">
                  <span className="item-name">Tea with Coffee</span>
                  <span className="item-price">ETB 110</span>
                </div>
                <div className="menu-item">
                  <span className="item-name">Coffee</span>
                  <span className="item-price">ETB 120</span>
                </div>
                <div className="menu-item">
                  <span className="item-name">Traditional Coffee</span>
                  <span className="item-price">ETB 50</span>
                </div>
                <div className="menu-item">
                  <span className="item-name">Peanut Tea</span>
                  <span className="item-price">ETB 120</span>
                </div>
                <div className="menu-item">
                  <span className="item-name">Green Tea</span>
                  <span className="item-price">ETB 110</span>
                </div>
                <div className="menu-item">
                  <span className="item-name">Teakorenti</span>
                  <span className="item-price">ETB 180</span>
                </div>
              </div>
            </div>

            <div className={`menu-list ${activeAlcoholicMenu !== 'wine' ? 'hidden' : ''}`}>
              <h3>Wine</h3>
              <div className="menu-items">
                <div className="menu-item">
                  <span className="item-name">Acacia dry red</span>
                  <span className="item-price">ETB 2,500</span>
                </div>
                <div className="menu-item">
                  <span className="item-name">Acacia medium sweet red</span>
                  <span className="item-price">ETB 2,500</span>
                </div>
                <div className="menu-item">
                  <span className="item-name">Acacia medium sweet white</span>
                  <span className="item-price">ETB 2,500</span>
                </div>
                <div className="menu-item">
                  <span className="item-name">Acacia medium sweet rose</span>
                  <span className="item-price">ETB 2,500</span>
                </div>
                <div className="menu-item">
                  <span className="item-name">Kemila wine</span>
                  <span className="item-price">ETB 2,500</span>
                </div>
                <div className="menu-item">
                  <span className="item-name">Rift valley wine</span>
                  <span className="item-price">ETB 2,500</span>
                </div>
                <div className="menu-item">
                  <span className="item-name">Gebeta wine</span>
                  <span className="item-price">ETB 2,500</span>
                </div>
              </div>
            </div>

            <div className={`menu-list ${activeAlcoholicMenu !== 'beer' ? 'hidden' : ''}`}>
              <h3>Beer</h3>
              <div className="menu-items">
                <div className="menu-item">
                  <span className="item-name">Local beer</span>
                  <span className="item-price">ETB 160.00</span>
                </div>
                <div className="menu-item">
                  <span className="item-name">Bedele (big)</span>
                  <span className="item-price">ETB 199.99</span>
                </div>
                <div className="menu-item">
                  <span className="item-name">Arada cocktail</span>
                  <span className="item-price">ETB 199.99</span>
                </div>
                <div className="menu-item">
                  <span className="item-name">Heineken beer</span>
                  <span className="item-price">ETB 199.99</span>
                </div>
              </div>
            </div>

            <div className={`menu-list ${activeAlcoholicMenu !== 'whisky' ? 'hidden' : ''}`}>
              <h3>Whisky (bottle/½ bottle/shot)</h3>
              <div className="menu-items">
                <div className="menu-item">
                  <span className="item-name">Gold label</span>
                  <span className="item-price">ETB 22,000 / 11,000 / 590</span>
                </div>
                <div className="menu-item">
                  <span className="item-name">Double black</span>
                  <span className="item-price">ETB 20,000 / 10,000 / 550</span>
                </div>
                <div className="menu-item">
                  <span className="item-name">Black label</span>
                  <span className="item-price">ETB 17,000 / 8,500 / 500</span>
                </div>
                <div className="menu-item">
                  <span className="item-name">Red label</span>
                  <span className="item-price">ETB 15,000 / 7,500 / 450</span>
                </div>
                <div className="menu-item">
                  <span className="item-name">High land queen</span>
                  <span className="item-price">ETB 15,000 / 7,500 / 450</span>
                </div>
                <div className="menu-item">
                  <span className="item-name">Dimple 15 yrs</span>
                  <span className="item-price">ETB 20,000 / 10,000 / 550</span>
                </div>
                <div className="menu-item">
                  <span className="item-name">Glenfiddich 12 yrs</span>
                  <span className="item-price">ETB 17,000 / 8,500 / 500</span>
                </div>
                <div className="menu-item">
                  <span className="item-name">Jack Daniel</span>
                  <span className="item-price">ETB 20,000 / 10,000 / 550</span>
                </div>
              </div>
            </div>

            <div className={`menu-list ${activeAlcoholicMenu !== 'vodka' ? 'hidden' : ''}`}>
              <h3>Vodka (bottle/½ bottle/shot)</h3>
              <div className="menu-items">
                <div className="menu-item">
                  <span className="item-name">Absolut vodka</span>
                  <span className="item-price">ETB 17,000 / 8,500 / 500</span>
                </div>
                <div className="menu-item">
                  <span className="item-name">Ciroc vodka</span>
                  <span className="item-price">ETB 19,000 / 9,500 / 500</span>
                </div>
                <div className="menu-item">
                  <span className="item-name">Stolichnaya vodka</span>
                  <span className="item-price">ETB 16,000 / 8,000 / 450</span>
                </div>
                <div className="menu-item">
                  <span className="item-name">Winter palace</span>
                  <span className="item-price">ETB 17,000 / 8,500 / 500</span>
                </div>
                <div className="menu-item">
                  <span className="item-name">Smirnoff vodka</span>
                  <span className="item-price">ETB 17,000 / 8,500 / 500</span>
                </div>
                <div className="menu-item">
                  <span className="item-name">Skyy vodka</span>
                  <span className="item-price">ETB 18,000 / 9,000 / 500</span>
                </div>
                <div className="menu-item">
                  <span className="item-name">Grey goose</span>
                  <span className="item-price">ETB 17,000 / 8,500 / 500</span>
                </div>
              </div>
            </div>

            <div className={`menu-list ${activeAlcoholicMenu !== 'gin' ? 'hidden' : ''}`}>
              <h3>Gin (bottle/½ bottle/shot)</h3>
              <div className="menu-items">
                <div className="menu-item">
                  <span className="item-name">Gordon gin</span>
                  <span className="item-price">ETB 16,000 / 8,000 / 450</span>
                </div>
                <div className="menu-item">
                  <span className="item-name">Hendricks</span>
                  <span className="item-price">ETB 22,000 / 11,000 / 580</span>
                </div>
                <div className="menu-item">
                  <span className="item-name">Tanqueray</span>
                  <span className="item-price">ETB 18,000 / 9,000 / 500</span>
                </div>
                <div className="menu-item">
                  <span className="item-name">Bombay</span>
                  <span className="item-price">ETB 17,000 / 8,500 / 500</span>
                </div>
              </div>
            </div>

            <div className={`menu-list ${activeAlcoholicMenu !== 'liqueur' ? 'hidden' : ''}`}>
              <h3>Liqueur (bottle/½ bottle/shot)</h3>
              <div className="menu-items">
                <div className="menu-item">
                  <span className="item-name">Campari Bitter</span>
                  <span className="item-price">ETB 16,000 / 8,000 / 450</span>
                </div>
                <div className="menu-item">
                  <span className="item-name">Amarula cream</span>
                  <span className="item-price">ETB 15,000 / 7,500 / 450</span>
                </div>
                <div className="menu-item">
                  <span className="item-name">Baileys Irish cream</span>
                  <span className="item-price">ETB 15,000 / 7,500 / 450</span>
                </div>
                <div className="menu-item">
                  <span className="item-name">Josie Cuervo</span>
                  <span className="item-price">ETB 16,000 / 8,000 / 480</span>
                </div>
                <div className="menu-item">
                  <span className="item-name">Malibu</span>
                  <span className="item-price">ETB 16,000 / 8,000 / 480</span>
                </div>
                <div className="menu-item">
                  <span className="item-name">Patron sliver</span>
                  <span className="item-price">ETB 24,000 / 12,000 / 650</span>
                </div>
                <div className="menu-item">
                  <span className="item-name">Pernodparis</span>
                  <span className="item-price">ETB 17,000 / 8,500 / 450</span>
                </div>
                <div className="menu-item">
                  <span className="item-name">Remy martin</span>
                  <span className="item-price">ETB 29,000 / 14,500 / 750</span>
                </div>
                <div className="menu-item">
                  <span className="item-name">Hennessy</span>
                  <span className="item-price">ETB 32,000 / 16,000 / 850</span>
                </div>
                <div className="menu-item">
                  <span className="item-name">Patron café xo</span>
                  <span className="item-price">ETB 21,000 / 10,500 / 550</span>
                </div>
                <div className="menu-item">
                  <span className="item-name">Jagermeister</span>
                  <span className="item-price">ETB 15,000 / 7,500 / 450</span>
                </div>
                <div className="menu-item">
                  <span className="item-name">Capitain Morgan</span>
                  <span className="item-price">ETB 18,000 / 9,000 / 480</span>
                </div>
                <div className="menu-item">
                  <span className="item-name">Grey goose vodka</span>
                  <span className="item-price">ETB 17,000 / 8,500 / 500</span>
                </div>
                <div className="menu-item">
                  <span className="item-name">FernetBranca</span>
                  <span className="item-price">ETB 19,000 / 9,500 / 500</span>
                </div>
                <div className="menu-item">
                  <span className="item-name">Camino Tequila</span>
                  <span className="item-price">ETB 17,000 / 8,500 / 580</span>
                </div>
              </div>
            </div>

            <div className={`menu-list ${activeMenu !== 'juice' ? 'hidden' : ''}`}>
              <h3>Juice</h3>
              <div className="menu-items">
                <div className="menu-item">
                  <span className="item-name">Watermelon juice</span>
                  <span className="item-price">ETB 180</span>
                </div>
                <div className="menu-item">
                  <span className="item-name">Papaya juice</span>
                  <span className="item-price">ETB 180</span>
                </div>
                <div className="menu-item">
                  <span className="item-name">Mixed juice</span>
                  <span className="item-price">ETB 200</span>
                </div>
              </div>
            </div>

            <div className={`menu-list ${activeMenu !== 'cake' ? 'hidden' : ''}`}>
              <h3>Cake</h3>
              <div className="menu-items">
                <div className="menu-item">
                  <span className="item-name">English cake</span>
                  <span className="item-price">ETB 199.99</span>
                </div>
                <div className="menu-item">
                  <span className="item-name">Banana cake</span>
                  <span className="item-price">ETB 199.99</span>
                </div>
                <div className="menu-item">
                  <span className="item-name">Carrot cake</span>
                  <span className="item-price">ETB 199.99</span>
                </div>
                <div className="menu-item">
                  <span className="item-name">Crossant cake</span>
                  <span className="item-price">ETB 199.99</span>
                </div>
                <div className="menu-item">
                  <span className="item-name">Chocolate chips</span>
                  <span className="item-price">ETB 199.99</span>
                </div>
                <div className="menu-item">
                  <span className="item-name">Torta cake (Normal)</span>
                  <span className="item-price">ETB 2,500.00</span>
                </div>
                <div className="menu-item">
                  <span className="item-name">Torta cake (Marzipan)</span>
                  <span className="item-price">ETB 3,000.00</span>
                </div>
                <div className="menu-item">
                  <span className="item-name">Bombolino</span>
                  <span className="item-price">ETB 199.99</span>
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
            <div className="bank-qr-row">
              <div className="bank-info">
                <h3>CBE</h3>
                <div className="account-details">
                  <div className="account-item">
                    <label>Account Name:</label>
                    <div className="account-name-display">
                      <span className="account-name">Holiday Hotel PVT.LTD.CO</span>
                    </div>
                  </div>
                  <div className="account-item">
                    <label>Account Number:</label>
                    <div className="copy-container">
                      <span className="account-number">1000157421895</span>
                      <button className="copy-btn" onClick={() => navigator.clipboard.writeText('1000123456789')}>
                        <i className="fas fa-copy"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="qr-code">
                <h3>CBE QR</h3>
                <div className="qr-placeholder">
                  <img src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=1000157421895" alt="CBE QR Code" className="qr-image" />
                  <p>CBE</p>
                </div>
              </div>
            </div>
            
            <div className="bank-qr-row">
              <div className="bank-info">
                <h3>Abyssinia Bank</h3>
                <div className="account-details">
                  <div className="account-item">
                    <label>Account Name:</label>
                    <div className="account-name-display">
                      <span className="account-name">Holiday Hotel PVT.LTD.CO</span>
                    </div>
                  </div>
                  <div className="account-item">
                    <label>Account Number:</label>
                    <div className="copy-container">
                      <span className="account-number">36949333</span>
                      <button className="copy-btn" onClick={() => navigator.clipboard.writeText('3000112233445')}>
                        <i className="fas fa-copy"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="qr-code">
                <h3>Abyssinia QR</h3>
                <div className="qr-placeholder">
                  <img src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=3000112233445" alt="Abyssinia QR Code" className="qr-image" />
                  <p>Abyssinia Bank</p>
                </div>
              </div>
            </div>
            
            <div className="bank-qr-row">
              <div className="bank-info">
                <h3>Wogagen Bank</h3>
                <div className="account-details">
                  <div className="account-item">
                    <label>Account Name:</label>
                    <div className="account-name-display">
                      <span className="account-name">Holiday Hotel PVT.LTD.CO</span>
                    </div>
                  </div>
                  <div className="account-item">
                    <label>Account Number:</label>
                    <div className="copy-container">
                      <span className="account-number">5000998877665</span>
                      <button className="copy-btn" onClick={() => navigator.clipboard.writeText('5000998877665')}>
                        <i className="fas fa-copy"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="qr-code">
                <h3>Wogagen QR</h3>
                <div className="qr-placeholder">
                  <img src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=5000998877665" alt="Wogagen QR Code" className="qr-image" />
                  <p>Wogagen Bank</p>
                </div>
              </div>
            </div>
            
            <div className="bank-qr-row">
              <div className="bank-info">
                <h3>Anbessa Bank</h3>
                <div className="account-details">
                  <div className="account-item">
                    <label>Account Name:</label>
                    <div className="account-name-display">
                      <span className="account-name">Holiday Hotel PVT.LTD.CO</span>
                    </div>
                  </div>
                  <div className="account-item">
                    <label>Account Number:</label>
                    <div className="copy-container">
                      <span className="account-number">00100000070</span>
                      <button className="copy-btn" onClick={() => navigator.clipboard.writeText('2000987654321')}>
                        <i className="fas fa-copy"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="qr-code">
                <h3>Anbessa QR</h3>
                <div className="qr-placeholder">
                  <img src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=00100000070" alt="Anbessa QR Code" className="qr-image" />
                  <p>Anbessa Bank</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Receipt Attachment Section */}
      <section className="receipt-section-wrapper">
        <div className="receipt-section">
          <h3 className="receipt-title">Attach Payment Receipt</h3>
          <p className="receipt-description">
            After making your payment, please send the receipt screenshot to our Telegram account for verification.
          </p>
          <a 
            href="https://t.me/holiday_12345" 
            target="_blank" 
            rel="noopener noreferrer"
            className="telegram-link"
          >
            <i className="fab fa-telegram"></i>
            Send Receipt
          </a>
        </div>
      </section>
      
      {/* Footer Section */}
      <footer id="contact" className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h3>Contact Information</h3>
              <div className="contact-info">
                <p><i className="fas fa-map-marker-alt"></i> Haile Gebre Selassie Avenue, Addis Ababa</p>
                <p><i className="fas fa-phone"></i> +251116612627</p>
                <p><i className="fas fa-envelope"></i> holidayhoteladdis@gmail.com</p>
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
            <p>&copy; {new Date().getFullYear()} Holiday Hotel – All Rights Reserved</p>
          </div>
        </div>
      </footer>
    </>

  );
}
