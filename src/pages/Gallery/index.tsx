import React, { useState } from 'react';
import Gallery from '../../components/Gallery/Gallery';
import styles from './styles.module.scss';

type GlobImport = Record<string, () => Promise<unknown>>;

interface IPath {
  name: string;
  pathImage: string;
}

const paths: IPath[] = [
  {
    name: 'Confraternização de fim de ano (2021)',
    pathImage: 'fim-de-ano-2021',
  },
  {
    name: 'Homenagem à Secretária da Fazenda: Giovanna Victer (2023)',
    pathImage: 'homenagem-giovanna-2023',
  },
  {
    name: 'Assembleia Geral 15/10',
    pathImage: 'assembleia-geral-15-10',
  },
  {
    name: 'Confraternização 2024',
    pathImage: 'confraternizacao-2024',
  },
  {
    name: 'Comemoração Dia do Fisco 2024',
    pathImage: 'confraternizacao-dia-do-fisco-2024',
  },
];

const listPaths: Record<string, GlobImport> = {
  'fim-de-ano-2021': import.meta.glob('/public/images/fim-de-ano-2021/*.{png,jpg,jpeg,svg}'),
  'homenagem-giovanna-2023': import.meta.glob('/public/images/homenagem-giovanna-2023/*.{png,jpg,jpeg,svg}'),
  'assembleia-geral-15-10': import.meta.glob('/public/images/assembleia-geral-15-10/*.{png,jpg,jpeg,svg}'),
  'confraternizacao-2024': import.meta.glob('/public/images/confraternizacao-2024/*.{png,jpg,jpeg,svg}'),
  'confraternizacao-dia-do-fisco-2024': import.meta.glob(
    '/public/images/confraternizacao-dia-do-fisco-2024/*.{png,jpg,jpeg,svg}'
  ),
};

const Directors: React.FC = () => {
  const [images, setImage] = useState<any[]>([]);

  function changeImagePathGallery(pathImage: keyof typeof listPaths) {
    const imagesGlob = listPaths[pathImage];
    if (!imagesGlob) return;

    const imagesArray: string[] = [];
    for (const path in imagesGlob) {
      const pathReplaced = path.replace('/public', '');
      imagesArray.push(pathReplaced);
    }

    setImage(imagesArray);
  }

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <h2>Galeria</h2>

        <div className={styles.galleryOptions}>
          {paths.map((path, index) => (
            <button key={path.name + index} onClick={() => changeImagePathGallery(path.pathImage)}>
              {path.name}
            </button>
          ))}
        </div>
        <Gallery images={images} />
      </div>
    </main>
  );
};

export default Directors;
