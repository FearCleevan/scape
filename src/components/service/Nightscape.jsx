import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import styles from './Nightscape.module.css';
import backgroundVideo from '../../assets/videos/Background1.mp4';
import nightscapeLogo from '../../assets/services/nightscape.png';
import NightscapeFirst from './NightscapeFirst';

const Nightscape = () => {
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

          {/* Breadcrumb Navigation */}
          <div className={styles.breadcrumb}>
            <Link to="/" className={styles.breadcrumbLink}>home</Link>
            <span className={styles.breadcrumbSeparator} aria-hidden="true" />
            <Link to="/services" className={styles.breadcrumbLink}>services</Link>
            <span className={styles.breadcrumbSeparator} aria-hidden="true" />
            <span className={styles.activeBreadcrumb}>nightscape</span>
          </div>
          <img
            src={nightscapeLogo}
            alt="Nightscape"
            className={styles.taglineImage}
          />
        </div>
      </div>
      <NightscapeFirst />
      <Footer />
    </div>
  );
};

export default Nightscape;