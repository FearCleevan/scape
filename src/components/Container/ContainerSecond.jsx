import React, { useEffect, useRef, useState } from 'react';
import styles from './ContainerSecond.module.css';
import Asset10 from '../../assets/gallery/Asset10.jpg';
import Asset11 from '../../assets/gallery/Asset11.jpg';
import Asset12 from '../../assets/gallery/Asset12.jpg';

const ContainerSecond = () => {
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
      style={{ backgroundImage: `url(${Asset10})` }}
    >
      <div className={styles.contentWrapper}>
        {/* Left Section - Text Content */}
        <div className={`${styles.leftSection} ${isVisible ? styles.fadeIn : ''}`}>
          <h2 className={styles.heading}>Master-Planned <span>Luxury</span></h2>
          <p className={styles.subText}>20+ years | 1,000+ projects | A+ Satisfaction.</p>
          <p className={styles.paragraph}>Trust, transparency & integrity are our focus as a business.</p>
          <p className={styles.paragraph}>
            Family owned & operated since 2001, Poolscapes continues to push the industry with 
            innovative Pool designs & aims to set the tone for an A+ Customer experience.
          </p>
          <p className={styles.smallText}>Recent Google Reviews</p>
          <p className={styles.mediumText}>Poolscapes Gallery</p>
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