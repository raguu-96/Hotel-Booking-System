import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3 className="footer-logo">HiStay</h3>
          <p className="footer-text">
            Lorem ipsum rent intraluna saskapet, har sor. Nin spem, nis prektig fade.
            Astronade inaskad polying edor är jugt. Digt georall et fagying.
          </p>
        </div>

        <div className="footer-section">
          <h4>Helpful Links</h4>
          <ul>
            <li>Overview</li>
            <li>Download Itinerary</li>
            <li>Price Details</li>
            <li>Itinerary</li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Top Destinations</h4>
          <ul>
            <li>Ooty</li>
            <li>Kodaikanal</li>
            <li>Wayanad</li>
            <li>Munnar</li>
            <li>Kottagiri</li>
            <li>Coorg</li>
            <li>Chikmagalur</li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Top Recommended</h4>
          <ul>
            <li>Ooty</li>
            <li>Kodaikanal</li>
            <li>Wayanad</li>
            <li>Munnar</li>
            <li>Kottagiri</li>
            <li>Coorg</li>
            <li>Chikmagalur</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-links">
          <a href="#">Privacy Policy</a> • <a href="#">Cancellation & Refund Policy</a>
        </div>
        <div className="footer-copyright">
          © HiStay 2024
        </div>
      </div>
    </footer>
  );
};

export default Footer;
