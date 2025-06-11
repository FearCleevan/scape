import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./LandscapeFirst.module.css";

// Import all images in order
import Asset1 from "../../assets/landscape/landscape1.jpg";
import Asset2 from "../../assets/landscape/landscape2.jpg";
import Asset3 from "../../assets/landscape/landscape3.jpg";
import Asset4 from "../../assets/landscape/landscape4.jpg";
import Asset5 from "../../assets/landscape/landscape5.jpg";
import Asset6 from "../../assets/landscape/landscape6.jpg";
import Asset7 from "../../assets/landscape/landscape7.jpg";
import Asset8 from "../../assets/landscape/landscape8.jpg";
import Asset9 from "../../assets/landscape/landscape9.jpg";
import Asset10 from "../../assets/landscape/landscape10.jpg";
import Asset11 from "../../assets/landscape/landscape11.jpg";
import Asset12 from "../../assets/landscape/landscape12.jpg";

// Ordered image array
const allAssets = [
  Asset1, Asset2, Asset3, Asset4, Asset5, 
  Asset6, Asset7, Asset8, Asset9, Asset10,
  Asset11, Asset12
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
  
  // Use the first 12 images in order
  const showcaseImages = allAssets.slice(0, 12);

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
          {showcaseImages.map((img, i) => (
            <div className={styles.showcaseImgWrapper} key={i}>
              <img
                src={img}
                alt={`Landscape Showcase ${i + 1}`}
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

export default LandscapeFirst;