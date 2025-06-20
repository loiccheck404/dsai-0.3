import React from "react";

const Footer = () => (
  <footer>
    <div className="container">
      <div className="footer-main">
        <div className="footer-column">
          <div className="logo">Mr Trappy's</div>
          <p className="tagline">Empowering Your Wellness Journey</p>
        </div>
        <div className="footer-column">
          <h4>Quick Links</h4>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Products</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Stay in the Loop</h4>
          <form className="newsletter-form">
            <input type="email" placeholder="Your email" required />
            <button type="submit">Subscribe</button>
          </form>
        </div>
        <div className="footer-column">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <a href="#">📷</a>
            <a href="#">💼</a>
            <a href="#">🐦</a>
            <a href="#">📺</a>
          </div>
        </div>
      </div>
      <div className="copyright">
        <p>© 2025 Mr Trappy's. All rights reserved.</p>
        <div className="footer-links">
          <a href="#">Privacy Policy</a> | <a href="#">Terms of Service</a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
