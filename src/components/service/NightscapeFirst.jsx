import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./NightscapeFirst.module.css";
import { buildOptimizedUrl, IMAGE_ASSETS } from '../../utils/cloudinary';

// Image public IDs for Nightscape with correct duplicate folder structure
const nightscapeImages = [
  'scape/nightscape/scape/nightscape/nightscape1',
  'scape/nightscape/scape/nightscape/nightscape2',
  'scape/nightscape/scape/nightscape/nightscape3',
  'scape/nightscape/scape/nightscape/nightscape4',
  'scape/nightscape/scape/nightscape/nightscape5',
  'scape/nightscape/scape/nightscape/nightscape6',
  'scape/nightscape/scape/nightscape/nightscape9',
  'scape/nightscape/scape/nightscape/nightscape10',
  'scape/nightscape/scape/nightscape/nightscape11',
  'scape/nightscape/scape/nightscape/nightscape12'
];

const nightscapeFeatures = [
  {
    title: "Custom Outdoor Lighting Design",
    desc: "Transform your landscape after dark with tailored installations of pathway, accent, and architectural lighting for safety and ambiance."
  },
  {
    title: "Energy-Efficient LED Solutions",
    desc: "Illuminate your space with long-lasting, low-energy LED systems that highlight features and create inviting outdoor environments."
  },
  {
    title: "Smart Lighting Controls",
    desc: "Enjoy seamless management of your lighting setup with app-based or voice-activated smart controls for ultimate convenience."
  },
  {
    title: "Weatherproof A/V Systems",
    desc: "Bring high-quality sound and visuals outdoors with weather-resistant speakers, TVs, and integrated audio-visual equipment."
  },
  {
    title: "Integrated Entertainment Zones",
    desc: "Design dedicated outdoor entertainment spaces with immersive A/V, ideal for movie nights, music, and gatherings."
  },
  {
    title: "Outdoor Event & Party Lighting",
    desc: "Set the mood for any occasion with dynamic lighting schemes, from intimate evenings to lively celebrations."
  },
  {
    title: "Professional Installation & Support",
    desc: "From initial design to expert installation and ongoing support, we ensure every feature complements your landscape perfectly."
  }
];

const NightscapeFirst = () => {
  const navigate = useNavigate();

  // Build optimized image URLs
  const getOptimizedImageUrl = (publicId) => {
    return buildOptimizedUrl(publicId, {
      quality: '85',
      format: 'auto'
    });
  };

  return (
    <div className={styles.nightscapeContainer}>
      <div className={styles.introSection}>
        <h1 className={styles.introTitle}>Nightscape</h1>
        <p className={styles.introText}>
          Nightscape elevates your outdoor living experience with our specialized services in outdoor lighting and audio-visual (A/V) systems, designed to enhance both ambiance and entertainment. Our outdoor lighting solutions include custom installations of pathway lights, accent lighting, and energy-efficient LED systems, creating a warm, safe, and inviting atmosphere for evening gatherings or late-night relaxation. Additionally, our A/V systems bring high-quality sound and visuals to your backyard, with weatherproof speakers, outdoor TVs, and smart controls seamlessly integrated into your landscape. From design to installation, we ensure these features complement your space, making it perfect for hosting events or enjoying a quiet night under the stars.
        </p>
      </div>
      <div className={styles.servicesSection}>
        <h2 className={styles.servicesTitle}>Signature Nightscape Services</h2>
        <div className={styles.servicesList}>
          {nightscapeFeatures.map((service, idx) => (
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
        <h2 className={styles.showcaseTitle}>Nightscape Showcase</h2>
        <div className={styles.showcaseGrid}>
          {nightscapeImages.map((publicId, i) => (
            <div className={styles.showcaseImgWrapper} key={i}>
              <img
                src={getOptimizedImageUrl(publicId)}
                alt={`Nightscape Showcase ${i + 1}`}
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

export default NightscapeFirst;