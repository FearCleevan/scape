import React from 'react';
import { Link, useLocation } from 'react-router-dom'; // Added useLocation
import Header from '../Header/Header';
import DGalleryFirst from './3DGalleryFirst';
import Footer from '../Footer/Footer';
import styles from './3DGallery.module.css';
import backgroundVideo from '../../assets/videos/Background1.mp4';

const DGallery = () => {
  const location = useLocation(); // Get current route location

  // Helper function to check if a route is active
  const isActive = (path) => {
    return location.pathname === path;
  };

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
            <span className={styles.activeBreadcrumb}>Portfolio / 3D Gallery</span>
          </div>
          <p className={styles.tagline}>Portfolio</p>

          {/* Gallery Navigation Buttons */}
          <div className={styles.galleryNav}>
            <Link 
              to="/portfolio" 
              className={`${styles.galleryButton} ${isActive('/portfolio') ? styles.active : ''}`}
            >
              Scape Gallery
            </Link>
            <Link 
              to="/portfolio/3d-gallery" 
              className={`${styles.galleryButton} ${isActive('/portfolio/3d-gallery') ? styles.active : ''}`}
            >
              3D Gallery
            </Link>
            <Link 
              to="/portfolio/drone-shots" 
              className={`${styles.galleryButton} ${isActive('/portfolio/drone-shots') ? styles.active : ''}`}
            >
              Drone Shots
            </Link>
            <Link 
              to="/portfolio/social-videos" 
              className={`${styles.galleryButton} ${isActive('/portfolio/social-videos') ? styles.active : ''}`}
            >
              Social Videos
            </Link>
          </div>
        </div>
      </div>
      <DGalleryFirst />
      <Footer />
    </div>
  );
};

export default DGallery;