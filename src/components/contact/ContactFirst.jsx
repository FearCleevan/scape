import React from 'react';
import styles from './ContactFirst.module.css';
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';

const ContactFirst = () => {
  const contactCards = [
    {
      icon: <FaMapMarkerAlt className={styles.contactIcon} />,
      title: 'Address',
      details: '123 Landscape Way\nSalt Lake City, UT 84101',
      link: 'https://maps.google.com'
    },
    {
      icon: <FaPhone className={styles.contactIcon} />,
      title: 'Phone',
      details: '(801) 555-1234\nMon-Fri: 8am-5pm',
      link: 'tel:8015551234'
    },
    {
      icon: <FaEnvelope className={styles.contactIcon} />,
      title: 'Email',
      details: 'info@scapedbim.com\nsupport@scapedbim.com',
      link: 'mailto:info@scapedbim.com'
    }
  ];

  return (
    <div className={styles.contactContainer}>
      <div className={styles.contactContent}>
        <div className={styles.contactCards}>
          {contactCards.map((card, index) => (
            <a 
              key={index} 
              href={card.link} 
              className={styles.contactCard}
              target="_blank" 
              rel="noopener noreferrer"
            >
              <div className={styles.cardContent}>
                {card.icon}
                <h3>{card.title}</h3>
                <p>{card.details}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactFirst;