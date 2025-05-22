import React from 'react';
import Header from '../Header/Header';
import ContactFirst from './ContactFirst';
import Footer from '../Footer/Footer';
import styles from './Contact.module.css';
import backgroundVideo from '../../assets/videos/Background1.mp4';
import { Link } from 'react-router-dom';
import ContactSecond from './ContactSecond';


const Contact = () => {
    return (
        <div className={styles.homeContainer}>
            {/* Fullscreen video background */}
            <div className={styles.videoBackground}>
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className={styles.backgroundVideo}
                >
                    <source src={backgroundVideo} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>

            {/* Content container */}
            <Header />
            <div className={styles.mainContent}>
                <div className={styles.content}>
                    <div className={styles.breadcrumb}>
                        <Link to="/" className={styles.breadcrumbLink}>Home</Link>
                        <span className={styles.breadcrumbSeparator}></span>
                        <span className={styles.activeBreadcrumb}>Contact Us</span>
                    </div>
                    <p className={styles.tagline}>Contact Us</p>
                </div>
            </div>
            <ContactFirst />
            <ContactSecond />
            <Footer />
        </div>
    );
};

export default Contact;