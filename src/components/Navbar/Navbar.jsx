import { useState } from 'react';
import ThemeToggle from '../ThemeToggle/ThemeToggle';
import '../../styles/Navbar.css';

const Navbar = ({ isDarkTheme, toggleTheme }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <nav id="desktop-nav">
        <div className="logo">KAVUSIKAN JK</div>
        <div className="desktop-nav-right">
          <ul className="nav-links">
            <li><a href="#about">About</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
          <ThemeToggle isDarkTheme={isDarkTheme} toggleTheme={toggleTheme} />
        </div>
      </nav>
      <nav id="hamburger-nav">
        <div className="hamburger-nav-container">
          <div className="logo">KAVUSIKAN JK</div>
          <ThemeToggle isDarkTheme={isDarkTheme} toggleTheme={toggleTheme} />
          <div className="hamburger-menu">
            <div className={`hamburger-icon ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div className={`menu-links ${menuOpen ? 'open' : ''}`}>
              <li><a href="#about" onClick={toggleMenu}>About</a></li>
              <li><a href="#experience" onClick={toggleMenu}>Experience</a></li>
              <li><a href="#projects" onClick={toggleMenu}>Projects</a></li>
              <li><a href="#contact" onClick={toggleMenu}>Contact</a></li>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;