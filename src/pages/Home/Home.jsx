import React, { useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/Header/Header';
import ContainerFirst from '../../components/Container/ContainerFirst';
import Footer from '../../components/Footer/Footer';
import styles from './Home.module.css';
import backgroundVideo from '../../assets/videos/Background2.mp4';
import { FiChevronDown } from 'react-icons/fi';
import ContainerSecond from '../../components/Container/ContainerSecond';
import ContainerThird from '../../components/Container/ContainerThird';
import ContainerFourth from '../../components/Container/ContainerFourth';
import ContainerFifth from '../../components/Container/ContainerFifth';
// import ContainerSixth from '../../components/Container/ContainerSixth';

const Home = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.6; // Adjust this value to change playback speed (0.6 = 60% speed)
    }
  }, []);

  return (
    <div className={styles.homeContainer}>
      <Helmet>
        <title>SCAPE | Design Build Maintain</title>
        <meta property="og:title" content="SCAPE | Design Build Maintain" />
        <meta name="description" content="Our award-winning team is dedicated to bringing your dream outdoor space to life, offering both beauty and functionality with a warranty that guarantees satisfaction." />
        <meta property="og:description" content="Our award-winning team is dedicated to bringing your dream outdoor space to life, offering both beauty and functionality with a warranty that guarantees satisfaction." />
        <meta property="og:url" content={window.location.href} />
      </Helmet>
      {/* Fullscreen video background */}
      <div className={styles.videoBackground}>
        <video
          ref={videoRef}
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
      {/* <ContainerSixth /> */}
      <ContainerFifth />
      <Footer />
    </div>
  );
};

export default Home;