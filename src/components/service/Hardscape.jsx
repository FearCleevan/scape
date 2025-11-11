import React, { useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import styles from './Hardscape.module.css';
import { buildOptimizedVideoUrl, VIDEO_ASSETS } from '../../utils/cloudinary';
import { buildOptimizedUrl, IMAGE_ASSETS } from '../../utils/cloudinary';
import HardscapeFirst from './HardscapeFirst';

const Hardscape = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.6;
    }
  }, []);

  // Build optimized video URL
  const optimizedVideoUrl = buildOptimizedVideoUrl(VIDEO_ASSETS.background2, {
    quality: '70',
    format: 'auto'
  });

  // Build optimized logo URL
  const hardscapeLogoUrl = buildOptimizedUrl(IMAGE_ASSETS.hardscapeService, {
    quality: '85',
    format: 'auto'
  });

  return (
    <div className={styles.homeContainer}>
      <Helmet>
        <title>SCAPE | Services / Hardscape</title>
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
          {/* Breadcrumb Navigation */}
          <div className={styles.breadcrumb}>
            <Link to="/" className={styles.breadcrumbLink}>home</Link>
            <span className={styles.breadcrumbSeparator} aria-hidden="true" />
            <Link to="/services" className={styles.breadcrumbLink}>services</Link>
            <span className={styles.breadcrumbSeparator} aria-hidden="true" />
            <span className={styles.activeBreadcrumb}>hardscape</span>
          </div>

          <img
            src={hardscapeLogoUrl}
            alt="Hardscape"
            className={styles.taglineImage}
            loading="lazy"
          />
        </div>
      </div>
      <HardscapeFirst/>
      <Footer />
    </div>
  );
};

export default Hardscape;