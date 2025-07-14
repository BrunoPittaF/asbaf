import React, { useEffect, useState } from 'react';
import Gallery from '../../components/Gallery/Gallery';
import styles from './styles.module.scss';

interface IPath {
  folder: string;
  images: string[]
}

const BigGallery: React.FC = () => {
  const [images, setImages] = useState<IPath[]>([]);
  const [galleryImages, setGalleryImages] = useState<string[]>([])

  function changeImagePathGallery(folderImage: string): void {
    const groupedImages = images.find((item) => item.folder === folderImage)?.images;  

    if(groupedImages && groupedImages.length > 0) {
      const imagesChangePath = groupedImages.map((element) => element = `http://localhost:8080/uploads/${folderImage}/${element}`)
      setGalleryImages(imagesChangePath)
    }

  }

  useEffect(() => {
    async function getImagesGallery() {
      const response = await fetch('http://localhost:8080/images/gallery');
      const responseData = await response.json();
      setImages(responseData);
    }
    getImagesGallery()
  }, [])

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <h2>Galeria</h2>

        <div className={styles.galleryOptions}>
          {images.map((element, index) => (
            <button key={element.folder + index} onClick={() => changeImagePathGallery(element.folder)}>
              {element.folder}
            </button>
          ))}
        </div>
        <Gallery images={galleryImages} />
      </div>
    </main>
  );
};

export default BigGallery;
