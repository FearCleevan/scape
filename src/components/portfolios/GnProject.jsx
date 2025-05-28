import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header/Header';
import GnProjectFirst from './GnProjectFirst';
import Footer from '../Footer/Footer';
import styles from './GnProject.module.css';
import backgroundVideo from '../../assets/videos/Background1.mp4';

const GnProject = () => {
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
            <Link to="/" className={styles.breadcrumbLink}>home</Link>
            <span className={styles.breadcrumbSeparator}></span>
            <Link to="/portfolio" className={styles.breadcrumbLink}>portfolio</Link>
            <span className={styles.breadcrumbSeparator}></span>
            <span className={styles.activeBreadcrumb}>gn project</span>
          </div>
          <p className={styles.tagline}>gn project</p>
        </div>
      </div>
      <GnProjectFirst />
      <Footer />
    </div>
  );
};

export default GnProject;