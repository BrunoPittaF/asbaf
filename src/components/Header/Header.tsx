import React, { useState } from 'react';

import styles from './header.module.scss';
import { FiMenu } from 'react-icons/fi';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  function ActiveMenuHamburguer() {
    setIsOpen((oldState) => !oldState);
  }

  return (
    <>
      <header className={styles.header}>
        <div className={styles.content}>
          <div className={styles.content_menu}>
            <FiMenu onClick={ActiveMenuHamburguer} />

            <img src="/images/logo.png" />
            <a href="#">Área para associado</a>
          </div>

          <button>Associe-se</button>
        </div>
      </header>
      {isOpen && (
        <div className={styles.menu_suspended}>
          <div className={styles.menu_suspended_content}>
            <button>Sobre</button>
            <button>Diretorias</button>
            <button>Legislação</button>
            <button>Últimas Noticias</button>
            <button>Cursos e aperfeiçoamentos</button>
            <button>Jurídico</button>
            <button>Seja parceiro ASBAF</button>
            <button>Galeria</button>
            <button>Estatuto</button>
            <a href="#">Área para associado</a>
            <button className={styles.button_join}>Associe-se</button>
          </div>
          <div className={styles.menu_curtain} onClick={ActiveMenuHamburguer}></div>
        </div>
      )}
    </>
  );
};

export default Header;
