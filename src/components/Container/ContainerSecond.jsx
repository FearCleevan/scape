import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './ContainerSecond.module.css';
import { buildOptimizedUrl, IMAGE_ASSETS } from '../../utils/cloudinary';

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

  // Build optimized URLs
  const backgroundImageUrl = buildOptimizedUrl(IMAGE_ASSETS.gallery10, {
    quality: '80',
    format: 'auto'
  });

  const image11Url = buildOptimizedUrl(IMAGE_ASSETS.gallery11, {
    quality: '85',
    format: 'auto'
  });

  const image12Url = buildOptimizedUrl(IMAGE_ASSETS.gallery12, {
    quality: '85',
    format: 'auto'
  });

  return (
    <div
      ref={containerRef}
      className={styles.container}
      style={{ backgroundImage: `url(${backgroundImageUrl})` }}
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
              src={image11Url}
              alt="Luxury landscape design"
              className={styles.image}
              loading="lazy"
            />
          </div>
          <div className={`${styles.imageContainer} ${isVisible ? styles.slideUp : ''}`}>
            <img
              src={image12Url}
              alt="Modern pool design"
              className={styles.image}
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContainerSecond;