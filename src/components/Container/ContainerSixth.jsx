import React, { useEffect, useRef, useState } from 'react';
import styles from './ContainerSixth.module.css';
import BackgroundVideo from '../../assets/videos/Background3.mp4';
import Asset30 from '../../assets/gallery/Asset30.jpg';
import Asset31 from '../../assets/gallery/Asset31.jpg';

const ContainerSixth = () => {
  const containerRef = useRef(null);
  const videoRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Slow down the video playback
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.5; // 50% speed
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
          <h2 className={styles.heading}>Est. <span>2001</span></h2>
          <p className={styles.paragraph}>
            Our design center & showroom, has over a hundred examples for inspiration whether we are selecting materials, or looking for the latest design trends.
          </p>
          <p className={styles.paragraph}>
            With over 23 years, and over a thousand successful projects, we are so proud to serve the greater Vegas valley. We are a local small business & we love to support other local businesses any chance we can.
          </p>
        </div>

        {/* Right Section - Images */}
        <div className={styles.rightSection}>
          <div className={`${styles.imageContainer} ${isVisible ? styles.slideDown : ''}`}>
            <img 
              src={Asset30} 
              alt="Design center showcase" 
              className={styles.image}
            />
          </div>
          <div className={`${styles.imageContainer} ${isVisible ? styles.slideUp : ''}`}>
            <img 
              src={Asset31} 
              alt="Showroom examples" 
              className={styles.image}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContainerSixth;