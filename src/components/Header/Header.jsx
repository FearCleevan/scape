import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes, FaChevronDown, FaChevronUp } from 'react-icons/fa';
import styles from './Header.module.css';
import logo from '../../assets/images/ScapeLogoW.png';
import GetQuote from '../getquote/GetQuote';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const location = useLocation();

  const toggleDropdown = (name) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  const menuItems = [
    { path: '/', name: 'Home' },
    { 
      name: 'About Us',
      submenu: [
        { path: '/team', name: 'Team' },
        { path: '/testimonials', name: 'Testimonials' },
      ]
    },
    { 
      name: 'Services',
      submenu: [
        { path: '/services', name: 'Services' },
        { path: '/services/landscape', name: 'Landscape' },
        { path: '/services/hardscape', name: 'Hardscape' },
        { path: '/services/softscape', name: 'Softscape' },
        { path: '/services/poolscape', name: 'Poolscape' },
        { path: '/services/nightscape', name: 'Nightscape' },
        { path: '/services/waterscape', name: 'Waterscape' },
        { path: '/services/firescape', name: 'Firescape' },
        { path: '/services/courtscape', name: 'Courtscape' }
      ]
    },
    { path: '/portfolio', name: 'Portfolio' },
    { path: '/social', name: 'Social Media' },
    { path: '/contact', name: 'Contact Us' },
    { path: '/faq', name: 'FAQ' }
  ];

  const closeAllMenus = () => {
    setIsMenuOpen(false);
    setOpenDropdown(null);
  };

  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        <Link to="/" className={styles.logo}>
          <img src={logo} alt="SCAPEDBIM Logo" className={styles.logoImage} />
        </Link>
      </div>

      <div className={styles.tagline}>
        Designing Landscapes that Build Relationships
      </div>

      <button 
        className={styles.menuButton}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle menu"
      >
        {isMenuOpen ? <FaTimes /> : <FaBars />}
      </button>

      {isMenuOpen && (
        <div 
          className={styles.navOverlay} 
          onClick={closeAllMenus}
        />
      )}

      <nav className={`${styles.nav} ${isMenuOpen ? styles.navOpen : ''}`}>
        <ul className={styles.navList}>
          {menuItems.map((item) => (
            <li key={item.path || item.name}>
              {item.submenu ? (
                <div className={styles.dropdown}>
                  <button 
                    className={`${styles.navLink} ${styles.dropdownToggle} ${
                      item.submenu.some(subItem => location.pathname === subItem.path) ? styles.active : ''
                    }`}
                    onClick={() => toggleDropdown(item.name)}
                  >
                    {item.name}
                    {openDropdown === item.name ? 
                      <FaChevronUp className={styles.dropdownIcon} /> : 
                      <FaChevronDown className={styles.dropdownIcon} />
                    }
                  </button>
                  <ul className={`${styles.dropdownMenu} ${openDropdown === item.name ? styles.dropdownOpen : ''}`}>
                    {item.submenu.map((subItem) => (
                      <li key={subItem.path}>
                        <Link
                          to={subItem.path}
                          className={`${styles.navLink} ${styles.dropdownLink} ${
                            location.pathname === subItem.path ? styles.active : ''
                          }`}
                          onClick={closeAllMenus}
                        >
                          {subItem.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : (
                <Link
                  to={item.path}
                  className={`${styles.navLink} ${
                    location.pathname === item.path ? styles.active : ''
                  }`}
                  onClick={closeAllMenus}
                >
                  {item.name}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </nav>
      <GetQuote />
    </header>
  );
};

export default Header;