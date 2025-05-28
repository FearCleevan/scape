import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./PoolscapeFirst.module.css";

// Import gallery images
import Asset1 from "../../assets/poolscape/poolscape1.jpg";
import Asset2 from "../../assets/poolscape/poolscape2.jpg";
import Asset3 from "../../assets/poolscape/poolscape3.jpg";
import Asset4 from "../../assets/poolscape/poolscape4.jpg";
import Asset5 from "../../assets/poolscape/poolscape5.jpg";
import Asset6 from "../../assets/poolscape/poolscape6.jpg";
import Asset7 from "../../assets/poolscape/poolscape7.jpg";
import Asset8 from "../../assets/poolscape/poolscape8.jpg";
import Asset9 from "../../assets/poolscape/poolscape9.jpg";
import Asset10 from "../../assets/poolscape/poolscape10.jpg";
import Asset11 from "../../assets/poolscape/poolscape11.jpg";
import Asset12 from "../../assets/poolscape/poolscape12.jpg";
import Asset13 from "../../assets/poolscape/poolscape13.jpg";
import Asset14 from "../../assets/poolscape/poolscape14.jpg";


const allAssets = [
  Asset1, Asset2, Asset3, Asset4, Asset5, Asset6, Asset7, Asset8, Asset9, Asset10,
  Asset11, Asset12, Asset13, Asset14
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
  const showcaseImages = shuffle(allAssets).slice(0, 14);

  return (
    <div className={styles.poolscapeContainer}>
      <div className={styles.introSection}>
        <h1 className={styles.introTitle}>Poolscape</h1>
        <p className={styles.introText}>
          Poolscape specializes in creating your dream backyard oasis through our comprehensive pool construction services, tailored to enhance both beauty and functionality. Our process begins with expert design and planning, where we collaborate with you to craft a custom pool that fits your vision and space. We handle every detail, from excavation and pool installation to plumbing, electrical work, and safety features like fencing. Beyond the pool, we enhance your yard with surrounding features such as elegant hardscaping for patios and walkways, lush softscaping with plants and trees, and even custom additions like outdoor leisure spaces, lighting or water features, ensuring a seamless, stunning outdoor retreat for you to enjoy year-round.
        </p>
      </div>
      <div className={styles.featuresSection}>
        <h2 className={styles.featuresTitle}>Signature Poolscape Services</h2>
        <div className={styles.featuresList}>
          {poolscapeFeatures.map((feature, idx) => (
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
        <h2 className={styles.showcaseTitle}>Poolscape Showcase</h2>
        <div className={styles.showcaseGrid}>
          {showcaseImages.map((img, i) => (
            <div className={styles.showcaseImgWrapper} key={i}>
              <img
                src={img}
                alt={`Poolscape Showcase ${i + 1}`}
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

export default PoolscapeFirst;