import React, { useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from './images/greensy.png';
import './Navbar.css';

const Navbar = ({ lang, setLang, translations }) => {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const location = useLocation();
  const rippleRefs = useRef({});

  const handleBurgerClick = () => {
    setMenuOpen((open) => !open);
  };

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  const handleRipple = (e, to) => {
    const btn = rippleRefs.current[to];
    if (!btn) return;
    const ripple = document.createElement('span');
    ripple.className = 'liquid-ripple';
    const rect = btn.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;
    ripple.style.width = ripple.style.height = `${size}px`;
    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;
    btn.appendChild(ripple);
    ripple.addEventListener('animationend', () => {
      ripple.remove();
    });
  };

  const navLinks = [
    { to: '/', label: translations[lang].nav['Ana Sayfa'] },
    { to: '/urun', label: translations[lang].nav['Teknolojimiz'] },
    { to: '/kullanim-alanlari', label: translations[lang].nav['Kullanım Alanları'] },
    { to: '/hakkimizda', label: translations[lang].nav['Hakkımızda'] },
    { to: '/sss', label: translations[lang].nav['SSS'] },
    { to: '/iletisim', label: translations[lang].nav['İletişim'] }
  ];

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="Logo" />
      </div>
      <button className={`burger-menu${menuOpen ? ' open' : ''}`} onClick={handleBurgerClick} aria-label="Menüyü Aç/Kapat">
        <span></span>
        <span></span>
        <span></span>
      </button>
      <ul className={`navbar-links${menuOpen ? ' open' : ''}`}>
        {navLinks.map(link => (
          <li key={link.to}>
            <Link
              to={link.to}
              onClick={e => { handleRipple(e, link.to); handleLinkClick(); }}
              className={location.pathname === link.to ? 'active' : ''}
              ref={el => (rippleRefs.current[link.to] = el)}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
      {/* Masaüstünde ve mobilde menü kapalıyken sağda göster */}
      <div className="navbar-lang-btn navbar-lang-desktop" aria-label="Dil seçimi" style={{ display: menuOpen ? 'none' : 'flex' }}>
        <button
          className={`lang-btn${lang === 'tr' ? ' selected' : ''}`}
          onClick={() => setLang('tr')}
          aria-pressed={lang === 'tr'}
        >
          TR
        </button>
        <span className="lang-divider">|</span>
        <button
          className={`lang-btn${lang === 'en' ? ' selected' : ''}`}
          onClick={() => setLang('en')}
          aria-pressed={lang === 'en'}
        >
          EN
        </button>
      </div>
    </nav>
  );
};

export default Navbar; 