'use client';
import Link from 'next/link';
import { useState } from 'react';
import '../style.css'; 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link href="/" className="navbar-logo">
          Sprinkle & Dash
        </Link>

       
        <div className="navbar-links">
          <Link href="/" className="navbar-link">SHOP</Link>
          <Link href="/about" className="navbar-link">ABOUT</Link>
          <Link href="/contact" className="navbar-link">CONTACT</Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="mobile-menu-button">
            {isOpen ? '✖' : '☰'}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="mobile-menu">
          <Link href="/" className="mobile-menu-link">SHOP</Link>
          <Link href="/about" className="mobile-menu-link">ABOUT</Link>
          <Link href="/contact" className="mobile-menu-link">CONTACT</Link>
        </div>
      )}

      {/* Horizontal line below the navbar */}
      <div className="separator" />
    </nav>
  );
};

export default Navbar;
