import React, { useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import Header from '../Header/Header';
import BnProjectFirst from './BnProjectFirst';
import Footer from '../Footer/Footer';
import styles from './BnProject.module.css';
import backgroundVideo from '../../assets/videos/Background2.mp4';

const BnProject = () => {

  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.6; // Adjust this value to change playback speed (0.6 = 60% speed)
    }
  }, []);

  return (
    <div className={styles.homeContainer}>
      <Helmet>
        <title>SCAPE | Portfolio / Bn Project</title>
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
            <Link to="/portfolio" className={styles.breadcrumbLink}>portfolio</Link>
            <span className={styles.breadcrumbSeparator}></span>
            <span className={styles.activeBreadcrumb}>bn project</span>
          </div>
          <p className={styles.tagline}>bn project</p>
        </div>
      </div>
      <BnProjectFirst />
      <Footer />
    </div>
  );
};

export default BnProject;