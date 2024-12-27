import React from 'react';

import styles from './partners.module.scss';

const Partners: React.FC = () => {
  return (
    <section className={styles.section}>
      <div className={styles.content}>
        <a
          className={styles.card}
          href="https://www.instagram.com/asfebba?igsh=MXBnNmxyNGVkMWJvOQ=="
          target="_blank"
        >
          <img src="/images/asfeb.png" alt="parceiro" />
          <p>Asfeb</p>
        </a>
        <a
          className={styles.card}
          href="https://wa.me/71993163388?text='Ol%C3%A1%20,%20vim%20pela%20ASBAF%20e%20tenho%20interesse%20em%20conhecer%20a%20Ecos'"
        >
          <img src="/images/ecos.jpg" alt="parceiro" />
          <p>Ecos</p>
        </a>
      </div>
    </section>
  );
};

export default Partners;
