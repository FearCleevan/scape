import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import { FiChevronLeft, FiChevronRight, FiChevronDown } from 'react-icons/fi';
import styles from './ContainerFirst.module.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';

// Import gallery images (Asset1.jpg to Asset40.jpg)
import Asset1 from '../../assets/gallery/Asset1.jpg';
import Asset2 from '../../assets/gallery/Asset2.jpg';
import Asset3 from '../../assets/gallery/Asset3.jpg';
import Asset4 from '../../assets/gallery/Asset4.jpg';
import Asset5 from '../../assets/gallery/Asset5.jpg';
import Asset6 from '../../assets/gallery/Asset6.jpg';
import Asset7 from '../../assets/gallery/Asset7.jpg';
import Asset8 from '../../assets/gallery/Asset8.jpg';
import Asset9 from '../../assets/gallery/Asset9.jpg';
import Asset10 from '../../assets/gallery/Asset10.jpg';
import Asset11 from '../../assets/gallery/Asset11.jpg';
import Asset12 from '../../assets/gallery/Asset12.jpg';
import Asset13 from '../../assets/gallery/Asset13.jpg';
import Asset14 from '../../assets/gallery/Asset14.jpg';
import Asset15 from '../../assets/gallery/Asset15.jpg';
import Asset16 from '../../assets/gallery/Asset16.jpg';
import Asset17 from '../../assets/gallery/Asset17.jpg';
import Asset18 from '../../assets/gallery/Asset18.jpg';
import Asset20 from '../../assets/gallery/Asset20.jpg';
import Asset21 from '../../assets/gallery/Asset21.jpg';
import Asset22 from '../../assets/gallery/Asset22.jpg';
import Asset23 from '../../assets/gallery/Asset23.jpg';
import Asset24 from '../../assets/gallery/Asset24.jpg';
import Asset25 from '../../assets/gallery/Asset25.jpg';
import Asset26 from '../../assets/gallery/Asset26.jpg';
import Asset27 from '../../assets/gallery/Asset27.jpg';
import Asset28 from '../../assets/gallery/Asset28.jpg';
import Asset29 from '../../assets/gallery/Asset29.jpg';
import Asset30 from '../../assets/gallery/Asset30.jpg';
import Asset31 from '../../assets/gallery/Asset31.jpg';
import Asset32 from '../../assets/gallery/Asset32.jpg';
import Asset33 from '../../assets/gallery/Asset33.jpg';
import Asset34 from '../../assets/gallery/Asset34.jpg';
import Asset35 from '../../assets/gallery/Asset35.jpg';
import Asset36 from '../../assets/gallery/Asset36.jpg';
import Asset37 from '../../assets/gallery/Asset37.jpg';
import Asset38 from '../../assets/gallery/Asset38.jpg';
import Asset39 from '../../assets/gallery/Asset39.jpg';
import Asset40 from '../../assets/gallery/Asset40.jpg';

const allAssets = [
    Asset1, Asset2, Asset3, Asset4, Asset5, Asset6, Asset7, Asset8, Asset9, Asset10,
    Asset11, Asset12, Asset13, Asset14, Asset15, Asset16, Asset17, Asset18, Asset20,
    Asset21, Asset22, Asset23, Asset24, Asset25, Asset26, Asset27, Asset28, Asset29, Asset30,
    Asset31, Asset32, Asset33, Asset34, Asset35, Asset36, Asset37, Asset38, Asset39, Asset40
];

// Featured projects data
const featuredProjects = [
    {
        key: 'landscape',
        title: 'Landscape',
        description:
            "We design harmonious outdoor spaces that reflect your vision and lifestyle. Our team plans and integrates hardscape and softscape elements to enhance beauty, function, and sustainability, creating a custom retreat for relaxation and recreation."
    },
    {
        key: 'hardscape',
        title: 'Hardscape',
        description:
            "Our hardscape features—patios, walkways, walls, and outdoor kitchens—add structure, style, and function to your yard. Using quality materials, we build durable spaces that improve usability and blend naturally with your landscape."
    },
    {
        key: 'softscape',
        title: 'Softscape',
        description:
            "We bring your yard to life with plants, trees, and flowers, enhancing beauty and biodiversity. Our softscape designs add color, texture, and shade, creating a vibrant, healthy environment tailored to your preferences and climate."
    },
    {
        key: 'poolscape',
        title: 'Poolscape',
        description:
            "We create custom pools and surrounding features to transform your backyard into an oasis. From design to installation, we handle everything—including patios, landscaping, and lighting—for a seamless, stunning outdoor retreat."
    },
    {
        key: 'nightscape',
        title: 'Nightscape',
        description:
            "We enhance your evenings with custom outdoor lighting and integrated A/V systems. Enjoy a safe, inviting atmosphere for gatherings or relaxation, with smart controls and weatherproof technology that complement your landscape."
    },
    {
        key: 'waterscape',
        title: 'Waterscape',
        description:
            "We add elegance and tranquility with water features like fountains, waterfalls, ponds, and streams. Each is designed to fit your space and lifestyle, creating a peaceful, low-maintenance focal point for your yard."
    },
    {
        key: 'firescape',
        title: 'Firescape',
        description:
            "Our custom fire pits, fireplaces, and fire tables provide warmth and charm. Perfect for gathering on cool evenings, these features enhance your outdoor ambiance and invite cozy moments with family and friends."
    },
    {
        key: 'courtscape',
        title: 'Courtscape',
        description:
            "We build custom sport courts for basketball, tennis, pickleball, and more—complete with pro lighting and durable surfaces. Enjoy a versatile, long-lasting recreation area designed to blend with your outdoor space."
    }
];

// Assign a random image from allAssets for each featured project (order is stable per build)
const featuredProjectsWithImages = featuredProjects.map((project, idx) => ({
    ...project,
    image: allAssets[Math.floor((idx * 7 + 3) % allAssets.length)]
}));

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
                                        <h3>{project.title}</h3>
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
                        <Link to="/portfolio/social-videos" className={`${styles.bottomButton} ${styles.primaryButton}`}>Video Clips</Link>
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