import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './ServicesFirst.module.css';
import { buildOptimizedUrl, IMAGE_ASSETS } from '../../utils/cloudinary';

const SERVICE_COLORS = {
  landscape: '#8B5B29',
  hardscape: '#97999B',
  softscape: '#6CC24A',
  poolscape: '#0072CE',
  nightscape: '#F7EA48',
  waterscape: '#8BB8E8',
  firescape: '#FE5000',
  courtscape: '#FF914D',
};

function getColoredTitle(title, isHovered) {
  // Always split at first "scape"
  const idx = title.toLowerCase().indexOf('scape');
  if (idx === -1) return title; // fallback
  const first = title.slice(0, idx);
  const second = title.slice(idx);
  const color = SERVICE_COLORS[title.toLowerCase()] || '#333';
  return (
    <>
      <span
        style={{
          color,
          fontWeight: isHovered ? 500 : 400,
          transition: 'all 0.2s',
        }}
      >
        {first}
      </span>
      <span
        style={{
          color: '#fff',
          fontWeight: isHovered ? 500 : 400,
          transition: 'all 0.2s',
        }}
      >
        {second}
      </span>
      <span
        style={{
          opacity: isHovered ? 1 : 0,
          marginLeft: isHovered ? 8 : 0,
          color: color,
          fontWeight: 700,
          fontSize: '1.2em',
          transition: 'all 0.2s',
        }}
      >
        →
      </span>
    </>
  );
}

const ServicesFirst = () => {
  const navigate = useNavigate();
  const [hoveredIndex, setHoveredIndex] = React.useState(null);

  // Build optimized image URLs
  const getOptimizedImageUrl = (publicId) => {
    return buildOptimizedUrl(publicId, {
      quality: '85',
      format: 'auto'
    });
  };

  // Service images from Cloudinary
  const serviceImages = {
    landscape: IMAGE_ASSETS.landscape1,
    hardscape: IMAGE_ASSETS.hardscape1,
    softscape: IMAGE_ASSETS.softscape1,
    poolscape: IMAGE_ASSETS.poolscape1,
    nightscape: IMAGE_ASSETS.nightscape1,
    waterscape: IMAGE_ASSETS.waterscape2,
    firescape: IMAGE_ASSETS.firescape2,
    courtscape: IMAGE_ASSETS.courtscape2
  };

  const services = [
    {
      title: 'landscape',
      description:
        "Landscape design is the art and science of creating harmonious outdoor spaces tailored to your unique vision and lifestyle. Our collaborative process blends hardscape and softscape elements—patios, walkways, trees, and gardens—to deliver thoughtfully designed landscapes that enhance curb appeal and provide a perfect retreat for relaxation or recreation.",
      image: serviceImages.landscape,
    },
    {
      title: 'hardscape',
      description:
        "Hardscape enhances your outdoor spaces with expertly designed, durable features—patios, walkways, retaining walls, and outdoor kitchens—that provide structure and usability. Crafted from premium materials, our hardscape solutions are tailored to complement your natural surroundings and elevate your outdoor living experience.",
      image: serviceImages.hardscape,
    },
    {
      title: 'softscape',
      description:
        "Softscape brings your landscape to life with carefully selected plants, trees, shrubs, and flowers that add beauty, color, and year-round interest. We design thriving, picturesque environments that support biodiversity and reflect your preferences and Utah's climate.",
      image: serviceImages.softscape,
    },
    {
      title: 'poolscape',
      description:
        "Poolscape specializes in creating your dream backyard oasis through comprehensive pool construction and landscaping. From custom pool design and installation to elegant patios and lush plantings, we handle every detail for a seamless, stunning outdoor retreat you'll love year-round.",
      image: serviceImages.poolscape,
    },
    {
      title: 'nightscape',
      description:
        "Nightscape elevates your outdoor experience with ambient lighting and outdoor A/V systems. We design and install pathway lights, accent lighting, and weatherproof speakers, creating a warm, inviting atmosphere perfect for gatherings or quiet evenings under the stars.",
      image: serviceImages.nightscape,
    },
    {
      title: 'waterscape',
      description:
        "Waterscape brings tranquility to your space with captivating water features—fountains, waterfalls, ponds, and streams—designed to harmonize with your landscape. Each water element is thoughtfully installed for stunning, low-maintenance beauty with or without a pool.",
      image: serviceImages.waterscape,
    },
    {
      title: 'firescape',
      description:
        "Firescape creates inviting outdoor areas with custom fire features—fire pits, fireplaces, and modern fire tables—perfect for gathering with family and friends on cool evenings. Our expert designs add warmth, charm, and an unforgettable ambiance to your yard.",
      image: serviceImages.firescape,
    },
    {
      title: 'courtscape',
      description:
        "Courtscape specializes in dynamic outdoor spaces with custom sport court installations for basketball, tennis, and pickleball. Our courts are built for durability and performance, complemented by professional lighting and seamless integration into your landscape for years of recreation.",
      image: serviceImages.courtscape,
    }
  ];

  const handleServiceClick = (serviceTitle) => {
    // Convert title to lowercase for the route
    const route = serviceTitle.toLowerCase();
    navigate(`/services/${route}`);
  };

  return (
    <div className={styles.servicesContainer}>
      <div className={styles.servicesContent}>
        {/* Introductory Section */}
        <div className={styles.introSection}>
          <h1 className={styles.introTitle}>Bringing Your Outdoor Vision to Life</h1>
          <h2 className={styles.introSubtitle}>Full-Service Landscape Design & Build</h2>
          <p className={styles.introText}>
            At scape, we believe exceptional landscapes do more than beautify—they connect people, foster memories, and strengthen communities. Born from the merger of Peak Property Services and KC Property Services, we unite 50+ years of expertise to deliver transformative outdoor spaces. Guided by our mission of designing landscapes that build relationships, we blend sustainable innovation and timeless artistry to create environments that inspire connection and reflect your unique vision.
          </p>
        </div>

        {/* Services Grid Title */}
        <h2 className={styles.servicesGridTitle}>Our Services</h2>

        {/* Masonry Grid with Clickable Service Titles */}
        <div className={styles.masonryGrid}>
          {services.map((service, index) => (
            <div key={index} className={styles.masonryItem}>
              <div className={styles.serviceCard}>
                <div
                  className={styles.serviceImage}
                  style={{ 
                    backgroundImage: `url(${getOptimizedImageUrl(service.image)})` 
                  }}
                >
                  <div
                    className={styles.serviceTitle}
                    role="button"
                    tabIndex={0}
                    onClick={() => handleServiceClick(service.title)}
                    onKeyDown={(e) => e.key === 'Enter' && handleServiceClick(service.title)}
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    aria-label={service.title}
                  >
                    {getColoredTitle(service.title, hoveredIndex === index)}
                  </div>
                </div>
                <div className={styles.serviceOverlay}>
                  <p>{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Why Choose Us Section */}
        <div className={styles.whyChooseSection}>
          <h2 className={styles.whyChooseTitle}>Why Choose scape?</h2>
          <ul className={styles.whyChooseList}>
            <li>
              <strong>Heritage:</strong> Built on the legacy of Steve Mortensen and Kent Christensen, with over 50 years of trusted service.
            </li>
            <li>
              <strong>Holistic Approach:</strong> From concept to installation, we handle every detail for seamless results.
            </li>
            <li>
              <strong>Local Expertise:</strong> Tailored solutions for Utah's unique climate and terrain.
            </li>
            <li>
              <strong>Art Meets Function:</strong> Outdoor spaces designed for inspiration, connection, and lasting beauty.
            </li>
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