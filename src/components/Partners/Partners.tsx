import React from 'react';

import styles from './partners.module.scss';

const Partners: React.FC = () => {
  return (
    <section className={styles.section}>
      <div className={styles.content}>
        <a className={styles.card} href="#">
          <img src="/images/partner.png" alt="parceiro" />
          <p>Não inviabilize</p>
        </a>
        <a className={styles.card} href="#">
          <img src="/images/partner.png" alt="parceiro" />
          <p>Não inviabilize</p>
        </a>
        <a className={styles.card} href="#">
          <img src="/images/partner.png" alt="parceiro" />
          <p>Não inviabilize</p>
        </a>
      </div>
    </section>
  );
};

export default Partners;
