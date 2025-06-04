import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./FirescapeFirst.module.css";

// Import gallery images in order
import Asset1 from "../../assets/firescape/firescape1.jpg";
import Asset2 from "../../assets/firescape/firescape2.jpg";
import Asset3 from "../../assets/firescape/firescape3.jpg";
import Asset4 from "../../assets/firescape/firescape4.jpg";
import Asset5 from "../../assets/firescape/firescape5.jpg";
import Asset6 from "../../assets/firescape/firescape6.jpg";
import Asset7 from "../../assets/firescape/firescape7.jpg";
import Asset8 from "../../assets/firescape/firescape8.jpg";
import Asset9 from "../../assets/firescape/firescape9.jpg";
import Asset10 from "../../assets/firescape/firescape10.jpg";
import Asset11 from "../../assets/firescape/firescape11.jpg";
import Asset12 from "../../assets/firescape/firescape12.jpg";
import Asset13 from "../../assets/firescape/firescape13.jpg";
import Asset14 from "../../assets/firescape/firescape14.jpg";
import Asset15 from "../../assets/firescape/firescape15.jpg";
import Asset16 from "../../assets/firescape/firescape16.jpg";
import Asset17 from "../../assets/firescape/firescape17.jpg";
import Asset18 from "../../assets/firescape/firescape18.jpg";
import Asset20 from "../../assets/firescape/firescape19.jpg";

// Ordered image array
const allAssets = [
  Asset1, Asset2, Asset3, Asset4, Asset5,
  Asset6, Asset7, Asset8, Asset9, Asset10,
  Asset11, Asset12, Asset13, Asset14, Asset15,
  Asset16, Asset17, Asset18, Asset20
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
  // Use all images in their original order
  const showcaseImages = allAssets;

  return (
    <div className={styles.firescapeContainer}>
      <div className={styles.introSection}>
        <h1 className={styles.introTitle}>Firescape</h1>
        <p className={styles.introText}>
          Firescape creates inviting outdoor spaces with our expertly crafted fire features and complementary services, designed to add warmth and charm to your landscape. Our fire features include custom fire pits, elegant fireplaces, and modern fire tables, perfect for gathering with family and friends on cool evenings while enhancing your yard's ambiance.
        </p>
      </div>

      <div className={styles.featuresSection}>
        <h2 className={styles.featuresTitle}>Signature Firescape Features</h2>
        <div className={styles.featuresList}>
          {firescapeFeatures.map((feature, idx) => (
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
        <h2 className={styles.showcaseTitle}>Firescape Showcase</h2>
        <div className={styles.showcaseGrid}>
          {showcaseImages.map((img, i) => (
            <div className={styles.showcaseImgWrapper} key={i}>
              <img
                src={img}
                alt={`Firescape Showcase ${i + 1}`}
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

export default FirescapeFirst;