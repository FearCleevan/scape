import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./SoftscapeFirst.module.css";

// Import gallery images
import Asset1 from "../../assets/softscape/softscape1.jpg";
import Asset2 from "../../assets/softscape/softscape2.jpg";
import Asset3 from "../../assets/softscape/softscape3.jpg";
import Asset4 from "../../assets/softscape/softscape4.jpg";
import Asset5 from "../../assets/softscape/softscape5.jpg";
import Asset6 from "../../assets/softscape/softscape6.jpg";
import Asset7 from "../../assets/softscape/softscape7.jpg";
import Asset8 from "../../assets/softscape/softscape8.jpg";
import Asset9 from "../../assets/softscape/softscape9.jpg";
import Asset10 from "../../assets/softscape/softscape10.jpg";
import Asset11 from "../../assets/softscape/softscape11.jpg";
import Asset12 from "../../assets/softscape/softscape12.jpg";


const allAssets = [
  Asset1, Asset2, Asset3, Asset4, Asset5, Asset6, Asset7, Asset8, Asset9, Asset10,
  Asset11, Asset12
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
  // Use all images in their original order
  const showcaseImages = allAssets;

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
          {softscapeFeatures.map((feature, idx) => (
            <div className={styles.serviceCard} key={idx}>
              <h3 className={styles.serviceCardTitle}>{feature.title}</h3>
              <p className={styles.serviceCardDesc}>{feature.desc}</p>
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
          {showcaseImages.map((img, i) => (
            <div className={styles.showcaseImgWrapper} key={i}>
              <img
                src={img}
                alt={`Softscape Showcase ${i + 1}`}
                className={styles.showcaseImg}
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