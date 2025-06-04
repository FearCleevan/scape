import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './PortfolioFirst.module.css';

// Import project images
import BennettImg from '../../assets/BennettProject/Project1.jpg';
import KentImg from '../../assets/KentChristensenProject/Project1.jpg';
import GardnerImg from '../../assets/GardnerProject/Project1.jpg';
import HaProjectImg from '../../assets/HaProject/Project1.jpg';
import ArProjectImg from '../../assets/ArProject/Project1.jpg';
import GaProjectImg from '../../assets/GaProject/Project1.jpg';
import TcProjectImg from '../../assets/TcProject/Project1.jpg';

const projects = [
  {
    title: 'BN Project',
    image: BennettImg,
    link: '/portfolios/bnproject',
  },
  {
    title: 'KC Project',
    image: KentImg,
    link: '/portfolios/kcproject',
  },
  {
    title: 'GN Project',
    image: GardnerImg,
    link: '/portfolios/gnproject',
  },
  {
    title: 'HA Project',
    image: HaProjectImg,
    link: '/portfolios/haproject',
  },
  {
    title: 'AR Project',
    image: ArProjectImg,
    link: '/portfolios/arproject',
  },
  {
    title: 'GA Project',
    image: GaProjectImg,
    link: '/portfolios/gaproject',
  },
  {
    title: 'TC Project',
    image: TcProjectImg,
    link: '/portfolios/tcproject',
  },

];

const PortfolioFirst = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className={styles.portfolioContainer}>
      <div className={styles.grid}>
        {projects.map((project, idx) => (
          <div
            className={styles.card}
            key={project.title}
            style={{ backgroundImage: `url(${project.image})` }}
            onMouseEnter={() => setHoveredIndex(idx)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            {project.link && project.link !== '#' ? (
              <Link
                to={project.link}
                className={`${styles.cardTitle} ${hoveredIndex === idx ? styles.hovered : ''}`}
                tabIndex={0}
              >
                {project.title}
              </Link>
            ) : (
              <span
                className={`${styles.cardTitle} ${hoveredIndex === idx ? styles.hovered : ''}`}
                tabIndex={0}
                style={{ cursor: "not-allowed", opacity: 0.6 }}
                aria-disabled="true"
              >
                {project.title}
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PortfolioFirst;