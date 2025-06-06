import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './ContainerSecond.module.css';
import Asset10 from '../../assets/gallery/Asset10.jpg';
import Asset11 from '../../assets/gallery/Asset11.jpg';
import Asset12 from '../../assets/gallery/Asset12.jpg';

const ContainerSecond = () => {
  const containerRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      if (hasAnimated) return;

      const element = containerRef.current;
      const elementPosition = element.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (elementPosition < windowHeight * 0.75) {
        setIsVisible(true);
        setHasAnimated(true);
        window.removeEventListener('scroll', handleScroll);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [hasAnimated]);

  const handleTestimonialsClick = () => {
    navigate('/testimonials');
  };

  const handlePortfolioClick = () => {
    navigate('/portfolio');
  };

  return (
    <div
      ref={containerRef}
      className={styles.container}
      style={{ backgroundImage: `url(${Asset10})` }}
    >
      <div className={styles.contentWrapper}>
        {/* Left Section - Text Content */}
        <div className={`${styles.leftSection} ${isVisible ? styles.fadeIn : ''}`}>
          <h2 className={styles.heading}>Building <span>Connections</span></h2>
          <p className={styles.subText}>50+ years experience | Merged Excellence | Relationship-Driven Spaces.</p>
          <p className={styles.paragraph}>At scape, we believe landscapes are about more than beauty—they're about connecting people and creating memories.</p>
          <p className={styles.paragraph}>
            Our legacy, shaped by decades of partnership and innovation, stands for trust, transparency, and creative excellence. From intimate retreats to expansive estates, we design environments that inspire connection and reflect your unique vision.
          </p>
          <p 
            className={styles.smallText}
            onClick={handleTestimonialsClick}
            style={{ cursor: 'pointer', textDecoration: 'underline' }}
          >
            Hear from Our Clients
          </p>
          <p 
            className={styles.mediumText}
            onClick={handlePortfolioClick}
            style={{ cursor: 'pointer', textDecoration: 'underline' }}
          >
            scape Project Gallery
          </p>
        </div>

        {/* Right Section - Images */}
        <div className={styles.rightSection}>
          <div className={`${styles.imageContainer} ${isVisible ? styles.slideDown : ''}`}>
            <img
              src={Asset11}
              alt="Luxury landscape design"
              className={styles.image}
            />
          </div>
          <div className={`${styles.imageContainer} ${isVisible ? styles.slideUp : ''}`}>
            <img
              src={Asset12}
              alt="Modern pool design"
              className={styles.image}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContainerSecond;