import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./PoolscapeFirst.module.css";
import { buildOptimizedUrl, IMAGE_ASSETS } from '../../utils/cloudinary';

// Image public IDs for Poolscape with correct duplicate folder structure
const poolscapeImages = [
  'scape/poolscape/scape/poolscape/poolscape1',
  'scape/poolscape/scape/poolscape/poolscape2',
  'scape/poolscape/scape/poolscape/poolscape3',
  'scape/poolscape/scape/poolscape/poolscape4',
  'scape/poolscape/scape/poolscape/poolscape5',
  'scape/poolscape/scape/poolscape/poolscape6',
  'scape/poolscape/scape/poolscape/poolscape7',
  'scape/poolscape/scape/poolscape/poolscape8',
  'scape/poolscape/scape/poolscape/poolscape9',
  'scape/poolscape/scape/poolscape/poolscape10',
  'scape/poolscape/scape/poolscape/poolscape11',
  'scape/poolscape/scape/poolscape/poolscape12',
  'scape/poolscape/scape/poolscape/poolscape13',
  'scape/poolscape/scape/poolscape/poolscape14'
];

const poolscapeFeatures = [
  {
    title: "Custom Pool Design",
    desc: "Collaborative planning to create a pool that perfectly fits your space, style, and vision."
  },
  {
    title: "Expert Construction",
    desc: "Comprehensive management of all phases—excavation, installation, plumbing, electrical work, and finishing touches."
  },
  {
    title: "Safety & Compliance",
    desc: "Incorporation of safety features like secure fencing, non-slip materials, and code-compliant systems for peace of mind."
  },
  {
    title: "Elegant Surroundings",
    desc: "Integration of hardscaped patios, walkways, and seating areas to complement your pool and maximize outdoor living."
  },
  {
    title: "Lush Softscaping",
    desc: "Strategic planting of trees, shrubs, and flowers to create a resort-like atmosphere and natural privacy."
  },
  {
    title: "Leisure & Recreation",
    desc: "Custom additions such as outdoor lounges, fire pits, pergolas, or kitchens to complete your private getaway."
  },
  {
    title: "Lighting & Water Features",
    desc: "Enhance ambiance and enjoyment with underwater lights, deck lighting, fountains, waterfalls, or tanning ledges."
  }
];

const PoolscapeFirst = () => {
  const navigate = useNavigate();

  // Build optimized image URLs
  const getOptimizedImageUrl = (publicId) => {
    return buildOptimizedUrl(publicId, {
      quality: '85',
      format: 'auto'
    });
  };

  return (
    <div className={styles.poolscapeContainer}>
      <div className={styles.introSection}>
        <h1 className={styles.introTitle}>Poolscape</h1>
        <p className={styles.introText}>
          Poolscape specializes in creating your dream backyard oasis through our comprehensive pool construction services, tailored to enhance both beauty and functionality. Our process begins with expert design and planning, where we collaborate with you to craft a custom pool that fits your vision and space. We handle every detail, from excavation and pool installation to plumbing, electrical work, and safety features like fencing. Beyond the pool, we enhance your yard with surrounding features such as elegant hardscaping for patios and walkways, lush softscaping with plants and trees, and even custom additions like outdoor leisure spaces, lighting or water features, ensuring a seamless, stunning outdoor retreat for you to enjoy year-round.
        </p>
      </div>
      <div className={styles.servicesSection}>
        <h2 className={styles.servicesTitle}>Signature Poolscape Services</h2>
        <div className={styles.servicesList}>
          {poolscapeFeatures.map((service, idx) => (
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
        <h2 className={styles.showcaseTitle}>Poolscape Showcase</h2>
        <div className={styles.showcaseGrid}>
          {poolscapeImages.map((publicId, i) => (
            <div className={styles.showcaseImgWrapper} key={i}>
              <img
                src={getOptimizedImageUrl(publicId)}
                alt={`Poolscape Showcase ${i + 1}`}
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

export default PoolscapeFirst;