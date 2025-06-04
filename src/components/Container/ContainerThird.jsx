import React, { useEffect, useRef, useState } from 'react';
import styles from './ContainerThird.module.css';
import Asset4 from '../../assets/images/Asset4.jpg'; // Replace video import with image
import Asset28 from '../../assets/gallery/Asset28.jpg';
import Asset29 from '../../assets/gallery/Asset29.jpg';

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

  return (
    <div
      ref={containerRef}
      className={styles.container}
    >
      {/* Replace video with image background */}
      <div 
        className={styles.backgroundImage}
        style={{ backgroundImage: `url(${Asset4})` }}
      ></div>

      {/* Dark Overlay (kept for consistency) */}
      <div className={styles.videoOverlay}></div>

      <div className={styles.contentWrapper}>
        {/* Left Section - Text Content (unchanged) */}
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

        {/* Right Section - Images (unchanged) */}
        <div className={styles.rightSection}>
          <div className={`${styles.imageContainer} ${isVisible ? styles.slideDown : ''}`}>
            <img src={Asset28} alt="Award winning design" className={styles.image} />
          </div>
          <div className={`${styles.imageContainer} ${isVisible ? styles.slideUp : ''}`}>
            <img src={Asset29} alt="Innovative pool design" className={styles.image} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContainerThird;