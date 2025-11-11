import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./SoftscapeFirst.module.css";
import { buildOptimizedUrl, IMAGE_ASSETS } from '../../utils/cloudinary';

// Image public IDs for Softscape with correct duplicate folder structure
const softscapeImages = [
  'scape/softscape/scape/softscape/softscape1',
  'scape/softscape/scape/softscape/softscape2',
  'scape/softscape/scape/softscape/softscape3',
  'scape/softscape/scape/softscape/softscape4',
  'scape/softscape/scape/softscape/softscape5',
  'scape/softscape/scape/softscape/softscape6',
  'scape/softscape/scape/softscape/softscape7',
  'scape/softscape/scape/softscape/softscape8',
  'scape/softscape/scape/softscape/softscape9',
  'scape/softscape/scape/softscape/softscape10',
  'scape/softscape/scape/softscape/softscape11',
  'scape/softscape/scape/softscape/softscape12'
];

const softscapeFeatures = [
  {
    title: "Custom Planting Design",
    desc: "Personalized combinations of trees, shrubs, and perennials for dynamic color, texture, and year-round interest."
  },
  {
    title: "Lawn Installation & Care",
    desc: "Lush, healthy lawns tailored to your space and climate, with sustainable grass varieties and expert maintenance."
  },
  {
    title: "Flower Beds & Borders",
    desc: "Vibrant arrangements of annuals and perennials that create striking visual impact and seasonal beauty."
  },
  {
    title: "Native & Drought-Tolerant Gardens",
    desc: "Low-maintenance, eco-friendly plantings that conserve water and support local wildlife and pollinators."
  },
  {
    title: "Ornamental Trees & Shade Solutions",
    desc: "Strategic placement of trees to provide cooling shade, privacy, and a natural focal point in your landscape."
  },
  {
    title: "Edible Gardens & Herb Borders",
    desc: "Grow your own produce with thoughtfully designed vegetable patches, fruit trees, and aromatic herb beds."
  },
  {
    title: "Seasonal Containers & Accents",
    desc: "Planters and container gardens curated to reflect each season and add color to patios, entryways, and decks."
  }
];

const SoftscapeFirst = () => {
  const navigate = useNavigate();

  // Build optimized image URLs
  const getOptimizedImageUrl = (publicId) => {
    return buildOptimizedUrl(publicId, {
      quality: '85',
      format: 'auto'
    });
  };

  return (
    <div className={styles.softscapeContainer}>
      <div className={styles.introSection}>
        <h1 className={styles.introTitle}>Softscape</h1>
        <p className={styles.introText}>
          Softscape brings your outdoor spaces to life with beautifully designed elements, which encompass the living, natural features of your landscape. Softscaping includes plants, trees, shrubs, flowers, and grass, carefully selected to enhance beauty, provide shade, and promote biodiversity. These organic components add color, texture, and seasonal interest while supporting a healthy ecosystem. Whether you desire a vibrant garden, a serene lawn, or a sustainable planting plan, our softscape expertise ensures a thriving, picturesque environment tailored to your preferences and local climate.
        </p>
      </div>
      <div className={styles.servicesSection}>
        <h2 className={styles.servicesTitle}>Signature Softscape Features</h2>
        <div className={styles.servicesList}>
          {softscapeFeatures.map((service, idx) => (
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
        <h2 className={styles.showcaseTitle}>Softscape Showcase</h2>
        <div className={styles.showcaseGrid}>
          {softscapeImages.map((publicId, i) => (
            <div className={styles.showcaseImgWrapper} key={i}>
              <img
                src={getOptimizedImageUrl(publicId)}
                alt={`Softscape Showcase ${i + 1}`}
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

export default SoftscapeFirst;