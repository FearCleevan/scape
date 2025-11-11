import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./LandscapeFirst.module.css";
import { buildOptimizedUrl, IMAGE_ASSETS } from '../../utils/cloudinary';

// Image public IDs for Landscape with correct duplicate folder structure
const landscapeImages = [
  'scape/landscape/scape/landscape/landscape1',
  'scape/landscape/scape/landscape/landscape2',
  'scape/landscape/scape/landscape/landscape3',
  'scape/landscape/scape/landscape/landscape4',
  'scape/landscape/scape/landscape/landscape5',
  'scape/landscape/scape/landscape/landscape6',
  'scape/landscape/scape/landscape/landscape7',
  'scape/landscape/scape/landscape/landscape8',
  'scape/landscape/scape/landscape/landscape9',
  'scape/landscape/scape/landscape/landscape10',
  'scape/landscape/scape/landscape/landscape11',
  'scape/landscape/scape/landscape/landscape12'
];

const landscapeServices = [
  {
    title: "Bespoke Landscape Design",
    desc: "Transform your property with a one-of-a-kind outdoor plan. Our designers collaborate with you to create inspired layouts that harmoniously blend artistry, lifestyle, and the natural environment."
  },
  {
    title: "Hardscape Architecture",
    desc: "Elevate your space with luxurious patios, elegant walkways, and custom stonework. Every element is crafted for enduring beauty and effortless functionality."
  },
  {
    title: "Botanical Softscape",
    desc: "Curate a living tapestry of trees, shrubs, and flowers chosen for lasting color, texture, and seasonal interest—tailored to thrive in Utah's unique climate."
  },
  {
    title: "Sustainable Irrigation & Drainage",
    desc: "Enjoy a lush landscape while conserving resources. We design and install intelligent water management systems for optimal health and sustainability."
  },
  {
    title: "Ambience Outdoor Lighting",
    desc: "Showcase your landscape's elegance after dusk with thoughtfully placed pathway, accent, and architectural lighting to create a warm, inviting atmosphere."
  },
  {
    title: "Eco-Conscious Solutions",
    desc: "Experience the fusion of beauty and responsibility—xeriscaping, native plants, and water-wise strategies that honor nature and minimize maintenance."
  },
  {
    title: "Signature Maintenance",
    desc: "Preserve perfection with ongoing care: expert pruning, fertilization, seasonal enhancements, and meticulous attention to every detail."
  }
];

const LandscapeFirst = () => {
  const navigate = useNavigate();

  // Build optimized image URLs
  const getOptimizedImageUrl = (publicId) => {
    return buildOptimizedUrl(publicId, {
      quality: '85',
      format: 'auto'
    });
  };

  return (
    <div className={styles.landscapeContainer}>
      <div className={styles.introSection}>
        <h1 className={styles.introTitle}>Landscape</h1>
        <p className={styles.introText}>
          Landscape design is the art and science of creating harmonious outdoor spaces tailored to your unique vision and lifestyle. This landscape design process involves planning and integrating hardscape (like patios and walkways) and softscape (such as plants and trees) to enhance the beauty, functionality, and sustainability of your property. Our expert landscape design team collaborates with you to craft custom layouts that reflect your preferences, optimize space, and complement the natural environment. From initial concept to final installation, we deliver thoughtfully designed landscapes that elevate your home's curb appeal and provide a perfect retreat for relaxation or recreation for your family and friends.
        </p>
      </div>
      
      <div className={styles.servicesSection}>
        <h2 className={styles.servicesTitle}>Modern Landscape Services Offered</h2>
        <div className={styles.servicesList}>
          {landscapeServices.map((service, idx) => (
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
        <h2 className={styles.showcaseTitle}>Landscape Showcase</h2>
        <div className={styles.showcaseGrid}>
          {landscapeImages.map((publicId, i) => (
            <div className={styles.showcaseImgWrapper} key={i}>
              <img
                src={getOptimizedImageUrl(publicId)}
                alt={`Landscape Showcase ${i + 1}`}
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

export default LandscapeFirst;