import React from 'react';
import { Link } from 'react-router-dom';
import styles from './About.module.css';
import Asset1 from '../../assets/images/Asset1.jpg';
import Asset2 from '../../assets/images/Asset2.jpg';
import Asset3 from '../../assets/images/Asset3.jpg';

const About = () => {
    return (
        <div className={styles.aboutContainer}>
            <div className={styles.aboutContent}>
                <div className={styles.aboutIntro}>
                    <h2 className={styles.aboutTitle}>About Scape</h2>
                    <p className={styles.aboutText}>
                        At scape we believe that exceptional landscapes do more than beautify—they connect people,
                        foster memories, and strengthen communities. Guided by our Mission Statement,
                        <em> Designing Landscapes that Build Relationships</em>, we craft outdoor spaces that blend
                        sustainable innovation with timeless artistry.
                    </p>
                </div>

                <div className={styles.aboutGrid}>
                    <div className={styles.aboutCard}>
                        <img src={Asset1} alt="Landscape design" className={styles.aboutImage} />
                        <div className={styles.aboutCardContent}>
                            <h3>Best Landscaping Services in Utah</h3>
                            <p>
                                Professional services from a full-service contractor. At Scape, your vision is our starting point.
                                We pride ourselves on delivering the best landscaping services by collaborating closely with you
                                to understand your needs, preferences, and lifestyle.
                            </p>
                        </div>
                    </div>

                    <div className={styles.aboutCard}>
                        <div className={styles.aboutCardContent}>
                            <h3>Our Heritage</h3>
                            <p>
                                Scape was born from the strategic partnership of Peak Property Services and KC Property Services,
                                uniting two trusted names in the landscape industry. Co-founders Steve Mortensen and Kent Christensen
                                bring over 50 years of combined experience to every project.
                            </p>
                        </div>
                        <img src={Asset2} alt="Team working" className={styles.aboutImage} />
                    </div>

                    <div className={styles.aboutCardFull}>
                        <img src={Asset3} alt="Sustainable landscaping" className={styles.aboutImageFull} />
                        <div className={styles.aboutCardContentFull}>
                            <h3>Sustainable Innovation</h3>
                            <p>
                                We specialize in sustainable landscaping, creating eco-friendly designs that elevate your outdoor
                                space while prioritizing environmental responsibility. Our commitment to sustainability includes
                                native plants, water-saving designs, and recycling materials whenever possible.
                            </p>
                            <Link to="/contact" className={styles.ctaButton}>
                                Book a Free Consultation
                            </Link>
                        </div>
                    </div>
                </div>

                <div className={styles.missionStatement}>
                    <h3>Our Mission</h3>
                    <p>
                        Scape's mission is to design transformative landscape projects that go beyond beauty, fostering
                        meaningful connections for our clients. Whether it's a serene garden, a vibrant sports court,
                        or a welcoming community space, we craft environments that encourage relationship-building—spaces
                        where families, friends, and neighbors can gather, connect, and create lasting memories.
                    </p>
                </div>

                {/* Added Our Vision Section */}
                <div className={styles.visionStatement}>
                    <h3>Our Vision</h3>
                    <p>
                        To become the most trusted name in landscape design across the Intermountain West by consistently
                        delivering innovative, sustainable outdoor spaces that exceed expectations. We envision communities
                        transformed through thoughtfully designed environments that bring people together while respecting
                        and enhancing the natural beauty of our region. Through cutting-edge design, exceptional craftsmanship,
                        and unwavering commitment to client satisfaction, we aim to set new standards for excellence in the
                        landscape industry.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;