import { useState, useEffect } from 'react';
import { smoothScrollTo } from '../utils/smoothScroll';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleClick = (id) => {
    setMenuOpen(false);
    smoothScrollTo(id);
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-content">
        <a href="#" className="logo" onClick={(e) => { e.preventDefault(); smoothScrollTo('home'); }}>
          <div className="logo-icon">rZ</div>
          Ricoz
        </a>

        <button className="mobile-menu-btn" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? '✕' : '☰'}
        </button>

        <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <a
            href="#contact"
            className="btn btn-outline"
            onClick={(e) => {
              e.preventDefault();
              handleClick('contact');
            }}
          >
            Get in Touch
          </a>

          <a
            href="#franchise"
            className="btn btn-primary"
            onClick={(e) => {
              e.preventDefault();
              handleClick('franchise');
            }}
          >
            Become a Franchise Partner
          </a>

          <a
            href="#login"
            className="btn btn-ghost"
            onClick={(e) => {
              e.preventDefault();
              handleClick('login');
            }}
          >
            Franchise Login
          </a>
        </div>
      </div>
    </nav>
  );
}