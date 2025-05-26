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
          <h2 className={styles.heading}>Your Vision, <span>Rendered</span></h2>
          <p className={styles.paragraph}>
            We go beyond traditional design—leveraging the latest 3D rendering capabilities to help you see every detail of your future landscape. Our collaborative process ensures your ideas are brought vividly to life, fostering trust and excitement before the first shovel breaks ground.
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