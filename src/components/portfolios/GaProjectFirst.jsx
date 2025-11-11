import React, { useState } from 'react';
import styles from './GaProjectFirst.module.css';
import { FiX, FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { buildOptimizedUrl, IMAGE_ASSETS } from '../../utils/cloudinary';

// Image public IDs for GaProject with correct duplicate folder structure
const gaProjectImages = [
  'scape/projects/ga/scape/projects/ga/Project1',
  'scape/projects/ga/scape/projects/ga/Project2',
  'scape/projects/ga/scape/projects/ga/Project3',
  'scape/projects/ga/scape/projects/ga/Project4',
  'scape/projects/ga/scape/projects/ga/Project5',
  'scape/projects/ga/scape/projects/ga/Project6',
  'scape/projects/ga/scape/projects/ga/Project7',
  'scape/projects/ga/scape/projects/ga/Project8',
  'scape/projects/ga/scape/projects/ga/Project9',
  'scape/projects/ga/scape/projects/ga/Project10',
  'scape/projects/ga/scape/projects/ga/Project11',
  'scape/projects/ga/scape/projects/ga/Project12'
];

const GaProjectFirst = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const [activeIdx, setActiveIdx] = useState(0);

    const openModal = (idx) => {
        setActiveIdx(idx);
        setModalOpen(true);
        document.body.style.overflow = 'hidden';
    };

    const closeModal = () => {
        setModalOpen(false);
        document.body.style.overflow = '';
    };

    const showPrev = (e) => {
        e.stopPropagation();
        setActiveIdx((prev) => (prev === 0 ? gaProjectImages.length - 1 : prev - 1));
    };

    const showNext = (e) => {
        e.stopPropagation();
        setActiveIdx((prev) => (prev === gaProjectImages.length - 1 ? 0 : prev + 1));
    };

    // Build optimized image URLs
    const getOptimizedImageUrl = (publicId) => {
        return buildOptimizedUrl(publicId, {
            quality: '85',
            format: 'auto'
        });
    };

    return (
        <div className={styles.container}>
            <div className={styles.bnProjectContainer}>
                <div className={styles.grid}>
                    {gaProjectImages.map((publicId, i) => (
                        <div
                            key={i}
                            className={styles.card}
                            onClick={() => openModal(i)}
                            tabIndex={0}
                            role="button"
                            aria-label={`View Project Image ${i + 1}`}
                        >
                            <img
                                src={getOptimizedImageUrl(publicId)}
                                alt={`Project ${i + 1}`}
                                className={styles.cardImage}
                                loading="lazy"
                            />
                            <div className={styles.cardOverlay}>
                                <span>View</span>
                            </div>
                        </div>
                    ))}
                </div>

                {modalOpen && (
                    <div className={styles.modalOverlay} onClick={closeModal}>
                        <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
                            <button
                                className={styles.closeBtn}
                                onClick={closeModal}
                                aria-label="Close"
                            >
                                <FiX />
                            </button>
                            <button
                                className={`${styles.arrowBtn} ${styles.leftBtn}`}
                                onClick={showPrev}
                                aria-label="Previous"
                            >
                                <FiChevronLeft />
                            </button>
                            <div className={styles.modalImageContainer}>
                                <img
                                    src={getOptimizedImageUrl(gaProjectImages[activeIdx])}
                                    alt={`Project ${activeIdx + 1}`}
                                    className={styles.modalImage}
                                />
                            </div>
                            <button
                                className={`${styles.arrowBtn} ${styles.rightBtn}`}
                                onClick={showNext}
                                aria-label="Next"
                            >
                                <FiChevronRight />
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default GaProjectFirst;