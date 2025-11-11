import React, { useEffect, useRef, useState } from 'react';
import styles from './ContainerFourth.module.css';
import { buildOptimizedUrl, IMAGE_ASSETS } from '../../utils/cloudinary';

const ContainerFourth = () => {
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
  const backgroundImageUrl = buildOptimizedUrl(IMAGE_ASSETS.gallery38, {
    quality: '80',
    format: 'auto'
  });

  const image35Url = buildOptimizedUrl(IMAGE_ASSETS.gallery35, {
    quality: '85',
    format: 'auto'
  });

  const image18Url = buildOptimizedUrl(IMAGE_ASSETS.gallery18, {
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
          <h2 className={styles.heading}>Your Vision, <span>Rendered</span></h2>
          <p className={styles.paragraph}>
            We go beyond traditional design—leveraging the latest 3D rendering capabilities to help you see every detail of your future landscape. Our collaborative process ensures your ideas are brought vividly to life, fostering trust and excitement before the first shovel breaks ground.
          </p>
        </div>

        {/* Right Section - Images */}
        <div className={styles.rightSection}>
          <div className={`${styles.imageContainer} ${isVisible ? styles.slideDown : ''}`}>
            <img
              src={image35Url}
              alt="3D pool rendering"
              className={styles.image}
              loading="lazy"
            />
          </div>
          <div className={`${styles.imageContainer} ${isVisible ? styles.slideUp : ''}`}>
            <img
              src={image18Url}
              alt="Pool design visualization"
              className={styles.image}
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContainerFourth;