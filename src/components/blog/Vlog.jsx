import React from 'react';
import { Link, useParams } from 'react-router-dom';
import Header from '../Header/Header';
import VlogDetail from './VlogDetail';
import Footer from '../Footer/Footer';
import styles from './Vlog.module.css';
import backgroundVideo from '../../assets/videos/Background1.mp4';

// --- Put your blogCategories here or import them ---
const blogCategories = [
  'SAFETY & SUSTAINABILITY', 'SUSTAINABLE DESIGN', 'EROSION CONTROL', 'FIRE SAFETY', 'WATER CONSERVATION',
  'PROFESSIONAL TIPS', 'NATIVE PLANTS', 'LAWN CARE', 'WILDLIFE', 'ROCK GARDENS',
  'PET-FRIENDLY', 'CURB APPEAL', 'LOW MAINTENANCE', 'PEST CONTROL', 'VERTICAL GARDENING',
  'WATER FEATURES', 'MULCHING', 'LIGHTING', 'COMPOSTING', 'RAISED BEDS',
  'SMALL YARDS', 'OUTDOOR LIVING', 'EDIBLES', 'SLOPES', 'WILDFLOWERS',
  'MODERN DESIGN', 'LAWN ALTERNATIVES', 'IRRIGATION', 'POLLINATORS', 'ROCK VS. BARK',
  'PATHWAYS', 'RETAINING WALLS', 'PRIVACY', 'RAIN GARDENS', 'TREE PLANTING',
  'SHRUBS', 'FLOWERING PLANTS', 'PRUNING', 'SANCTUARY', 'BUDGET TIPS'
];

// Slugify utility must match your SocialFirst/VlogDetail logic
const categoryToSlug = (category) =>
  category
    .toLowerCase()
    .replace(/&/g, 'and')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');

const slugToCategory = (slug) =>
  blogCategories.find(
    (cat) => categoryToSlug(cat) === slug
  );

const Vlog = () => {
  // Assume your route is: /vlog/:slug
  const { slug } = useParams();
  const currentCategory = slugToCategory(slug) || 'Vlog';

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
            <Link to="/" className={styles.breadcrumbLink}>Home</Link>
            <span className={styles.breadcrumbSeparator} aria-hidden="true" />
            <Link to="/social" className={styles.breadcrumbLink}>Social Videos / Blog</Link>
            <span className={styles.breadcrumbSeparator} aria-hidden="true" />
            <span className={styles.activeBreadcrumb}>{currentCategory}</span>
          </div>
          <p className={styles.tagline}>{currentCategory}</p>
        </div>
      </div>
      <VlogDetail />
      <Footer />
    </div>
  );
};

export default Vlog;