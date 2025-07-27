import React from 'react';
import './Footer.css';

const Footer = () => (
  <footer className="footer">
    <div className="footer-content">
      <div className="footer-social">
        <a href="https://www.instagram.com/greensy_iontech/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="footer-icon-circle">
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="24" height="24" rx="12" fill="#27ae60"/><path d="M16.5 8.5C16.5 8.77614 16.2761 9 16 9C15.7239 9 15.5 8.77614 15.5 8.5C15.5 8.22386 15.7239 8 16 8C16.2761 8 16.5 8.22386 16.5 8.5Z" fill="white"/><rect x="8" y="8" width="8" height="8" rx="4" stroke="white" strokeWidth="1.5"/><rect x="3.75" y="3.75" width="16.5" height="16.5" rx="5.25" stroke="white" strokeWidth="1.5"/></svg>
        </a>
        <a href="https://www.linkedin.com/company/sun-tek-ecology" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="footer-icon-circle">
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="24" height="24" rx="12" fill="#27ae60"/><path d="M8.5 10.5V15.5" stroke="white" strokeWidth="1.5" strokeLinecap="round"/><circle cx="8.5" cy="8.5" r="1" fill="white"/><path d="M12 12.5V15.5" stroke="white" strokeWidth="1.5" strokeLinecap="round"/><path d="M12 12.5C12 11.3954 13.1193 10.5 14.5 10.5C15.8807 10.5 17 11.3954 17 12.5V15.5" stroke="white" strokeWidth="1.5" strokeLinecap="round"/></svg>
        </a>
        <a href="mailto:suntek-admin@suntek.com" className="footer-icon-circle" aria-label="Mail">
          <svg width="24" height="24" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><rect width="24" height="24" rx="12" fill="#27ae60"/><path d="M6 8.5l6 5 6-5" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><rect x="6" y="8" width="12" height="8" rx="2" stroke="#fff" strokeWidth="1.5"/></svg>
        </a>
      </div>
    </div>
    <div className="footer-bottom">
      <span>© {new Date().getFullYear()} Suntek</span>
    </div>
  </footer>
);

export default Footer; 