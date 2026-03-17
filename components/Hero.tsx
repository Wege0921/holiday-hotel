interface HeroProps {
  onMenuClick: () => void;
}

export default function Hero({ onMenuClick }: HeroProps) {
  return (
    <section id="home" className="hero">
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <button 
          className="hero-title-btn"
          onClick={onMenuClick}
        >
          Hotel Menu
        </button>
        <p className="hero-tagline">Best Hotel in Addis Ababa, Ethiopia Since 1986</p>
      </div>
    </section>
  );
}
