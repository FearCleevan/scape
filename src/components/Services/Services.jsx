import React, { useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import styles from './Services.module.css';
import backgroundVideo from '../../assets/videos/Background2.mp4';
import ServicesFirst from './ServicesFirst';
import { Link } from 'react-router-dom';

const Services = () => {

  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.6; // Adjust this value to change playback speed (0.6 = 60% speed)
    }
  }, []);

  return (
    <div className={styles.homeContainer}>
      <Helmet>
        <title>SCAPE | Services</title>
        <meta property="og:url" content={window.location.href} />
      </Helmet>
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
            <span className={styles.activeBreadcrumb}>services</span>
          </div>
          <p className={styles.tagline}>SERVICES</p>
        </div>
      </div>
      <ServicesFirst />
      <Footer />
    </div>
  );
};

export default Services;