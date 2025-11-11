import React, { useEffect, useRef, useState } from 'react';
import styles from './ContainerThird.module.css';
import { buildOptimizedUrl, IMAGE_ASSETS } from '../../utils/cloudinary';

const ContainerThird = () => {
  const containerRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

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

  // Build optimized URLs
  const backgroundImageUrl = buildOptimizedUrl(IMAGE_ASSETS.asset4, {
    quality: '80',
    format: 'auto'
  });

  const image28Url = buildOptimizedUrl(IMAGE_ASSETS.gallery28, {
    quality: '85',
    format: 'auto'
  });

  const image29Url = buildOptimizedUrl(IMAGE_ASSETS.gallery29, {
    quality: '85',
    format: 'auto'
  });

  return (
    <div
      ref={containerRef}
      className={styles.container}
    >
      {/* Optimized Background Image */}
      <div 
        className={styles.backgroundImage}
        style={{ backgroundImage: `url(${backgroundImageUrl})` }}
      ></div>

      {/* Dark Overlay */}
      <div className={styles.videoOverlay}></div>

      <div className={styles.contentWrapper}>
        {/* Left Section - Text Content */}
        <div className={`${styles.leftSection} ${isVisible ? styles.fadeIn : ''}`}>
          <h2 className={styles.heading}>Award-Winning <span>Craft</span></h2>
          <p className={styles.subText}>Designs that Inspire Community</p>
          <p className={styles.paragraph}>
            Our team is honored to be recognized locally and internationally for transforming outdoor spaces into legacies.
          </p>
          <p className={styles.paragraph}>
            We push boundaries so your landscape becomes a gathering place.
          </p>
        </div>

        {/* Right Section - Optimized Images */}
        <div className={styles.rightSection}>
          <div className={`${styles.imageContainer} ${isVisible ? styles.slideDown : ''}`}>
            <img 
              src={image28Url} 
              alt="Award winning design" 
              className={styles.image} 
              loading="lazy"
            />
          </div>
          <div className={`${styles.imageContainer} ${isVisible ? styles.slideUp : ''}`}>
            <img 
              src={image29Url} 
              alt="Innovative pool design" 
              className={styles.image} 
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContainerThird;