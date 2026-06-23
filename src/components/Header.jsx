import React, { useEffect, useState } from 'react';
import './Header.css';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${scrolled ? 'glass header-scrolled' : ''}`}>
      <div className="container header-container">
        <div className="logo-group">
          <img src="/assets/title.png" alt="0pinion" className="title-img" />
        </div>
        <nav className="nav">
          <a href="#features" className="nav-link">Platform</a>
          <a href="#community" className="nav-link">Community</a>
          <a href="#join" className="btn btn-secondary btn-sm">Enter App</a>
        </nav>
      </div>
    </header>
  );
}
