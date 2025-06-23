import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/navbar.css";

const logo = "/favicon.ico";

const Navbar = () => {
  
  const location = useLocation();
  const linkActivo = (path: string) => {
    return location.pathname === path ? "navbar-pages-active" : "navbar-pages-inactive";
  }

  
  return (
    <div className="navbar-container">
      <div className="navbar-content">
        <Link to="/" className="navbar-logo">
          <img src={logo} alt="Feeling Flow" />
        </Link>

        <div className="navbar-links">
          <Link
            to="/forum"
            className={linkActivo("/forum")}
          >
            Forum
          </Link>
          <Link
            to="/kit"
            className={linkActivo("/kit")}
          >
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
  );
};

export default Navbar;
