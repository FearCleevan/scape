import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header/Header';
import ArProjectFirst from './ArProjectFirst';
import Footer from '../Footer/Footer';
import styles from './ArProject.module.css';
import backgroundVideo from '../../assets/videos/Background2.mp4';

const ArProject = () => {

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
          <div className={styles.breadcrumb}>
            <Link to="/" className={styles.breadcrumbLink}>home</Link>
            <span className={styles.breadcrumbSeparator}></span>
            <Link to="/portfolio" className={styles.breadcrumbLink}>portfolio</Link>
            <span className={styles.breadcrumbSeparator}></span>
            <span className={styles.activeBreadcrumb}>ar project</span>
          </div>
          <p className={styles.tagline}>ar project</p>
        </div>
      </div>
      <ArProjectFirst />
      <Footer />
    </div>
  );
};

export default ArProject;