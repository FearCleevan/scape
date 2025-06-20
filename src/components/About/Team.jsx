import React, { useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import styles from './Team.module.css';
import backgroundVideo from '../../assets/videos/Background2.mp4';
import TeamFirst from './TeamFirst';
import About from './About';
import { Link } from 'react-router-dom';

const Team = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.6;
    }
  }, []);

  return (
    <div className={styles.homeContainer}>
      <Helmet>
        <title>SCAPE | Scape Team / About Us</title>
        <meta property="og:title" content="SCAPE | Scape Team / About Us" />
        <meta name="description" content="Meet the SCAPE team and learn about our landscape design philosophy and company values." />
        <meta property="og:description" content="Meet the SCAPE team and learn about our landscape design philosophy and company values." />
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
            <span className={styles.activeBreadcrumb}>scape team / about us</span>
          </div>
          <p className={styles.tagline}>about us</p>
        </div>
      </div>

      <About />
      <TeamFirst />
      <Footer />
    </div>
  );
};

export default Team;