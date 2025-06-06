import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./CourtscapeFirst.module.css";

// Import gallery images in order
import Asset2 from "../../assets/courtscape/courtscape2.jpg";
import Asset3 from "../../assets/courtscape/courtscape3.jpg";
import Asset4 from "../../assets/courtscape/courtscape4.jpg";
import Asset5 from "../../assets/courtscape/courtscape5.jpg";
import Asset7 from "../../assets/courtscape/courtscape7.jpg";
import Asset8 from "../../assets/courtscape/courtscape8.jpg";
import Asset10 from "../../assets/courtscape/courtscape10.jpg";

// Ordered image array
const allAssets = [
  Asset2, Asset3, Asset4, Asset5,
  Asset7, Asset8, Asset10
];

const courtscapeFeatures = [
  {
    title: "Custom Sport Court Design",
    desc: "Tailored layouts for basketball, tennis, pickleball, and more—crafted to fit your space, needs, and style."
  },
  {
    title: "Premium Court Surfaces",
    desc: "High-quality materials for safe, durable, and high-performance play—engineered to withstand the elements."
  },
  {
    title: "Professional-Grade Sports Lighting",
    desc: "Extend your play into the evening with expertly installed, energy-efficient lighting systems for safe, clear visibility."
  },
  {
    title: "Multi-Use Game Areas",
    desc: "Versatile court installations that accommodate multiple sports and recreational activities for the whole family."
  },
  {
    title: "Safety & Drainage Solutions",
    desc: "Thoughtful engineering for proper drainage and slip resistance, ensuring a safe and long-lasting play environment."
  },
  {
    title: "Integrated Landscaping",
    desc: "Courts seamlessly integrated into your landscape with complementary plantings, fencing, and hardscape features."
  },
  {
    title: "All-Season Enjoyment",
    desc: "Courts designed for year-round use, providing a versatile backyard destination for fun, fitness, and family bonding."
  }
];

const CourtscapeFirst = () => {
  const navigate = useNavigate();
  // Use all images in their original order
  const showcaseImages = allAssets;

  return (
    <div className={styles.courtscapeContainer}>
      <div className={styles.introSection}>
        <h1 className={styles.introTitle}>Courtscape</h1>
        <p className={styles.introText}>
          Courtscape specializes in creating dynamic outdoor spaces with our sport court installation services and related offerings, tailored to bring fun and functionality to your backyard. Our sport courts are custom-built for activities like basketball, tennis, or pickleball, using high-quality materials to ensure durability, safety, and optimal performance. Beyond the courts, we enhance your space with complementary features such as professional-grade sports lighting for evening play. Every detail is designed to integrate seamlessly into your landscape, providing a versatile, long-lasting area for recreation and family enjoyment.
        </p>
      </div>
      
      <div className={styles.featuresSection}>
        <h2 className={styles.featuresTitle}>Signature Courtscape Features</h2>
        <div className={styles.featuresList}>
          {courtscapeFeatures.map((feature, idx) => (
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
        <h2 className={styles.showcaseTitle}>Courtscape Showcase</h2>
        <div className={styles.showcaseGrid}>
          {showcaseImages.map((img, i) => (
            <div className={styles.showcaseImgWrapper} key={i}>
              <img
                src={img}
                alt={`Courtscape Showcase ${i + 1}`}
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

export default CourtscapeFirst;