import React, { useEffect, useState } from 'react';
import Gallery from '../../components/Gallery/Gallery';
import styles from './styles.module.scss';

const Directors: React.FC = () => {
  const [images, setImages] = useState<string[]>([])

  useEffect(() => {
    async function getImages() {
      const response = await fetch('http://localhost:8080/images/directors');
      const responseData = await response.json();
      const remapImages = responseData[0].map((element: string) => element = 'http://localhost:8080/uploads/directors/' + element);
      setImages(remapImages);      
      
    }

    getImages()
  }, [])
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <div className={styles.header_content}>
          <h2>Diretorias</h2>
          <img src="/images/diretorias.jpg" alt="organograma" />
        </div>

        <Gallery images={images} />
      </div>
    </main>
  );
};

export default Directors;
