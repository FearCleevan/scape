import React, { useState, useRef } from 'react';
import styles from './DroneShotFirst.module.css';

// Dynamic image imports with Vite
const imageImports = import.meta.glob('../../assets/gallery/Asset*.jpg', { eager: true });
const images = Object.keys(imageImports).map((key, i) => ({
  id: i + 1,
  src: imageImports[key].default,
}));

// Constants
const IMAGES_PER_ROW = 4;
const INITIAL_ROWS = 20;
const LOAD_MORE_ROWS = 5;

const LazyImage = ({ src, alt, onClick }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const imgRef = useRef();

  return (
    <div ref={imgRef} className={styles.galleryItem} onClick={onClick}>
      <img 
        src={src} 
        alt={alt} 
        className={styles.galleryImage}
        loading="lazy"
        decoding="async"
        onLoad={() => setIsLoaded(true)}
        style={{ opacity: isLoaded ? 1 : 0 }}
      />
      {!isLoaded && <div className={styles.imagePlaceholder} />}
      <div className={styles.imageOverlay}></div>
    </div>
  );
};

const DGalleryFirst = () => {
  const [visibleRows, setVisibleRows] = useState(INITIAL_ROWS);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [lightboxLoaded, setLightboxLoaded] = useState(false);
  const loadingRef = useRef(false);

  const visibleImagesCount = visibleRows * IMAGES_PER_ROW;
  const visibleItems = images.slice(0, visibleImagesCount);
  const canLoadMore = visibleImagesCount < images.length;

  const openLightbox = (index) => {
    setCurrentImageIndex(index);
    setLightboxLoaded(false);
    setIsLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setIsLightboxOpen(false);
    document.body.style.overflow = 'auto';
  };

  const goToPrevious = () => {
    setCurrentImageIndex(prev => (prev + images.length - 1) % images.length);
    setLightboxLoaded(false);
  };

  const goToNext = () => {
    setCurrentImageIndex(prev => (prev + 1) % images.length);
    setLightboxLoaded(false);
  };

  const loadMore = () => {
    if (loadingRef.current || !canLoadMore) return;
    
    loadingRef.current = true;
    setVisibleRows(prev => {
      const newValue = prev + LOAD_MORE_ROWS;
      loadingRef.current = false;
      return newValue;
    });
  };

  return (
    <div className={styles.galleryContainer}>
      <div className={styles.galleryGrid}>
        {visibleItems.map((image, index) => (
          <LazyImage
            key={image.id}
            src={image.src}
            alt={image.alt}
            onClick={() => openLightbox(index)}
          />
        ))}
      </div>

      {canLoadMore && (
        <div className={styles.loadMoreContainer}>
          <button 
            className={styles.loadMoreButton} 
            onClick={loadMore}
            disabled={loadingRef.current}
          >
            {loadingRef.current ? 'Loading...' : `Load More (${visibleRows} rows shown)`}
          </button>
        </div>
      )}

      {isLightboxOpen && (
        <div className={styles.lightbox}>
          <div className={styles.lightboxContent}>
            <button 
              className={styles.lightboxClose}
              onClick={closeLightbox}
              aria-label="Close lightbox"
            >
              &times;
            </button>
            <button 
              className={styles.lightboxArrowLeft}
              onClick={goToPrevious}
              aria-label="Previous image"
            >
              &#10094;
            </button>
            
            <div className={styles.lightboxImageWrapper}>
              <img 
                src={images[currentImageIndex].src}
                alt={images[currentImageIndex].alt}
                className={styles.lightboxImage}
                onLoad={() => setLightboxLoaded(true)}
                style={{ opacity: lightboxLoaded ? 1 : 0 }}
              />
              {!lightboxLoaded && <div className={styles.lightboxLoader}>Loading...</div>}
            </div>
            
            <button 
              className={styles.lightboxArrowRight}
              onClick={goToNext}
              aria-label="Next image"
            >
              &#10095;
            </button>
            <div className={styles.lightboxCaption}>
              {images[currentImageIndex].alt}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DGalleryFirst;