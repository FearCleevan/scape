import React, { useEffect, useRef, useState } from 'react';
import styles from './ContainerThird.module.css';
import BackgroundVideo from '../../assets/videos/Background2.mp4';
import Asset28 from '../../assets/gallery/Asset28.jpg';
import Asset29 from '../../assets/gallery/Asset29.jpg';

const ContainerThird = () => {
  const containerRef = useRef(null);
  const videoRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Slow down the video playback
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.5; // 50% speed (0.7 for 70% speed)
    }

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
      {/* Video Background */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        className={styles.backgroundVideo}
      >
        <source src={BackgroundVideo} type="video/mp4" />
      </video>
      
      {/* Dark Overlay */}
      <div className={styles.videoOverlay}></div>

      <div className={styles.contentWrapper}>
        {/* Left Section - Text Content */}
        <div className={`${styles.leftSection} ${isVisible ? styles.fadeIn : ''}`}>
          <h2 className={styles.heading}>Award Winning <span>Design</span></h2>
          <p className={styles.subText}>We LOVE a good challenge!</p>
          <p className={styles.paragraph}>
            From placing 1st in Local Pool build Awards to Winning the Grand Prize during 
            International Design competitions, we've done it all in recent years!
          </p>
          <p className={styles.paragraph}>
            We are always looking to push the boundaries of function & style, we strive to 
            break the mold & know our clients enjoy their award winning designs.
          </p>
        </div>

        {/* Right Section - Images */}
        <div className={styles.rightSection}>
          <div className={`${styles.imageContainer} ${isVisible ? styles.slideDown : ''}`}>
            <img 
              src={Asset28} 
              alt="Award winning design" 
              className={styles.image}
            />
          </div>
          <div className={`${styles.imageContainer} ${isVisible ? styles.slideUp : ''}`}>
            <img 
              src={Asset29} 
              alt="Innovative pool design" 
              className={styles.image}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContainerThird;