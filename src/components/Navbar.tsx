import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from 'lucide-react';
import "../styles/navbar.css";
import "../index.css";



const Navbar = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const linkActivo = (path: string) => {
    return location.pathname === path
      ? "navbar-pages-active"
      : "navbar-pages-inactive";
  };

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="navbar-container">
      <div className="navbar-content">
        <Link to="/" className="navbar-logo">
          <img src="./favicon.ico" alt="Feeling Flow" />
        </Link>

        <button className="navbar-hamburger" onClick={handleMenuToggle}>
          <span className="hamburger-bar text-emotional-pink">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </span>
        </button>

        <div className={`navbar-menu ${isMenuOpen ? "open" : ""}`}>
          <div className="navbar-links">
            <Link to="/forum" className={linkActivo("/forum")}>
              Forum
            </Link>
            <Link to="/kit" className={linkActivo("/kit")}>
              Kit
            </Link>
          </div>

          <div className="navbar-icons">
            <Link to="/perfil" className="navbar-icon">
              <i className="user-icon" />
            </Link>
            <Link to="/carrito" className="navbar-icon">
              <i className="cart-icon" />
            </Link>
            <button className="logout-btn">
              <i className="logout-icon" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
