import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import styles from './Team.module.css';
import backgroundVideo from '../../assets/videos/Background1.mp4';
import TeamFirst from './TeamFirst';
import About from './About';
import { Link } from 'react-router-dom';

const Team = () => {
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
            <span className={styles.activeBreadcrumb}>Scape Team / About Us</span>
          </div>
          <p className={styles.tagline}>ABOUT US</p>
        </div>
      </div>

      <About />
      <TeamFirst />
      <Footer />
    </div>
  );
};

export default Team;