import React, { useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import Header from '../Header/Header';
import PortfolioFirst from './PortfolioFirst';
import Footer from '../Footer/Footer';
import styles from './Portfolio.module.css';
import { buildOptimizedVideoUrl, VIDEO_ASSETS } from '../../utils/cloudinary';

const Portfolio = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.6; // Adjust this value to change playback speed (0.6 = 60% speed)
    }
  }, []);

  // Build optimized video URL
  const optimizedVideoUrl = buildOptimizedVideoUrl(VIDEO_ASSETS.background2, {
    quality: '70',
    format: 'auto'
  });

  return (
    <div className={styles.homeContainer}>
      <Helmet>
        <title>SCAPE | Portfolio</title>
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
          <source src={optimizedVideoUrl} type="video/mp4" />
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
            <span className={styles.activeBreadcrumb}>Portfolio / Scape Gallery</span>
          </div>
          <p className={styles.tagline}>Portfolio</p>
        </div>
      </div>
      <PortfolioFirst />
      <Footer />
    </div>
  );
};

export default Portfolio;