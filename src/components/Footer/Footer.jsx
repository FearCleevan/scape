import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Footer.module.css';
import { FaLinkedin, FaTwitter, FaGithub, } from 'react-icons/fa';
import ScapeLogo from '../../assets/images/ScapeLogoW.png';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerSection}>
          <div className={styles.logoContainer}>
            <img src={ScapeLogo} alt="SCAPE Logo" className={styles.logo} />
          </div>
          <p className={styles.footerText}>
            Scape emerged from the 2025 merger of Peak Property Services and KC Property Services, combining 50+ years of Wasatch Front landscape expertise. Co-founders Steve Mortensen and Kent Christensen united their knowledge to deliver innovative outdoor spaces blending functionality and aesthetics.
          </p>
        </div>

        <div className={styles.footerSection}>
          <h4 className={styles.footerSubtitle}>Navigation</h4>
          <ul className={styles.footerLinks}>
            <li><Link to="/team" className={styles.footerLink}>About Us</Link></li>
            <li><Link to="/services" className={styles.footerLink}>Services</Link></li>
            <li><Link to="/portfolio" className={styles.footerLink}>Portfolio</Link></li>
            <li><Link to="/social" className={styles.footerLink}>Social Media</Link></li>
            <li><Link to="/contact" className={styles.footerLink}>Contact Us</Link></li>
            <li><Link to="/faq" className={styles.footerLink}>FAQ</Link></li>
          </ul>
        </div>



        <div className={styles.footerSection}>
          <h4 className={styles.footerSubtitle}>Connect With Us</h4>
          <div className={styles.socialIcons}>
            <a href="https://linkedin.com" aria-label="LinkedIn" className={styles.socialLink}>
              <FaLinkedin className={styles.icon} />
            </a>
            <a href="https://twitter.com" aria-label="Twitter" className={styles.socialLink}>
              <FaTwitter className={styles.icon} />
            </a>
            <a href="https://github.com" aria-label="GitHub" className={styles.socialLink}>
              <FaGithub className={styles.icon} />
            </a>
          </div>
          <div className={styles.contactInfo}>
            <p>Email: info@scapedbm.com</p>
            <p>Phone: 1-801-319-1568</p>
            <p>Address: 1420 W. Center St., Orem, UT 84057</p>
          </div>
        </div>

        <div className={styles.footerSection}>
          <h4 className={styles.footerSubtitle}>Newsletter</h4>
          <p className={styles.newsletterText}>Subscribe our newsletter & get all latest news.</p>
          <div className={styles.newsletterForm}>
            <input
              type="email"
              placeholder="Your Email"
              className={styles.newsletterInput}
            />
            <button type="submit" className={styles.newsletterButton}>
              Subscribe
            </button>
          </div>
        </div>
      </div>

      <div className={styles.footerBottom}>
        <p>&copy; {new Date().getFullYear()} SCAPE. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;