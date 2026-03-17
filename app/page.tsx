'use client';

import Script from 'next/script';
import Header from '../components/Header';
import Hero from '../components/Hero';
import MenuSection from '../components/MenuSection';
import PaymentSection from '../components/PaymentSection';
import Footer from '../components/Footer';
import ErrorBoundary from '../components/ErrorBoundary';
import './globals.css';

export default function Home() {
  const handleNavClick = (targetId: string) => {
    const target = document.querySelector(targetId);
    if (target) {
      const offsetTop = (target as HTMLElement).offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  const handleMenuClick = () => {
    handleNavClick('#menu');
  };

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Hotel",
    "name": "Holiday Hotel",
    "description": "Best Hotel in Addis Ababa, Ethiopia Since 1986. Premium accommodation, restaurant, and dining experience.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Haile Gebre Selassie Avenue",
      "addressLocality": "Addis Ababa",
      "addressCountry": "Ethiopia"
    },
    "telephone": "+251116612627",
    "email": "holidayhoteladdis@gmail.com",
    "url": "https://holidayhotel.et",
    "foundingDate": "1986",
    "servesCuisine": ["Ethiopian", "International", "Indian", "Italian"],
    "priceRange": "$$",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.5",
      "reviewCount": "150"
    },
    "sameAs": [
      "https://www.facebook.com/holidayhotel",
      "https://www.instagram.com/holidayhotel"
    ]
  };

  return (
    <ErrorBoundary>
      <>
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <Script
          src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/js/all.min.js"
          strategy="afterInteractive"
        />
        
        <Header onNavClick={handleNavClick} />
        <Hero onMenuClick={handleMenuClick} />
        <MenuSection onNavClick={handleNavClick} />
        <PaymentSection />
        <Footer />
      </>
    </ErrorBoundary>
  );
}
