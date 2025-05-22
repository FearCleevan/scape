import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './ServicesFirst.module.css';

// Import assets
import Asset1 from '../../assets/images/Asset1.jpg';
import Asset2 from '../../assets/images/Asset2.jpg';
import Asset3 from '../../assets/images/Asset3.jpg';

const ServicesFirst = () => {
  const navigate = useNavigate();

  const handleServiceClick = (serviceTitle) => {
    // Convert title to lowercase for the route
    const route = serviceTitle.toLowerCase();
    navigate(`/services/${route}`);
  };

  const services = [
    {
      title: 'LANDSCAPE',
      description: 'Tailored outdoor spaces harmonizing hardscape and softscape for beauty, function, and longevity. We blend your vision with expert planning to elevate curb appeal and create havens for relaxation.',
      image: Asset1
    },
    {
      title: 'HARDSCAPE',
      description: 'Patios, walkways, retaining walls, and outdoor kitchens built with precision. We use premium materials (stone, pavers, concrete) to add structure and elegance to your property.',
      image: Asset2
    },
    {
      title: 'SOFTSCAPE',
      description: 'Lush planting designs with native trees, shrubs, and flowers. Our selections thrive in Utah\'s climate, offering year-round color, shade, and ecological benefits.',
      image: Asset3
    },
    {
      title: 'POOLSCAPE',
      description: 'Custom pools paired with integrated landscaping. We handle everything from excavation to finishing touches like lighting and water features for a seamless backyard oasis.',
      image: Asset1
    },
    {
      title: 'NIGHTSCAPE',
      description: 'Ambient lighting and weatherproof A/V systems to extend your outdoor enjoyment after dark. Think pathway lights, fire feature accents, and hidden speakers.',
      image: Asset2
    },
    {
      title: 'WATERSCAPE',
      description: 'Serene fountains, waterfalls, or ponds that add movement and tranquility—no pool required. Designed for low maintenance and high visual impact.',
      image: Asset3
    },
    {
      title: 'FIRESCAPE',
      description: 'Cozy fire pits, fireplaces, or modern fire tables to gather around. Perfect for Utah\'s cool evenings and mountain views.',
      image: Asset1
    },
    {
      title: 'COURTSCAPE',
      description: 'Sport courts (basketball, pickleball, tennis) with professional surfacing and lighting. We optimize space for active lifestyles.',
      image: Asset2
    }
  ];

  return (
    <div className={styles.servicesContainer}>
      <div className={styles.servicesContent}>
        {/* Introductory Section */}
        <div className={styles.introSection}>
          <h1 className={styles.introTitle}>Bringing Your Outdoor Vision to Life</h1>
          <h2 className={styles.introSubtitle}>Full-Service Landscape Design & Build</h2>
          
          <p className={styles.introText}>
            At SCAPE, we don't just design landscapes—we craft immersive outdoor experiences. 
            Born from the merger of Peak Property Services and KC Property Services, we unite 
            50+ years of expertise to transform your yard into a personalized retreat. From sleek 
            modern patios to lush garden sanctuaries, every project reflects our commitment to 
            innovation, craftsmanship, and sustainability.
          </p>
        </div>

        {/* Services Grid Title */}
        <h2 className={styles.servicesGridTitle}>Our Services</h2>

        {/* Masonry Grid with Clickable Titles */}
        <div className={styles.masonryGrid}>
          {services.map((service, index) => (
            <div key={index} className={styles.masonryItem}>
              <div className={styles.serviceCard}>
                <div 
                  className={styles.serviceImage}
                  style={{ backgroundImage: `url(${service.image})` }}
                >
                  <div className={styles.serviceTitle}>{service.title}</div>
                </div>
                <div className={styles.serviceOverlay}>
                  <h3 
                    className={styles.clickableTitle}
                    onClick={() => handleServiceClick(service.title)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => e.key === 'Enter' && handleServiceClick(service.title)}
                  >
                    {service.title}
                  </h3>
                  <p>{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Why Choose Us Section */}
        <div className={styles.whyChooseSection}>
          <h2 className={styles.whyChooseTitle}>Why Choose SCAPE?</h2>
          <ul className={styles.whyChooseList}>
            <li><strong>Heritage:</strong> Decades of trusted service under founders Steve Mortensen and Kent Christensen</li>
            <li><strong>Holistic Approach:</strong> From concept to installation, we handle every detail</li>
            <li><strong>Local Expertise:</strong> Tailored solutions for Utah's unique climate and terrain</li>
            <li><strong>Art Meets Function:</strong> Spaces designed to inspire and endure</li>
          </ul>
          
          <div className={styles.callToAction}>
            Let's reimagine your outdoor potential.
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesFirst;