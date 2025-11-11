import React, { useState } from 'react';
import styles from './TcProjectFirst.module.css';
import { FiX, FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { buildOptimizedUrl, IMAGE_ASSETS } from '../../utils/cloudinary';

// Image public IDs for TcProject with correct duplicate folder structure
const tcProjectImages = [
  'scape/projects/tc/scape/projects/tc/Project1',
  'scape/projects/tc/scape/projects/tc/Project2',
  'scape/projects/tc/scape/projects/tc/Project3',
  'scape/projects/tc/scape/projects/tc/Project4',
  'scape/projects/tc/scape/projects/tc/Project5',
  'scape/projects/tc/scape/projects/tc/Project6',
  'scape/projects/tc/scape/projects/tc/Project7',
  'scape/projects/tc/scape/projects/tc/Project8',
  'scape/projects/tc/scape/projects/tc/Project9',
  'scape/projects/tc/scape/projects/tc/Project10',
  'scape/projects/tc/scape/projects/tc/Project11',
  'scape/projects/tc/scape/projects/tc/Project12'
];

const TcProjectFirst = () => {
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
        setActiveIdx((prev) => (prev === 0 ? tcProjectImages.length - 1 : prev - 1));
    };

    const showNext = (e) => {
        e.stopPropagation();
        setActiveIdx((prev) => (prev === tcProjectImages.length - 1 ? 0 : prev + 1));
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
                    {tcProjectImages.map((publicId, i) => (
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
                                    src={getOptimizedImageUrl(tcProjectImages[activeIdx])}
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

export default TcProjectFirst;