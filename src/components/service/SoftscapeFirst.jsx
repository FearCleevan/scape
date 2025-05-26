import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./SoftscapeFirst.module.css";

// Import gallery images
import Asset1 from "../../assets/gallery/Asset1.jpg";
import Asset2 from "../../assets/gallery/Asset2.jpg";
import Asset3 from "../../assets/gallery/Asset3.jpg";
import Asset4 from "../../assets/gallery/Asset4.jpg";
import Asset5 from "../../assets/gallery/Asset5.jpg";
import Asset6 from "../../assets/gallery/Asset6.jpg";
import Asset7 from "../../assets/gallery/Asset7.jpg";
import Asset8 from "../../assets/gallery/Asset8.jpg";
import Asset9 from "../../assets/gallery/Asset9.jpg";
import Asset10 from "../../assets/gallery/Asset10.jpg";
import Asset11 from "../../assets/gallery/Asset11.jpg";
import Asset12 from "../../assets/gallery/Asset12.jpg";
import Asset13 from "../../assets/gallery/Asset13.jpg";
import Asset14 from "../../assets/gallery/Asset14.jpg";
import Asset15 from "../../assets/gallery/Asset15.jpg";
import Asset16 from "../../assets/gallery/Asset16.jpg";
import Asset17 from "../../assets/gallery/Asset17.jpg";
import Asset18 from "../../assets/gallery/Asset18.jpg";
import Asset20 from "../../assets/gallery/Asset20.jpg";
import Asset21 from "../../assets/gallery/Asset21.jpg";
import Asset22 from "../../assets/gallery/Asset22.jpg";
import Asset23 from "../../assets/gallery/Asset23.jpg";
import Asset24 from "../../assets/gallery/Asset24.jpg";
import Asset25 from "../../assets/gallery/Asset25.jpg";
import Asset26 from "../../assets/gallery/Asset26.jpg";
import Asset27 from "../../assets/gallery/Asset27.jpg";
import Asset28 from "../../assets/gallery/Asset28.jpg";
import Asset29 from "../../assets/gallery/Asset29.jpg";
import Asset30 from "../../assets/gallery/Asset30.jpg";
import Asset31 from "../../assets/gallery/Asset31.jpg";
import Asset32 from "../../assets/gallery/Asset32.jpg";
import Asset33 from "../../assets/gallery/Asset33.jpg";
import Asset34 from "../../assets/gallery/Asset34.jpg";
import Asset35 from "../../assets/gallery/Asset35.jpg";
import Asset36 from "../../assets/gallery/Asset36.jpg";
import Asset37 from "../../assets/gallery/Asset37.jpg";
import Asset38 from "../../assets/gallery/Asset38.jpg";
import Asset39 from "../../assets/gallery/Asset39.jpg";
import Asset40 from "../../assets/gallery/Asset40.jpg";

const allAssets = [
  Asset1, Asset2, Asset3, Asset4, Asset5, Asset6, Asset7, Asset8, Asset9, Asset10,
  Asset11, Asset12, Asset13, Asset14, Asset15, Asset16, Asset17, Asset18, Asset20,
  Asset21, Asset22, Asset23, Asset24, Asset25, Asset26, Asset27, Asset28, Asset29, Asset30,
  Asset31, Asset32, Asset33, Asset34, Asset35, Asset36, Asset37, Asset38, Asset39, Asset40
];

// Shuffle and pick 8 images for showcase
function shuffle(array) {
  const arr = array.slice();
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

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
  const showcaseImages = shuffle(allAssets).slice(0, 8);

  return (
    <div className={styles.softscapeContainer}>
      <div className={styles.introSection}>
        <h1 className={styles.introTitle}>Softscape</h1>
        <p className={styles.introText}>
          Softscape brings your outdoor spaces to life with beautifully designed elements, which encompass the living, natural features of your landscape. Softscaping includes plants, trees, shrubs, flowers, and grass, carefully selected to enhance beauty, provide shade, and promote biodiversity. These organic components add color, texture, and seasonal interest while supporting a healthy ecosystem. Whether you desire a vibrant garden, a serene lawn, or a sustainable planting plan, our softscape expertise ensures a thriving, picturesque environment tailored to your preferences and local climate.
        </p>
      </div>
      <div className={styles.featuresSection}>
        <h2 className={styles.featuresTitle}>Signature Softscape Features</h2>
        <div className={styles.featuresList}>
          {softscapeFeatures.map((feature, idx) => (
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