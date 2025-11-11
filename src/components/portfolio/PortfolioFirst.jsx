import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './PortfolioFirst.module.css';
import { buildOptimizedUrl, IMAGE_ASSETS } from '../../utils/cloudinary';

const projects = [
  {
    title: 'BN Project',
    imageUrl: buildOptimizedUrl(IMAGE_ASSETS.bnProject1, {
      quality: '85',
      format: 'auto'
    }),
    link: '/portfolios/bnproject',
  },
  {
    title: 'KC Project',
    imageUrl: buildOptimizedUrl(IMAGE_ASSETS.kcProject1, {
      quality: '85',
      format: 'auto'
    }),
    link: '/portfolios/kcproject',
  },
  {
    title: 'GN Project',
    imageUrl: buildOptimizedUrl(IMAGE_ASSETS.gnProject1, {
      quality: '85',
      format: 'auto'
    }),
    link: '/portfolios/gnproject',
  },
  {
    title: 'HA Project',
    imageUrl: buildOptimizedUrl(IMAGE_ASSETS.haProject1, {
      quality: '85',
      format: 'auto'
    }),
    link: '/portfolios/haproject',
  },
  {
    title: 'AR Project',
    imageUrl: buildOptimizedUrl(IMAGE_ASSETS.arProject1, {
      quality: '85',
      format: 'auto'
    }),
    link: '/portfolios/arproject',
  },
  {
    title: 'GA Project',
    imageUrl: buildOptimizedUrl(IMAGE_ASSETS.gaProject1, {
      quality: '85',
      format: 'auto'
    }),
    link: '/portfolios/gaproject',
  },
  {
    title: 'TC Project',
    imageUrl: buildOptimizedUrl(IMAGE_ASSETS.tcProject1, {
      quality: '85',
      format: 'auto'
    }),
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
            style={{ backgroundImage: `url(${project.imageUrl})` }}
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