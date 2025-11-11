import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./FirescapeFirst.module.css";
import { buildOptimizedUrl, IMAGE_ASSETS } from '../../utils/cloudinary';

// Image public IDs for Firescape with correct duplicate folder structure
const firescapeImages = [
  'scape/firescape/scape/firescape/firescape1',
  'scape/firescape/scape/firescape/firescape2',
  'scape/firescape/scape/firescape/firescape3',
  'scape/firescape/scape/firescape/firescape4',
  'scape/firescape/scape/firescape/firescape5',
  'scape/firescape/scape/firescape/firescape6',
  'scape/firescape/scape/firescape/firescape7',
  'scape/firescape/scape/firescape/firescape8',
  'scape/firescape/scape/firescape/firescape9',
  'scape/firescape/scape/firescape/firescape10',
  'scape/firescape/scape/firescape/firescape11',
  'scape/firescape/scape/firescape/firescape12',
  'scape/firescape/scape/firescape/firescape15',
  'scape/firescape/scape/firescape/firescape16',
  'scape/firescape/scape/firescape/firescape18',
  'scape/firescape/scape/firescape/firescape19'
];

const firescapeFeatures = [
  {
    title: "Custom Fire Pits",
    desc: "Beautifully designed fire pits that serve as a cozy focal point—perfect for roasting marshmallows and gathering with friends."
  },
  {
    title: "Elegant Outdoor Fireplaces",
    desc: "Bring both warmth and architectural style to your patio or backyard with a bespoke fireplace installation."
  },
  {
    title: "Modern Fire Tables",
    desc: "Sleek, contemporary fire tables that combine function and aesthetics, ideal for dining or lounge areas."
  },
  {
    title: "Integrated Seating & Gathering Spaces",
    desc: "Thoughtful layouts with built-in seating and hardscape elements, making your fire feature the heart of outdoor entertainment."
  },
  {
    title: "Safe & Durable Installation",
    desc: "Expert construction using premium materials and the latest safety standards for lasting performance and peace of mind."
  },
  {
    title: "Lighting & Ambiance Enhancements",
    desc: "Complement your fire feature with accent lighting and landscape design for a warm, inviting evening atmosphere."
  },
  {
    title: "All-Season Enjoyment",
    desc: "Fire features designed for year-round beauty and use, extending your outdoor living through every season."
  }
];

const FirescapeFirst = () => {
  const navigate = useNavigate();

  // Build optimized image URLs
  const getOptimizedImageUrl = (publicId) => {
    return buildOptimizedUrl(publicId, {
      quality: '85',
      format: 'auto'
    });
  };

  return (
    <div className={styles.firescapeContainer}>
      <div className={styles.introSection}>
        <h1 className={styles.introTitle}>Firescape</h1>
        <p className={styles.introText}>
          Firescape creates inviting outdoor spaces with our expertly crafted fire features and complementary services, designed to add warmth and charm to your landscape. Our fire features include custom fire pits, elegant fireplaces, and modern fire tables, perfect for gathering with family and friends on cool evenings while enhancing your yard's ambiance.
        </p>
      </div>

      <div className={styles.servicesSection}>
        <h2 className={styles.servicesTitle}>Signature Firescape Features</h2>
        <div className={styles.servicesList}>
          {firescapeFeatures.map((service, idx) => (
            <div className={styles.serviceCard} key={idx}>
              <h3 className={styles.serviceCardTitle}>{service.title}</h3>
              <p className={styles.serviceCardDesc}>{service.desc}</p>
            </div>
          ))}
        </div>
        <button className={styles.getStartedButton} onClick={() => navigate("/contact")}>
          Get Started
        </button>
      </div>

      <div className={styles.showcaseSection}>
        <h2 className={styles.showcaseTitle}>Firescape Showcase</h2>
        <div className={styles.showcaseGrid}>
          {firescapeImages.map((publicId, i) => (
            <div className={styles.showcaseImgWrapper} key={i}>
              <img
                src={getOptimizedImageUrl(publicId)}
                alt={`Firescape Showcase ${i + 1}`}
                className={styles.showcaseImg}
                loading="lazy"
                style={{ animationDelay: `${i * 0.08}s` }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FirescapeFirst;