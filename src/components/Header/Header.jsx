import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes, FaChevronDown, FaChevronUp, FaArrowUp } from 'react-icons/fa';
import styles from './Header.module.css';
import logo from '../../assets/images/ScapeLogoW.png';
import GetQuote from '../getquote/GetQuote';

const SERVICE_COLORS = {
  landscape: '#8B5B29',
  hardscape: '#97999B',
  softscape: '#6CC24A',
  poolscape: '#0072CE',
  nightscape: '#F7EA48',
  waterscape: '#8BB8E8',
  firescape: '#FE5000',
  courtscape: '#FF914D',
};

function getColoredServiceMenuTitle(title) {
  // Always split at first "scape"
  const t = title.toLowerCase();
  const idx = t.indexOf('scape');
  if (idx === -1) return title; // fallback
  const first = t.slice(0, idx);
  const second = t.slice(idx);
  const color = SERVICE_COLORS[t] || '#fff';
  return (
    <>
      <span style={{ color, textTransform: 'lowercase' }}>{first}</span>
      <span style={{ color: '#fff', textTransform: 'lowercase' }}>{second}</span>
    </>
  );
}

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const [showArrowUp, setShowArrowUp] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
      setShowArrowUp(window.scrollY > 200);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleArrowUpClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

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
        { path: '/services', name: 'services' },
        { path: '/services/landscape', name: 'landscape' },
        { path: '/services/hardscape', name: 'hardscape' },
        { path: '/services/softscape', name: 'softscape' },
        { path: '/services/poolscape', name: 'poolscape' },
        { path: '/services/nightscape', name: 'nightscape' },
        { path: '/services/waterscape', name: 'waterscape' },
        { path: '/services/firescape', name: 'firescape' },
        { path: '/services/courtscape', name: 'courtscape' }
      ]
    },
    { path: '/portfolio', name: 'Portfolio' },
    // { path: '/social', name: 'Social Media' },
    { path: '/contact', name: 'Contact Us' },
    { path: '/faq', name: 'FAQ' }
  ];

  const closeAllMenus = () => {
    setIsMenuOpen(false);
    setOpenDropdown(null);
  };

  return (
    <>
      <header className={styles.header}>
        <div className={styles.logoContainer}>
          <Link to="/" className={styles.logo}>
            <img src={logo} alt="SCAPEDBIM Logo" className={styles.logoImage} />
          </Link>
        </div>

        <div className={`${styles.tagline} ${scrolled ? styles.taglineHidden : ''}`}>
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
                      className={`${styles.navLink} ${styles.dropdownToggle} ${item.submenu.some(subItem => location.pathname === subItem.path) ? styles.active : ''
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
                            className={`${styles.navLink} ${styles.dropdownLink} ${location.pathname === subItem.path ? styles.active : ''
                              }`}
                            onClick={closeAllMenus}
                            style={
                              subItem.name.endsWith('scape') && subItem.name !== 'services'
                                ? { textTransform: 'lowercase', fontWeight: 500, fontSize: "1.13rem" }
                                : {}
                            }
                          >
                            {subItem.name.endsWith('scape') && subItem.name !== 'services'
                              ? getColoredServiceMenuTitle(subItem.name)
                              : subItem.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : (
                  <Link
                    to={item.path}
                    className={`${styles.navLink} ${location.pathname === item.path ? styles.active : ''
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
      {/* Floating Arrow Up */}
      <button
        className={`${styles.floatingArrowUp} ${showArrowUp ? styles.visible : ''}`}
        onClick={handleArrowUpClick}
        aria-label="Scroll to top"
      >
        <FaArrowUp />
      </button>
    </>
  );
};

export default Header;