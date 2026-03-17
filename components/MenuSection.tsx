'use client';

import { useState, useEffect } from 'react';
import { menuData, MenuItem } from '../data/menu-data';
import LoadingSpinner from './LoadingSpinner';
import MenuList from './MenuList';

interface MenuSectionProps {
  onNavClick: (targetId: string) => void;
}

export default function MenuSection({ onNavClick }: MenuSectionProps) {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [activeFoodMenu, setActiveFoodMenu] = useState<string | null>(null);
  const [activeAlcoholicMenu, setActiveAlcoholicMenu] = useState<string | null>(null);
  const [activeItem, setActiveItem] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleMenuClick = async (category: string) => {
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
    
    // Show loading state for menu data
    if (category !== 'food' && category !== 'alcoholic') {
      setIsLoading(true);
      // Simulate loading delay for better UX
      await new Promise(resolve => setTimeout(resolve, 300));
      setIsLoading(false);
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

  const toggleItemDetails = (itemId: string) => {
    setActiveItem(activeItem === itemId ? null : itemId);
  };

  const renderMenuItem = (item: MenuItem, index: number, category: string) => {
    const itemId = `${category}-${index}`;
    const hasDetails = item.description || item.weight || item.prep || item.sides;
    const isExpanded = activeItem === itemId;
    
    return (
      <div 
        key={index} 
        className={`menu-item ${hasDetails ? 'clickable' : ''}`}
        onClick={hasDetails ? () => toggleItemDetails(itemId) : undefined}
      >
        <div className="item-main">
          <span className="item-name">
            {item.name}
            {hasDetails && (
              <i 
                className={`fas fa-chevron-down dropdown-icon ${isExpanded ? 'expanded' : ''}`}
              ></i>
            )}
          </span>
          <span className="item-price">{item.price}</span>
        </div>
        {hasDetails && (
          <div className={`item-details ${isExpanded ? 'show' : ''}`}>
            {item.description && (
              <p className="item-description">{item.description}</p>
            )}
            {(item.weight || item.prep || item.sides) && (
              <div className="item-details-info">
                {item.weight && (
                  <span className="detail-item">Weight: <span className="detail-value">{item.weight}</span></span>
                )}
                {item.prep && (
                  <span className="detail-item">Prep: <span className="detail-value">{item.prep}</span></span>
                )}
                {item.sides && (
                  <span className="detail-item">Sides: <span className="detail-value">{item.sides}</span></span>
                )}
              </div>
            )}
          </div>
        )}
      </div>
    );
  };

  const renderMenuList = (category: string, menuData: any) => {
    if (!menuData[category]) return null;
    
    return (
      <MenuList
        category={category}
        menuData={menuData}
        activeFoodMenu={activeFoodMenu}
        activeMenu={activeMenu}
        renderMenuItem={renderMenuItem}
      />
    );
  };

  return (
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
            {['breakfast', 'beef', 'chicken', 'pasta', 'fish', 'indian', 'ethiopian', 'snacks', 'pizza', 'soup', 'salad', 'dessert'].map(category => (
              <button 
                key={category}
                className={`submenu-btn ${activeFoodMenu === category ? 'active' : ''}`}
                onClick={() => handleMenuClick(category)}
              >
                <span className="btn-icon">
                  {category === 'breakfast' && '🍳'}
                  {category === 'beef' && '🥩'}
                  {category === 'chicken' && '🍗'}
                  {category === 'pasta' && '🍝'}
                  {category === 'fish' && '🐟'}
                  {category === 'indian' && '🍛'}
                  {category === 'ethiopian' && '🫒'}
                  {category === 'snacks' && '🥪'}
                  {category === 'pizza' && '🍕'}
                  {category === 'soup' && '🍲'}
                  {category === 'salad' && '🥗'}
                  {category === 'dessert' && '🍰'}
                </span>
                <span>{menuData[category as keyof typeof menuData]?.title.replace(' and Rice', '')}</span>
              </button>
            ))}
          </div>
          
          <button 
            className={`menu-btn ${activeMenu === 'non-alcoholic' ? 'active' : ''}`}
            onClick={() => handleMenuClick('nonAlcoholic')}
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
            {['wine', 'beer', 'whisky', 'vodka', 'gin', 'liqueur'].map(category => (
              <button 
                key={category}
                className={`submenu-btn ${activeAlcoholicMenu === category ? 'active' : ''}`}
                onClick={() => handleMenuClick(category)}
              >
                <span className="btn-icon">
                  {category === 'wine' && '🍷'}
                  {category === 'beer' && '🍺'}
                  {category === 'whisky' && '🥃'}
                  {category === 'vodka' && '🫙'}
                  {category === 'gin' && '🍸'}
                  {category === 'liqueur' && '🥃'}
                </span>
                <span>{menuData[category as keyof typeof menuData]?.title.split(' ')[0]}</span>
              </button>
            ))}
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
          {isLoading ? (
            <LoadingSpinner />
          ) : (
            <>
              {/* Food Categories */}
              {renderMenuList('beef', menuData)}
              {renderMenuList('chicken', menuData)}
              {renderMenuList('pasta', menuData)}
              {renderMenuList('fish', menuData)}
              {renderMenuList('indian', menuData)}
              {renderMenuList('ethiopian', menuData)}
              {renderMenuList('snacks', menuData)}
              {renderMenuList('pizza', menuData)}
              {renderMenuList('soup', menuData)}
              {renderMenuList('salad', menuData)}
              {renderMenuList('breakfast', menuData)}
              {renderMenuList('dessert', menuData)}
              
              {/* Beverage Categories */}
              {renderMenuList('nonAlcoholic', menuData)}
              {renderMenuList('hot', menuData)}
              
              {/* Alcoholic Categories */}
              {renderMenuList('wine', menuData)}
              {renderMenuList('beer', menuData)}
              {renderMenuList('whisky', menuData)}
              {renderMenuList('vodka', menuData)}
              {renderMenuList('gin', menuData)}
              {renderMenuList('liqueur', menuData)}
              
              {/* Other Categories */}
              {renderMenuList('juice', menuData)}
              {renderMenuList('cake', menuData)}
            </>
          )}
        </div>
      </div>
    </section>
  );
}
