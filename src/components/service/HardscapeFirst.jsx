import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./HardscapeFirst.module.css";

// Import gallery images in order
import Asset1 from "../../assets/hardscape/hardscape1.jpg";
import Asset2 from "../../assets/hardscape/hardscape2.jpg";
import Asset3 from "../../assets/hardscape/hardscape3.jpg";
import Asset4 from "../../assets/hardscape/hardscape4.jpg";
import Asset5 from "../../assets/hardscape/hardscape5.jpg";
import Asset6 from "../../assets/hardscape/hardscape6.jpg";
import Asset7 from "../../assets/hardscape/hardscape7.jpg";
import Asset8 from "../../assets/hardscape/hardscape8.jpg";
import Asset9 from "../../assets/hardscape/hardscape9.jpg";
import Asset10 from "../../assets/hardscape/hardscape10.jpg";
import Asset11 from "../../assets/hardscape/hardscape11.jpg";
import Asset12 from "../../assets/hardscape/hardscape12.jpg";
import Asset13 from "../../assets/hardscape/hardscape13.jpg";
import Asset14 from "../../assets/hardscape/hardscape14.jpg";
import Asset15 from "../../assets/hardscape/hardscape15.jpg";
import Asset16 from "../../assets/hardscape/hardscape16.jpg";

// Ordered image array
const allAssets = [
  Asset1, Asset2, Asset3, Asset4, Asset5,
  Asset6, Asset7, Asset8, Asset9, Asset10,
  Asset11, Asset12, Asset13, Asset14,
  Asset15, Asset16
];

const hardscapeFeatures = [
  {
    title: "Elegant Patios",
    desc: "Create inviting spaces for gatherings with beautifully crafted patios, using durable stone, brick, or pavers that blend seamlessly with your landscape."
  },
  {
    title: "Walkways & Pathways",
    desc: "Guide movement and add visual interest with custom walkways—functional, safe, and designed to enhance the flow of your outdoor environment."
  },
  {
    title: "Retaining Walls",
    desc: "Introduce structure and dimension to your yard with expertly engineered retaining walls that manage slopes and add architectural appeal."
  },
  {
    title: "Outdoor Kitchens",
    desc: "Elevate your entertaining with fully equipped outdoor kitchens, thoughtfully integrated for seamless indoor-outdoor living."
  },
  {
    title: "Driveways",
    desc: "Upgrade curb appeal and durability with custom-designed driveways, built to last and complement the style of your home."
  },
  {
    title: "Fire Pits & Seating Areas",
    desc: "Add warmth and ambiance with built-in fire pits and cozy seating walls, perfect for relaxing evenings with family and friends."
  },
  {
    title: "Water Features",
    desc: "Incorporate tranquility with stunning water features—fountains, ponds, or streams—that add a soothing element to your hardscape."
  }
];

const HardscapeFirst = () => {
  const navigate = useNavigate();
  // Use all images in their original order
  const showcaseImages = allAssets;

  return (
    <div className={styles.hardscapeContainer}>
      <div className={styles.introSection}>
        <h1 className={styles.introTitle}>Hardscape</h1>
        <p className={styles.introText}>
          Hardscape enhances your outdoor spaces with expertly designed hardscape features, which refer to the non-living elements that provide structure and functionality to your landscape. Hardscaping includes durable components like patios, walkways, retaining walls, driveways, and outdoor kitchens, crafted from materials such as stone, brick, or concrete. These elements not only add aesthetic appeal but also improve usability, drainage, and longevity of your yard. Whether you’re looking to create a cozy seating area or a practical pathway, our hardscape solutions are tailored to complement your natural surroundings and elevate your outdoor living experience.
        </p>
      </div>

      <div className={styles.featuresSection}>
        <h2 className={styles.featuresTitle}>Signature Hardscape Features</h2>
        <div className={styles.featuresList}>
          {hardscapeFeatures.map((feature, idx) => (
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
        <h2 className={styles.showcaseTitle}>Hardscape Showcase</h2>
        <div className={styles.showcaseGrid}>
          {showcaseImages.map((img, i) => (
            <div className={styles.showcaseImgWrapper} key={i}>
              <img
                src={img}
                alt={`Hardscape Showcase ${i + 1}`}
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

export default HardscapeFirst;