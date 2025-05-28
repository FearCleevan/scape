import React, { useState } from 'react';
import styles from './GnProjectFirst.module.css';
import { FiX, FiChevronLeft, FiChevronRight } from 'react-icons/fi';

// Import images
import Img1 from '../../assets/GardnerProject/Project1.jpg';
import Img2 from '../../assets/GardnerProject/Project2.jpg';
import Img3 from '../../assets/GardnerProject/Project3.jpg';
import Img4 from '../../assets/GardnerProject/Project4.jpg';
import Img5 from '../../assets/GardnerProject/Project5.jpg';
import Img6 from '../../assets/GardnerProject/Project6.jpg';
import Img7 from '../../assets/GardnerProject/Project7.jpg';
import Img8 from '../../assets/GardnerProject/Project8.jpg';
import Img9 from '../../assets/GardnerProject/Project9.jpg';
import Img10 from '../../assets/GardnerProject/Project10.jpg';
import Img11 from '../../assets/GardnerProject/Project11.jpg';
import Img12 from '../../assets/GardnerProject/Project12.jpg';

const images = [Img1, Img2, Img3, Img4, Img5, Img6, Img7, Img8, Img9, Img10, Img11, Img12];

const GnProjectFirst = () => {
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
        setActiveIdx((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    };

    const showNext = (e) => {
        e.stopPropagation();
        setActiveIdx((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    };

    return (
        <div className={styles.container}>
            <div className={styles.bnProjectContainer}>
                <div className={styles.grid}>
                    {images.map((img, i) => (
                        <div
                            key={i}
                            className={styles.card}
                            onClick={() => openModal(i)}
                            tabIndex={0}
                            role="button"
                            aria-label={`View Project Image ${i + 1}`}
                        >
                            <img
                                src={img}
                                alt={`Project ${i + 1}`}
                                className={styles.cardImage}
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
                                    src={images[activeIdx]}
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

export default GnProjectFirst;