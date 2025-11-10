import React, { useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/Header/Header';
import ContainerFirst from '../../components/Container/ContainerFirst';
import Footer from '../../components/Footer/Footer';
import styles from './Home.module.css';
import { FiChevronDown } from 'react-icons/fi';
import ContainerSecond from '../../components/Container/ContainerSecond';
import ContainerThird from '../../components/Container/ContainerThird';
import ContainerFourth from '../../components/Container/ContainerFourth';
import ContainerFifth from '../../components/Container/ContainerFifth';

const Home = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.6;
    }
  }, []);

  // Use the correct public ID with the double folder structure
  const optimizedVideoUrl = `https://res.cloudinary.com/dtebf3uea/video/upload/q_70/f_auto/vc_auto/scape/videos/scape/videos/Background2`;

  return (
    <div className={styles.homeContainer}>
      <Helmet>
        <title>SCAPE | Design Build Maintain</title>
        <meta property="og:title" content="SCAPE | Design Build Maintain" />
        <meta name="description" content="Our award-winning team is dedicated to bringing your dream outdoor space to life, offering both beauty and functionality with a warranty that guarantees satisfaction." />
        <meta property="og:description" content="Our award-winning team is dedicated to bringing your dream outdoor space to life, offering both beauty and functionality with a warranty that guarantees satisfaction." />
        <meta property="og:url" content={window.location.href} />
      </Helmet>
      
      {/* Optimized Cloudinary Video Background - using CORRECT public ID */}
      <div className={styles.videoBackground}>
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className={styles.backgroundVideo}
        >
          <source src={optimizedVideoUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Content container */}
      <Header />
      <div className={styles.mainContent}>
        <div className={styles.content}>
          <h1>
            <span className={styles.underlinedS}>s</span>cape
          </h1>
          <div className={styles.projectsCta}>
            <span>Featured Projects</span>
            <FiChevronDown className={styles.arrowIcon} />
          </div>
        </div>
      </div>

      <ContainerFirst />
      <ContainerSecond />
      <ContainerThird />
      <ContainerFourth />
      <ContainerFifth />
      <Footer />
    </div>
  );
};

export default Home;