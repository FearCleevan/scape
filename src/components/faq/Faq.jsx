import React, { useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import FaqFirst from './FaqFirst';
import styles from './Faq.module.css';
import backgroundVideo from '../../assets/videos/Background2.mp4';
import { Link } from 'react-router-dom';


const Faq = () => {

  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.6; // Adjust this value to change playback speed (0.6 = 60% speed)
    }
  }, []);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.6; // Adjust this value to change playback speed (0.6 = 60% speed)
    }
  }, []);

  return (
    <div className={styles.homeContainer}>
      <Helmet>
        <title>SCAPE | Faq</title>
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
            <Link to="/" className={styles.breadcrumbLink}>Home</Link>
            <span className={styles.breadcrumbSeparator}></span>
            <span className={styles.activeBreadcrumb}>Frequently Ask Questions</span>
          </div>
          <p className={styles.tagline}>Faq</p>
        </div>
      </div>
      <FaqFirst />
      <Footer />
    </div>
  );
};

export default Faq;