import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa'; 
import { Link } from 'react-router-dom';
import '../Asserts/Css/Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="social-media">
          <a href="#" className="social-link">
            <FaFacebook />
          </a>
          <a href="#" className="social-link">
            <FaTwitter />
          </a>
          <a href="#" className="social-link">
            <FaInstagram />
          </a>
        </div>
        <div className="footer-links">
          <Link to="/terms" className="footer-link">
            @PrivacyPolicy2023
          </Link>
          <Link to="/tc" className="footer-link">
            @TermsConditions
          </Link>
          <Link to="/faq" className="footer-link">
            @FAQ
          </Link>
        </div>
        <div className="copyright">
          &copy; {new Date().getFullYear()} Digital Dining Restaurant. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
