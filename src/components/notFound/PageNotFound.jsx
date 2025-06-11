import React, { useEffect, useRef } from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import styles from './PageNotFound.module.css';
import backgroundVideo from '../../assets/videos/Background2.mp4';

const PageNotFound = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.6;
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

      <Header />

      <div className={styles.mainContent}>
        <div className={styles.content}>
          <h1>404</h1>
          <h2 className={styles.title}>Page Not Found</h2>
          <p className={styles.message}>
            Oops! The page you’re looking for doesn’t exist or has been moved.
          </p>
          <a href="/" className={styles.homeButton}>
            Back to Home
          </a>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default PageNotFound;