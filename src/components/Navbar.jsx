/*import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">HISTAY</div>
      <ul className="nav-links">
        <li>Home</li>
        <li>About Us</li>
        <li>Destination</li>
        <li>Packages</li>
        <li>Contact Us</li>
      </ul>
      <div className="guest">
      <button>Hi, Guest</button>
      </div>
    </nav>
  );
};

export default Navbar; */
import React from 'react';
import './Navbar.css'; // Import the CSS file
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">  
         HISTAY
      </div>
      <ul className="menu">
        <li><a href="#">HOME</a></li>
        <li><a href="#">ABOUT US</a></li>
        <li><a href="#">DESTINATION</a></li>
        <li><a href="#">PACKAGES</a></li>
        <li><a href="#">CONTACT US</a></li>
      </ul>
      <button className="book-button">BOOK NOW</button>
    </nav>
  );
};
export default Navbar;