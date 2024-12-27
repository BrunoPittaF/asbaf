import React, { useState } from 'react';

import styles from './header.module.scss';
import { FiMenu } from 'react-icons/fi';
import { Link, useNavigate } from 'react-router-dom';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const navigate = useNavigate();

  function handleButton(route: string) {
    setIsOpen(false);
    navigate(route);
  }

  function ActiveMenuHamburguer() {
    setIsOpen((oldState) => !oldState);
  }

  return (
    <>
      <header className={styles.header}>
        <div className={styles.content}>
          <div className={styles.content_menu}>
            <FiMenu onClick={ActiveMenuHamburguer} />

            <Link className={styles.logo} to="/">
              <img src="/images/logo.png" />
            </Link>

            <a href="#">Área para associado</a>
          </div>

          <button>Associe-se</button>
        </div>
      </header>
      {isOpen && (
        <div className={styles.menu_suspended}>
          <div className={styles.menu_suspended_content}>
            <button onClick={() => handleButton('/')}>Home</button>
            <button onClick={() => handleButton('/diretores')}>Diretorias</button>
            <button onClick={() => handleButton('/legislacao')}>Legislação</button>
            {/* <button onClick={() => handleButton('/ultimas-noticias')}>Últimas Noticias</button> */}
            {/* <button onClick={() => handleButton('/cursos-e-aperfeicoamentos')}>
              Cursos e aperfeiçoamentos
            </button> */}
            {/* <button onClick={() => handleButton('/juridico')}>Jurídico</button> */}
            <button onClick={() => handleButton('/seja-parceiro-asbaf')}>Seja parceiro ASBAF</button>
            {/* <button onClick={() => handleButton('/galeria')}>Galeria</button> */}
            {/* <button onClick={() => handleButton('/estatuto')}>Estatuto</button> */}
            <a href="#">Área para associado</a>
            <button onClick={() => handleButton('/associe-se')} className={styles.button_join}>
              Associe-se
            </button>
          </div>
          <div className={styles.menu_curtain} onClick={ActiveMenuHamburguer}></div>
        </div>
      )}
    </>
  );
};

export default Header;
