import React, { useState } from 'react';
import styles from './Gallery.module.scss';

interface GalleryProps {
  images: string[];
}

const Gallery: React.FC<GalleryProps> = ({ images }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [activeImageIndex, setActiveImageIndex] = useState<string>('');

  function openModal(indexImage: number) {
    setIsOpen(true);
    setActiveImageIndex(images[indexImage]);
  }

  function nextImage() {
    const currentIndex = images.indexOf(activeImageIndex);
    const nextIndex = currentIndex + 1;
    if (nextIndex < images.length) {
      setActiveImageIndex(images[nextIndex]);
    }
  }

  function prevImage() {
    const currentIndex = images.indexOf(activeImageIndex);
    const prevIndex = currentIndex - 1;
    if (prevIndex >= 0) {
      setActiveImageIndex(images[prevIndex]);
    }
  }

  return (
    <div className={styles.gallery}>
      {images.map((image, index) => (
        <div onClick={() => openModal(index)} key={index} className={styles.imageContainer}>
          <img src={image} alt={`Gallery image ${index + 1}`} className={styles.image} />
        </div>
      ))}

      {isOpen && (
        <div className={styles.modal}>
          <div onClick={() => setIsOpen(false)} className={styles.overlay}></div>

          <div className={styles.content}>
            <img
              onClick={prevImage}
              className={styles.arrow}
              style={{ cursor: activeImageIndex !== images[0] ? 'pointer' : 'not-allowed' }}
              src="/images/backArrow.png"
              alt="seta para voltar"
            />

            <img src={activeImageIndex} alt="" />
            <img
              onClick={nextImage}
              className={styles.arrow}
              src="/images/nextArrow.png"
              alt="seta para avançar"
              style={{ cursor: activeImageIndex !== images[images.length - 1] ? 'pointer' : 'not-allowed' }}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
