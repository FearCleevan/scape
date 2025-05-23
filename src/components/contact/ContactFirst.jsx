import React from 'react';
import styles from './ContactFirst.module.css';
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';

const ContactFirst = () => {
  const contactCards = [
    {
      icon: <FaMapMarkerAlt className={styles.contactIcon} />,
      title: 'Address',
      details: '1420 W. Center St.,\n Orem, UT 84057',
      link: 'https://shorturl.at/NyrbW'
    },
    {
      icon: <FaPhone className={styles.contactIcon} />,
      title: 'Phone',
      details: '1-801-319-1568\nMon-Fri: 8am-5pm',
      link: 'tel:8015551234'
    },
    {
      icon: <FaEnvelope className={styles.contactIcon} />,
      title: 'Email',
      details: 'info@scapedbm.com',
      link: 'https://mail.google.com/mail/?view=cm&fs=1&to=info@scapedbm.com'
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