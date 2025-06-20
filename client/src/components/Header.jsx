import React from "react";

const Header = () => (
  <header>
    <div className="container">
      <div className="header-top">
        <div className="logo">Mr Trappy's</div>
        <div className="header-buttons">
          <div className="btn btn-outline">Login</div>
          <div className="cart-btn">
            🛒
            <span className="cart-badge">0</span>
          </div>
          <div className="btn btn-primary">Order Now</div>
        </div>
      </div>

      <div className="search-bar">
        <input type="text" placeholder="Search products..." />
        <button>🔍</button>
      </div>

      <nav>
        <ul>
          <li>
            <a href="#featured-section" className="active">
              Featured Products
            </a>
          </li>
          <li>
            <a href="#pharma">Pharma</a>
          </li>
          <li>
            <a href="#pre-rolls">Pre-rolls</a>
          </li>
        </ul>
      </nav>
    </div>
  </header>
);

export default Header;
