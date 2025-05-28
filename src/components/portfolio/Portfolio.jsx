import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header/Header';
import PortfolioFirst from './PortfolioFirst';
import Footer from '../Footer/Footer';
import styles from './Portfolio.module.css';
import backgroundVideo from '../../assets/videos/Background1.mp4';

const Portfolio = () => {
  return (
    <div className={styles.homeContainer}>
      {/* Fullscreen video background */}
      <div className={styles.videoBackground}>
        <video
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