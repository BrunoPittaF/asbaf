import React from 'react';
import Gallery from '../../components/Gallery/Gallery';
import styles from './styles.module.scss';

const Directors: React.FC = () => {
  const images = [
    '/images/01.png',
    '/images/02.png',
    '/images/03.png',
    '/images/01.png',
    '/images/02.png',
    '/images/03.png',
    '/images/01.png',
    '/images/02.png',
    '/images/03.png',
  ];
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <h2>Diretores</h2>
        <Gallery images={images} />
      </div>
    </main>
  );
};

export default Directors;
