import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import { FiChevronLeft, FiChevronRight, FiChevronDown } from 'react-icons/fi';
import styles from './ContainerFirst.module.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';

// Import specific images for each service
import LandscapeImg from '../../assets/landscape/landscape1.jpg';
import HardscapeImg from '../../assets/hardscape/hardscape1.jpg';
import SoftscapeImg from '../../assets/softscape/softscape1.jpg';
import PoolscapeImg from '../../assets/poolscape/poolscape1.jpg';
import NightscapeImg from '../../assets/nightscape/nightscape1.jpg';
import WaterscapeImg from '../../assets/waterscape/waterscape1.jpg';
import FirescapeImg from '../../assets/firescape/firescape1.jpg';
import CourtscapeImg from '../../assets/courtscape/courtscape2.jpg';

// Service color map
const SERVICE_COLORS = {
    landscape: '#8B5B29',
    hardscape: '#97999B',
    softscape: '#6CC24A',
    poolscape: '#0072CE',
    nightscape: '#F7EA48',
    waterscape: '#8BB8E8',
    firescape: '#FE5000',
    courtscape: '#FF3131',
};

// Featured projects data (now with explicit image per service)
const featuredProjectsWithImages = [
    {
        key: 'landscape',
        title: 'Landscape',
        image: LandscapeImg,
        description:
            "We design harmonious outdoor spaces that reflect your vision and lifestyle. Our team plans and integrates hardscape and softscape elements to enhance beauty, function, and sustainability, creating a custom retreat for relaxation and recreation."
    },
    {
        key: 'hardscape',
        title: 'Hardscape',
        image: HardscapeImg,
        description:
            "Our hardscape features—patios, walkways, walls, and outdoor kitchens—add structure, style, and function to your yard. Using quality materials, we build durable spaces that improve usability and blend naturally with your landscape."
    },
    {
        key: 'softscape',
        title: 'Softscape',
        image: SoftscapeImg,
        description:
            "We bring your yard to life with plants, trees, and flowers, enhancing beauty and biodiversity. Our softscape designs add color, texture, and shade, creating a vibrant, healthy environment tailored to your preferences and climate."
    },
    {
        key: 'poolscape',
        title: 'Poolscape',
        image: PoolscapeImg,
        description:
            "We create custom pools and surrounding features to transform your backyard into an oasis. From design to installation, we handle everything—including patios, landscaping, and lighting—for a seamless, stunning outdoor retreat."
    },
    {
        key: 'nightscape',
        title: 'Nightscape',
        image: NightscapeImg,
        description:
            "We enhance your evenings with custom outdoor lighting and integrated A/V systems. Enjoy a safe, inviting atmosphere for gatherings or relaxation, with smart controls and weatherproof technology that complement your landscape."
    },
    {
        key: 'waterscape',
        title: 'Waterscape',
        image: WaterscapeImg,
        description:
            "We add elegance and tranquility with water features like fountains, waterfalls, ponds, and streams. Each is designed to fit your space and lifestyle, creating a peaceful, low-maintenance focal point for your yard."
    },
    {
        key: 'firescape',
        title: 'Firescape',
        image: FirescapeImg,
        description:
            "Our custom fire pits, fireplaces, and fire tables provide warmth and charm. Perfect for gathering on cool evenings, these features enhance your outdoor ambiance and invite cozy moments with family and friends."
    },
    {
        key: 'courtscape',
        title: 'Courtscape',
        image: CourtscapeImg,
        description:
            "We build custom sport courts for basketball, tennis, pickleball, and more—complete with pro lighting and durable surfaces. Enjoy a versatile, long-lasting recreation area designed to blend with your outdoor space."
    }
];

// Helper to color first part of service name
function getColoredTitle(title, key) {
    const t = title.toLowerCase();
    const idx = t.indexOf('scape');
    if (idx === -1) return title;
    const first = title.slice(0, idx);
    const second = title.slice(idx);
    const color = SERVICE_COLORS[key] || '#fff';
    return (
        <span style={{ textTransform: 'lowercase', fontWeight: 400 }}>
            <span style={{ color }}>{first}</span>
            <span style={{ color: '#fff' }}>{second}</span>
        </span>
    );
}

const ContainerFirst = () => {
    const [hoveredIndex, setHoveredIndex] = useState(null);

    return (
        <div className={styles.container}>
            {/* Top Section - Featured Projects Carousel */}
            <div className={styles.topSection}>
                <Swiper
                    modules={[Navigation, Autoplay]}
                    navigation={{
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                    }}
                    spaceBetween={0}
                    slidesPerView={1}
                    breakpoints={{
                        768: {
                            slidesPerView: 3
                        }
                    }}
                    loop={true}
                    autoplay={{
                        delay: 3500,
                        disableOnInteraction: false,
                    }}
                    className={styles.swiperContainer}
                >
                    {featuredProjectsWithImages.map((project, i) => (
                        <SwiperSlide key={project.key}>
                            <div
                                className={styles.imageWrapper}
                                onMouseEnter={() => setHoveredIndex(i)}
                                onMouseLeave={() => setHoveredIndex(null)}
                            >
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className={`${styles.carouselImage} ${hoveredIndex === i ? styles.imageHover : ''}`}
                                />
                                {hoveredIndex === i && (
                                    <div className={styles.imageOverlay}>
                                        <h3>{getColoredTitle(project.title, project.key)}</h3>
                                        <p>{project.description}</p>
                                        <Link to={`/services/${project.key}`} className={styles.viewButton}>
                                            View Project
                                        </Link>
                                    </div>
                                )}
                            </div>
                        </SwiperSlide>
                    ))}
                    <div className={`swiper-button-prev ${styles.navButton}`}>
                        <FiChevronLeft />
                    </div>
                    <div className={`swiper-button-next ${styles.navButton}`}>
                        <FiChevronRight />
                    </div>
                </Swiper>
            </div>

            {/* Bottom Section */}
            <div className={styles.bottomSection}>
                <div className={styles.bottomContent}>
                    <div className={styles.leftGroup}>
                        <Link to="/team" className={styles.bottomButton} style={{ marginRight: '10px' }}>
                            About us <FiChevronDown className={styles.buttonIcon} />
                        </Link>
                    </div>
                    <div className={styles.rightGroup}>
                        <Link to="/faq" className={`${styles.bottomButton} ${styles.primaryButton}`}>F A Q</Link>
                        <Link to="/portfolio" className={`${styles.bottomButton} ${styles.primaryButton}`}>View our Projects</Link>
                        <span className={styles.orText}>or</span>
                        <Link to="/contact" className={`${styles.bottomButton} ${styles.primaryButton}`}>Start the Process</Link>
                    </div>
                    <div className={styles.centerText}>
                        <span className={styles.luxuryText}>Experience Luxury, starting in the low mid 100's</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContainerFirst;