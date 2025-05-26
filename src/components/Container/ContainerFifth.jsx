import React, { useEffect, useRef, useState } from 'react';
import styles from './ContainerFifth.module.css';
import backgroundImage from '../../assets/gallery/Asset8.jpg';
import { useNavigate } from 'react-router-dom';
// Import all the gallery images
import Asset12 from '../../assets/gallery/Asset12.jpg';
import Asset13 from '../../assets/gallery/Asset13.jpg';
import Asset14 from '../../assets/gallery/Asset14.jpg';
import Asset15 from '../../assets/gallery/Asset15.jpg';
import Asset16 from '../../assets/gallery/Asset16.jpg';
import Asset17 from '../../assets/gallery/Asset17.jpg';

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

  return (
    <div
      ref={containerRef}
      className={styles.container}
    >
      {/* Background Image */}
      <div className={styles.backgroundImage}>
        <img src={backgroundImage} alt="Team background" className={styles.image} />
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
            We’re honored to build spaces that strengthen bonds between families, friends, and communities—environments where lasting memories are created together.
          </p>
          <p className={styles.paragraph}>
            Join Team scape and let’s create something extraordinary, together.
          </p>
          <button className={styles.button} onClick={handleGetStarted}>
            Get Started
          </button>
        </div>

        {/* Right Section - Image Grid */}
        <div className={`${styles.rightSection} ${isVisible ? styles.fadeIn : ''}`}>
          <div className={styles.imageGrid}>
            <div className={styles.imageRow}>
              <img src={Asset12} alt="Pool design" className={styles.gridImage} />
              <img src={Asset13} alt="Pool design" className={styles.gridImage} />
            </div>
            <div className={styles.imageRow}>
              <img src={Asset14} alt="Pool design" className={styles.gridImage} />
              <img src={Asset15} alt="Pool design" className={styles.gridImage} />
            </div>
            <div className={styles.imageRow}>
              <img src={Asset16} alt="Pool design" className={styles.gridImage} />
              <img src={Asset17} alt="Pool design" className={styles.gridImage} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContainerFifth;