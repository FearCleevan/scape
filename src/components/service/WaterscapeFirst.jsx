import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./WaterscapeFirst.module.css";

// Import gallery images in order
import Asset1 from "../../assets/waterscape/waterscape1.jpg";
import Asset2 from "../../assets/waterscape/waterscape2.jpg";
import Asset3 from "../../assets/waterscape/waterscape3.jpg";
import Asset4 from "../../assets/waterscape/waterscape4.jpg";
import Asset5 from "../../assets/waterscape/waterscape5.jpg";
import Asset6 from "../../assets/waterscape/waterscape6.jpg";
import Asset7 from "../../assets/waterscape/waterscape7.jpg";
import Asset8 from "../../assets/waterscape/waterscape8.jpg";
import Asset9 from "../../assets/waterscape/waterscape9.jpg";
import Asset10 from "../../assets/waterscape/waterscape10.jpg";
import Asset11 from "../../assets/waterscape/waterscape11.jpg";
import Asset12 from "../../assets/waterscape/waterscape12.jpg";

// Ordered image array
const allAssets = [
  Asset1, Asset2, Asset3, Asset4, Asset5,
  Asset6, Asset7, Asset8, Asset9, Asset10,
  Asset11, Asset12
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
  // Use all images in their original order
  const showcaseImages = allAssets;

  return (
    <div className={styles.waterscapeContainer}>
      <div className={styles.introSection}>
        <h1 className={styles.introTitle}>Waterscape</h1>
        <p className={styles.introText}>
          Waterscape brings your outdoor vision to life with a variety of captivating water features designed to enhance the beauty and tranquility of your landscape—with or without the installation of a pool. Our water features encompass elegant fountains, cascading waterfalls, serene ponds, and bubbling streams, each crafted to create a peaceful focal point and promote a sense of calm in your yard. Every element is thoughtfully designed and installed to harmonize with your space, delivering a stunning, low-maintenance outdoor retreat tailored to your lifestyle.
        </p>
      </div>
      
      <div className={styles.featuresSection}>
        <h2 className={styles.featuresTitle}>Signature Waterscape Features</h2>
        <div className={styles.featuresList}>
          {waterscapeFeatures.map((feature, idx) => (
            <div className={styles.featureCard} key={idx}>
              <h3 className={styles.featureCardTitle}>{feature.title}</h3>
              <p className={styles.featureCardDesc}>{feature.desc}</p>
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
          {showcaseImages.map((img, i) => (
            <div className={styles.showcaseImgWrapper} key={i}>
              <img
                src={img}
                alt={`Waterscape Showcase ${i + 1}`}
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

export default WaterscapeFirst;