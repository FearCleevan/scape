import React, { useEffect, useRef, useState } from 'react';
import styles from './ContainerFifth.module.css';
import { useNavigate } from 'react-router-dom';
import { buildOptimizedUrl, IMAGE_ASSETS } from '../../utils/cloudinary';

const ContainerFifth = () => {
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

  const handleGetStarted = () => {
    navigate('/contact');
  };

  // Build optimized URLs
  const backgroundImageUrl = buildOptimizedUrl(IMAGE_ASSETS.gallery8, {
    quality: '80',
    format: 'auto'
  });

  const asset12Url = buildOptimizedUrl(IMAGE_ASSETS.gallery12, {
    quality: '85',
    format: 'auto'
  });

  const asset13Url = buildOptimizedUrl(IMAGE_ASSETS.gallery13, {
    quality: '85',
    format: 'auto'
  });

  const asset14Url = buildOptimizedUrl(IMAGE_ASSETS.gallery14, {
    quality: '85',
    format: 'auto'
  });

  const asset15Url = buildOptimizedUrl(IMAGE_ASSETS.gallery15, {
    quality: '85',
    format: 'auto'
  });

  const asset16Url = buildOptimizedUrl(IMAGE_ASSETS.gallery16, {
    quality: '85',
    format: 'auto'
  });

  const asset17Url = buildOptimizedUrl(IMAGE_ASSETS.gallery17, {
    quality: '85',
    format: 'auto'
  });

  return (
    <div
      ref={containerRef}
      className={styles.container}
    >
      {/* Background Image */}
      <div className={styles.backgroundImage}>
        <img src={backgroundImageUrl} alt="Team background" className={styles.image} />
      </div>

      {/* Dark Overlay */}
      <div className={styles.imageOverlay}></div>

      <div className={styles.contentWrapper}>
        {/* Left Section - Text Content */}
        <div className={`${styles.leftSection} ${isVisible ? styles.fadeIn : ''}`}>
          <h2 className={styles.heading}>Genuine <span>Teamwork</span></h2>
          <p className={styles.subText}>Partnership is our foundation</p>
          <p className={styles.paragraph}>
            At scape, we see every project as a collaboration—with you at the center. Our unified team approach is built on open communication and mutual respect.
          </p>
          <p className={styles.paragraph}>
            We're honored to build spaces that strengthen bonds between families, friends, and communities—environments where lasting memories are created together.
          </p>
          <p className={styles.paragraph}>
            Join Team scape and let's create something extraordinary, together.
          </p>
          <button className={styles.button} onClick={handleGetStarted}>
            Get Started
          </button>
        </div>

        {/* Right Section - Image Grid */}
        <div className={`${styles.rightSection} ${isVisible ? styles.fadeIn : ''}`}>
          <div className={styles.imageGrid}>
            <div className={styles.imageRow}>
              <img src={asset12Url} alt="Pool design" className={styles.gridImage} loading="lazy" />
              <img src={asset13Url} alt="Pool design" className={styles.gridImage} loading="lazy" />
            </div>
            <div className={styles.imageRow}>
              <img src={asset14Url} alt="Pool design" className={styles.gridImage} loading="lazy" />
              <img src={asset15Url} alt="Pool design" className={styles.gridImage} loading="lazy" />
            </div>
            <div className={styles.imageRow}>
              <img src={asset16Url} alt="Pool design" className={styles.gridImage} loading="lazy" />
              <img src={asset17Url} alt="Pool design" className={styles.gridImage} loading="lazy" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContainerFifth;