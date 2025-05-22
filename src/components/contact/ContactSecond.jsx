import React from 'react';
import styles from './ContactSecond.module.css';
import { FaStar, FaMapMarkerAlt } from 'react-icons/fa';

const ContactSecond = () => {
  return (
    <div className={styles.contactSecondContainer}>
      <div className={styles.contactSecondContent}>
        <div className={styles.mapSection}>
          <div className={styles.mapContainer}>
            {/* Google Map Embed */}
            <iframe
              title="Scape Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.215209387036!2d-111.8762209241746!3d40.7587389713896!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8752f5138d57f8d5%3A0x8a4a4b4e0d9f5b5e!2s123%20Landscape%20Way%2C%20Salt%20Lake%20City%2C%20UT%2084101!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus"
              width="600"
              height="861"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              className={styles.map}
            ></iframe>
            
            {/* Map Info Card */}
            <div className={styles.mapInfoCard}>
              <h3>Scape</h3>
              <div className={styles.rating}>
                <span style={{ marginRight: '10px' }}>4.8</span>
                <div className={styles.stars}>
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className={i < 5 ? styles.starFilled : styles.starEmpty} />
                  ))}
                </div>
                <span>142 reviews</span>
              </div>
              <a 
                href="https://www.google.com/maps/place/123+Landscape+Way,+Salt+Lake+City,+UT+84101" 
                target="_blank" 
                rel="noopener noreferrer"
                className={styles.viewLargerLink}
              >
                <FaMapMarkerAlt /> View Larger Map
              </a>
            </div>
          </div>
        </div>
        
        <div className={styles.formSection}>
          <p className={styles.sectionSubtitle}>Our Contact</p>
          <h2 className={styles.sectionTitle}>Get a Free Quote Now!</h2>
          <p className={styles.sectionDescription}>
            Our award-winning team is dedicated to bringing your dream outdoor space to life, 
            offering both beauty and functionality with a warranty that guarantees satisfaction.
          </p>
          
          <form className={styles.contactForm}>
            <div className={styles.formRow}>
              <div className={styles.formGroup}>
                <input type="text" placeholder="First Name" required />
              </div>
              <div className={styles.formGroup}>
                <input type="email" placeholder="Email" required />
              </div>
            </div>
            
            <div className={styles.formRow}>
              <div className={styles.formGroup}>
                <input type="text" placeholder="Street Address" required />
              </div>
              <div className={styles.formGroup}>
                <input type="tel" placeholder="Phone Number" required />
              </div>
            </div>
            
            <div className={styles.formRow}>
              <div className={styles.formGroupFull}>
                <textarea placeholder="Comment" rows="5" required></textarea>
              </div>
            </div>
            
            <button type="submit" className={styles.submitButton}>
              GET MY FREE QUOTE
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactSecond;