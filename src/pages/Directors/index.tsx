import React from 'react';
import Gallery from '../../components/Gallery/Gallery';
import styles from './styles.module.scss';

const Directors: React.FC = () => {
  const images = ['/images/diretorias/01.png', '/images/diretorias/03.png'];
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
