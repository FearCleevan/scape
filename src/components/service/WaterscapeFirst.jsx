import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./WaterscapeFirst.module.css";
import { buildOptimizedUrl, IMAGE_ASSETS } from '../../utils/cloudinary';

// Image public IDs for Waterscape with correct duplicate folder structure
const waterscapeImages = [
  'scape/waterscape/scape/waterscape/waterscape1',
  'scape/waterscape/scape/waterscape/waterscape2',
  'scape/waterscape/scape/waterscape/waterscape3',
  'scape/waterscape/scape/waterscape/waterscape4',
  'scape/waterscape/scape/waterscape/waterscape5',
  'scape/waterscape/scape/waterscape/waterscape6',
  'scape/waterscape/scape/waterscape/waterscape7',
  'scape/waterscape/scape/waterscape/waterscape8',
  'scape/waterscape/scape/waterscape/waterscape9',
  'scape/waterscape/scape/waterscape/waterscape10',
  'scape/waterscape/scape/waterscape/waterscape11',
  'scape/waterscape/scape/waterscape/waterscape12'
];

const waterscapeFeatures = [
  {
    title: "Elegant Fountains",
    desc: "Graceful fountains serve as a dynamic centerpiece, adding movement, sound, and sophistication to your garden or courtyard."
  },
  {
    title: "Cascading Waterfalls",
    desc: "Custom-designed waterfalls bring a soothing ambiance and natural beauty, whether standalone or integrated into existing landscapes."
  },
  {
    title: "Serene Ponds",
    desc: "Still or flowing ponds create a tranquil retreat, supporting aquatic plants and wildlife while reflecting the sky and surroundings."
  },
  {
    title: "Bubbling Streams",
    desc: "Meandering streams add gentle sound and visual interest, guiding the eye through your landscape and connecting different spaces."
  },
  {
    title: "Reflecting Pools",
    desc: "Minimalist water surfaces offer a mirror-like calm, perfect for meditation gardens or as a striking architectural accent."
  },
  {
    title: "Rock & Boulder Features",
    desc: "Natural stone elements are artfully arranged to complement water features, blending seamlessly with your yard's existing character."
  },
  {
    title: "Low-Maintenance Design",
    desc: "Every waterscape is thoughtfully engineered for beauty and ease, featuring durable materials and efficient water management."
  }
];

const WaterscapeFirst = () => {
  const navigate = useNavigate();

  // Build optimized image URLs
  const getOptimizedImageUrl = (publicId) => {
    return buildOptimizedUrl(publicId, {
      quality: '85',
      format: 'auto'
    });
  };

  return (
    <div className={styles.waterscapeContainer}>
      <div className={styles.introSection}>
        <h1 className={styles.introTitle}>Waterscape</h1>
        <p className={styles.introText}>
          Waterscape brings your outdoor vision to life with a variety of captivating water features designed to enhance the beauty and tranquility of your landscape—with or without the installation of a pool. Our water features encompass elegant fountains, cascading waterfalls, serene ponds, and bubbling streams, each crafted to create a peaceful focal point and promote a sense of calm in your yard. Every element is thoughtfully designed and installed to harmonize with your space, delivering a stunning, low-maintenance outdoor retreat tailored to your lifestyle.
        </p>
      </div>
      <div className={styles.servicesSection}>
        <h2 className={styles.servicesTitle}>Signature Waterscape Features</h2>
        <div className={styles.servicesList}>
          {waterscapeFeatures.map((service, idx) => (
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
        <h2 className={styles.showcaseTitle}>Waterscape Showcase</h2>
        <div className={styles.showcaseGrid}>
          {waterscapeImages.map((publicId, i) => (
            <div className={styles.showcaseImgWrapper} key={i}>
              <img
                src={getOptimizedImageUrl(publicId)}
                alt={`Waterscape Showcase ${i + 1}`}
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

export default WaterscapeFirst;