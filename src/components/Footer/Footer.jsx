import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Footer.module.css';
import {
  FaLinkedin,
  FaTwitter,
  FaFacebook,
  FaInstagram,
} from 'react-icons/fa';
import ScapeLogo from '../../assets/images/ScapeLogoW.png';

const Footer = () => {

  const handleSubmit = (e) => {
    e.preventDefault()
    const url="https://script.google.com/macros/s/AKfycbw6Gdm-1tjSLoO6c9TFsjxpWcBqBJOiphq0A-gE2lzxxEa3VBqOTmmrxJK7_9tzle8b/exec"
    fetch(url,{
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: (`Email=${e.target.email.value}`)
    }).then(res => res.text()).then(data => {
      alert(data)
    }).catch(error => console.log(error));
  }

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerSection}>
          <div className={styles.logoContainer}>
            <Link to="/">
              <img src={ScapeLogo} alt="SCAPE Logo" className={styles.logo} />
            </Link>
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
            {/* <li><Link to="/social" className={styles.footerLink}>Social Media</Link></li> */}
            <li><Link to="/contact" className={styles.footerLink}>Contact Us</Link></li>
            <li><Link to="/faq" className={styles.footerLink}>FAQ</Link></li>
          </ul>
        </div>

        <div className={styles.footerSection}>
          <h4 className={styles.footerSubtitle}>Connect With Us</h4>
          <div className={styles.socialIcons}>
            <a href="https://facebook.com" aria-label="Facebook" className={styles.socialLink} target="_blank" rel="noopener noreferrer">
              <FaFacebook className={styles.icon} />
            </a>
            <a href="https://linkedin.com" aria-label="LinkedIn" className={styles.socialLink} target="_blank" rel="noopener noreferrer">
              <FaLinkedin className={styles.icon} />
            </a>
            <a href="https://twitter.com" aria-label="Twitter" className={styles.socialLink} target="_blank" rel="noopener noreferrer">
              <FaTwitter className={styles.icon} />
            </a>
            <a href="https://instagram.com" aria-label="Instagram" className={styles.socialLink} target="_blank" rel="noopener noreferrer">
              <FaInstagram className={styles.icon} />
            </a>
          </div>
          <div className={styles.contactInfo}>
            <p>
              Email:
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=info@scapedbm.com"
                className={styles.footerLink}
                target="_blank"
                rel="noopener noreferrer"
                style={{ marginLeft: 5 }}
              >
                info@scapedbm.com
              </a>
            </p>
            <p>
              Phone:
              <a
                href="tel:18013191568"
                className={styles.footerLink}
                style={{ marginLeft: 5 }}
              >
                1-801-319-1568
              </a>
            </p>
            <p>
              Address:
              <a
                href="https://maps.google.com/?q=1420+W.+Center+St.,+Orem,+UT+84057"
                className={styles.footerLink}
                target="_blank"
                rel="noopener noreferrer"
                style={{ marginLeft: 5 }}
              >
                1420 W. Center St., Orem, UT 84057
              </a>
            </p>
          </div>
        </div>

        <div className={styles.footerSection}>
          <h4 className={styles.footerSubtitle}>Newsletter</h4>
          <p className={styles.newsletterText}>Subscribe our newsletter & get all latest news.</p>
          <form onSubmit={handleSubmit}>
            <div className={styles.newsletterForm}>
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                className={styles.newsletterInput}
              />
              <button className={styles.newsletterButton}>
                Subscribe
              </button>
            </div>
          </form>
        </div>
      </div>

      <div className={styles.footerBottom}>
        <p>&copy; {new Date().getFullYear()} SCAPE. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;