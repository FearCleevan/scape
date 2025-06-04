import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import styles from './Landscape.module.css';
import backgroundVideo from '../../assets/videos/Background2.mp4';
import landscapeLogo from '../../assets/services/landscape.png';
import LandscapeFirst from './LandscapeFirst';

const Landscape = () => {

  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.6; // Adjust this value to change playback speed (0.6 = 60% speed)
    }
  }, []);

  return (
    <div className={styles.homeContainer}>
      {/* Fullscreen video background */}
      <div className={styles.videoBackground}>
        <video 
        ref={videoRef}
          autoPlay 
          loop 
          muted 
          playsInline 
          className={styles.backgroundVideo}
        >
          <source src={backgroundVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      
      {/* Content container */}
      <Header />
      <div className={styles.mainContent}>
        <div className={styles.content}>
          {/* Breadcrumb Navigation */}
          <div className={styles.breadcrumb}>
            <Link to="/" className={styles.breadcrumbLink}>home</Link>
            <span className={styles.breadcrumbSeparator} aria-hidden="true" />
            <Link to="/services" className={styles.breadcrumbLink}>services</Link>
            <span className={styles.breadcrumbSeparator} aria-hidden="true" />
            <span className={styles.activeBreadcrumb}>landscape</span>
          </div>
          
          <img
            src={landscapeLogo}
            alt="Landscape"
            className={styles.taglineImage}
          />
        </div>
      </div>
      <LandscapeFirst />
      <Footer />
    </div>
  );
};

export default Landscape;