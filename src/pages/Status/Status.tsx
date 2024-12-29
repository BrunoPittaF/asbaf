import React from 'react';
import styles from './styles.module.scss';

const Status: React.FC = () => {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <h2>Estatuto</h2>

        <p>
          <a href="/files/Estatuto-asbaf.pdf" download="Estatuto_pós mudança nomeclatura.pdf">
            Clique aqui
          </a>
          para baixar o Estatuto
        </p>
      </div>
    </main>
  );
};

export default Status;
