import React, { useState } from 'react';
import styles from './HaProjectFirst.module.css';
import { FiX, FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { buildOptimizedUrl, IMAGE_ASSETS } from '../../utils/cloudinary';

// Image public IDs for HaProject with correct duplicate folder structure
const haProjectImages = [
  'scape/projects/ha/scape/projects/ha/Project1',
  'scape/projects/ha/scape/projects/ha/Project2',
  'scape/projects/ha/scape/projects/ha/Project3',
  'scape/projects/ha/scape/projects/ha/Project4',
  'scape/projects/ha/scape/projects/ha/Project5',
  'scape/projects/ha/scape/projects/ha/Project6',
  'scape/projects/ha/scape/projects/ha/Project7',
  'scape/projects/ha/scape/projects/ha/Project8',
  'scape/projects/ha/scape/projects/ha/Project9',
  'scape/projects/ha/scape/projects/ha/Project10',
  'scape/projects/ha/scape/projects/ha/Project11',
  'scape/projects/ha/scape/projects/ha/Project12'
];

const HaProjectFirst = () => {
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
        setActiveIdx((prev) => (prev === 0 ? haProjectImages.length - 1 : prev - 1));
    };

    const showNext = (e) => {
        e.stopPropagation();
        setActiveIdx((prev) => (prev === haProjectImages.length - 1 ? 0 : prev + 1));
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
                    {haProjectImages.map((publicId, i) => (
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
                                    src={getOptimizedImageUrl(haProjectImages[activeIdx])}
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

export default HaProjectFirst;