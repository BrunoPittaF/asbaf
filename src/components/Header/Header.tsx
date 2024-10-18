import React, { useState } from 'react';

import styles from './header.module.scss';
import { FiMenu } from 'react-icons/fi';

const Header: React.FC = () => {
  const [hamburguerIsActive, setHamburguerIsActive] = useState<boolean>(false);

  function ActiveMenuHamburguer() {
    setHamburguerIsActive((oldState) => !oldState);
  }
  return (
    <header className={styles.header}>
      {hamburguerIsActive && (
        <div className={styles.menu_suspended}>
          <div className={styles.menu_suspended_content}>
            <button>menu hamburguer</button>
            <button>menu hamburguer</button>
            <button>menu hamburguer</button>
            <button>menu hamburguer</button>
            <button>menu hamburguer</button>
          </div>
        </div>
      )}
      <div className={styles.content}>
        <div className={styles.content_menu}>
          <FiMenu onClick={ActiveMenuHamburguer} />

          <img src="/images/logo.png" />
          <a href="#">Área para associado</a>
        </div>

        <button>Associe-se</button>
      </div>
    </header>
  );
};

export default Header;
