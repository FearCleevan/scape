import React, { useEffect, useRef } from 'react';
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