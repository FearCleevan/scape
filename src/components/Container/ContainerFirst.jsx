import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import { FiChevronLeft, FiChevronRight, FiChevronDown } from 'react-icons/fi';
import { FaPlay } from 'react-icons/fa';
import styles from './ContainerFirst.module.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';

// Import images from assets
import Asset1 from '../../assets/images/Asset1.jpg';
import Asset2 from '../../assets/images/Asset2.jpg';
import Asset3 from '../../assets/images/Asset3.jpg';
import Asset4 from '../../assets/images/Asset1.jpg';
import Asset5 from '../../assets/images/Asset2.jpg';
import Asset6 from '../../assets/images/Asset3.jpg';

const carouselImages = [
    { id: 1, src: Asset1, title: 'Luxury Residence', description: 'Modern architecture meets natural beauty' },
    { id: 2, src: Asset2, title: 'Urban Oasis', description: 'City living redefined' },
    { id: 3, src: Asset3, title: 'Coastal Retreat', description: 'Beachfront elegance' },
    { id: 4, src: Asset4, title: 'Luxury Residence', description: 'Modern architecture meets natural beauty' },
    { id: 5, src: Asset5, title: 'Urban Oasis', description: 'City living redefined' },
    { id: 6, src: Asset6, title: 'Coastal Retreat', description: 'Beachfront elegance' },
];

const ContainerFirst = () => {
    const [hoveredImage, setHoveredImage] = useState(null);

    return (
        <div className={styles.container}>
            {/* Top Section - Carousel */}
            <div className={styles.topSection}>
                <Swiper
                    modules={[Navigation, Autoplay]}
                    navigation={{
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                    }}
                    spaceBetween={30}
                    slidesPerView={3}
                    loop={true}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    className={styles.swiperContainer}
                >
                    {carouselImages.map((image) => (
                        <SwiperSlide key={image.id}>
                            <div
                                className={styles.imageWrapper}
                                onMouseEnter={() => setHoveredImage(image.id)}
                                onMouseLeave={() => setHoveredImage(null)}
                            >
                                <img
                                    src={image.src}
                                    alt={image.title}
                                    className={`${styles.carouselImage} ${hoveredImage === image.id ? styles.imageHover : ''}`}
                                />
                                {hoveredImage === image.id && (
                                    <div className={styles.imageOverlay}>
                                        <h3>{image.title}</h3>
                                        <p>{image.description}</p>
                                        <button className={styles.viewButton}>View Project</button>
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
                        <Link to="/faq" className={`${styles.bottomButton} ${styles.primaryButton}`}>
                            F A Q
                        </Link>
                        <Link to="/portfolio/social-videos" className={`${styles.bottomButton} ${styles.primaryButton}`}>
                            Video Clips
                        </Link>
                        <Link to="/portfolio" className={`${styles.bottomButton} ${styles.primaryButton}`}>
                            View our Projects
                        </Link>
                        <span className={styles.orText}>or</span>
                        <Link to="/contact" className={`${styles.bottomButton} ${styles.primaryButton}`}>
                            Start the Process
                        </Link>
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