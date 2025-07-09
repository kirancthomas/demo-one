import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header className="hero-header">
      <div className="hero-content">
        <h1 className="hero-title">SOLID WASTE MANAGEMENT</h1>
        <img className="hero-image" src="/img1.jpg" alt="Banner" />
      </div>
      <div className="hero-overlay"></div>
    </header>
  );
};

export default Header;
