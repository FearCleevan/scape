import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./NightscapeFirst.module.css";

// Import gallery images
import Asset1 from "../../assets/nightscape/nightscape1.jpg";
import Asset2 from "../../assets/nightscape/nightscape2.jpg";
import Asset3 from "../../assets/nightscape/nightscape3.jpg";
import Asset4 from "../../assets/nightscape/nightscape4.jpg";
import Asset5 from "../../assets/nightscape/nightscape5.jpg";
import Asset6 from "../../assets/nightscape/nightscape6.jpg";
import Asset7 from "../../assets/nightscape/nightscape7.jpg";
import Asset8 from "../../assets/nightscape/nightscape8.jpg";
import Asset9 from "../../assets/nightscape/nightscape9.jpg";
import Asset10 from "../../assets/nightscape/nightscape10.jpg";
import Asset11 from "../../assets/nightscape/nightscape11.jpg";
import Asset12 from "../../assets/nightscape/nightscape12.jpg";


const allAssets = [
  Asset1, Asset2, Asset3, Asset4, Asset5, Asset6, Asset7, Asset8, Asset9, Asset10,
  Asset11, Asset12
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
  const showcaseImages = shuffle(allAssets).slice(0, 12);

  return (
    <div className={styles.nightscapeContainer}>
      <div className={styles.introSection}>
        <h1 className={styles.introTitle}>Nightscape</h1>
        <p className={styles.introText}>
          Nightscape elevates your outdoor living experience with our specialized services in outdoor lighting and audio-visual (A/V) systems, designed to enhance both ambiance and entertainment. Our outdoor lighting solutions include custom installations of pathway lights, accent lighting, and energy-efficient LED systems, creating a warm, safe, and inviting atmosphere for evening gatherings or late-night relaxation. Additionally, our A/V systems bring high-quality sound and visuals to your backyard, with weatherproof speakers, outdoor TVs, and smart controls seamlessly integrated into your landscape. From design to installation, we ensure these features complement your space, making it perfect for hosting events or enjoying a quiet night under the stars.
        </p>
      </div>
      <div className={styles.featuresSection}>
        <h2 className={styles.featuresTitle}>Signature Nightscape Services</h2>
        <div className={styles.featuresList}>
          {nightscapeFeatures.map((feature, idx) => (
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
        <h2 className={styles.showcaseTitle}>Nightscape Showcase</h2>
        <div className={styles.showcaseGrid}>
          {showcaseImages.map((img, i) => (
            <div className={styles.showcaseImgWrapper} key={i}>
              <img
                src={img}
                alt={`Nightscape Showcase ${i + 1}`}
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

export default NightscapeFirst;