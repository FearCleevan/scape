import React, { useEffect, useRef, useState } from 'react';
import styles from './ContainerFourth.module.css';
import Asset38 from '../../assets/gallery/Asset38.jpg';
import Asset35 from '../../assets/gallery/Asset35.jpg';
import Asset18 from '../../assets/gallery/Asset18.jpg';

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

  return (
    <div 
          ref={containerRef}
          className={styles.container}
          style={{ backgroundImage: `url(${Asset38})` }}
        >

      <div className={styles.contentWrapper}>
        {/* Left Section - Text Content */}
        <div className={`${styles.leftSection} ${isVisible ? styles.fadeIn : ''}`}>
          <h2 className={styles.heading}>Seeing is Believing</h2>
          <p className={styles.paragraph}>
            We pride ourselves in being up to date on all the current 3d Pool rendering capabilities, 
            we believe in spending a little more time and effort to really show what your space can offer.
          </p>
        </div>

        {/* Right Section - Images */}
        <div className={styles.rightSection}>
          <div className={`${styles.imageContainer} ${isVisible ? styles.slideDown : ''}`}>
            <img 
              src={Asset35} 
              alt="3D pool rendering" 
              className={styles.image}
            />
          </div>
          <div className={`${styles.imageContainer} ${isVisible ? styles.slideUp : ''}`}>
            <img 
              src={Asset18} 
              alt="Pool design visualization" 
              className={styles.image}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContainerFourth;