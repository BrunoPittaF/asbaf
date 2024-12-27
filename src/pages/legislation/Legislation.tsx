import React from 'react';
import styles from './styles.module.scss';

const Legislation: React.FC = () => {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <h2>Legislação</h2>

        <p>
          <a href="/files/Lei-ordinaria-9808-2024-Salvador-BA.pdf">Clique aqui</a> para baixar a Lei ordinaria
          9808
        </p>
        <p>
          <a href="/files/Lei-ordinaria-9808-2024-Salvador-BA.pdf">Clique aqui</a> para baixar a Lei ordinaria
          6149
        </p>
        <p>
          <a href="/files/Lei-ordinaria-8629-2014-Salvador-BA-consolidada-[15-08-2024].pdf">Clique aqui</a>
          para baixar a Lei ordinaria 8629
        </p>
        <p>
          <a href="/files/Lei-complementar-80-2022-Salvador-BA-consolidada-[01-11-2022]">Clique aqui</a> para
          baixar a Lei complementar 80
        </p>
      </div>
    </main>
  );
};

export default Legislation;
