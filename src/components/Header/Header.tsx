import React, { useState } from 'react';

import styles from './header.module.scss';
import { FiMenu } from 'react-icons/fi';
import { Link, useNavigate } from 'react-router-dom';
import { pageIsMobile } from '../../Utils/Utils';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [legislationIsOpen, setLegislationOpen] = useState<boolean>(false);
  const [loginIsOpen, setLoginIsOpen] = useState<boolean>(false);
  const navigate = useNavigate();

  function associate() {
    setIsOpen(false);
    setLoginIsOpen(true);
  }

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

            <a onClick={() => associate()} href="#">
              Área para associado
            </a>
          </div>

          <button onClick={() => handleButton('/associe-se')}>Associe-se</button>
        </div>
      </header>
      {isOpen && (
        <div className={styles.menu_suspended}>
          <div
            style={{ width: !pageIsMobile() ? '70%' : legislationIsOpen ? '40%' : '70%' }}
            className={styles.menu_suspended_content}
          >
            <button onClick={() => handleButton('/')}>Home</button>
            <button onClick={() => handleButton('/diretores')}>Diretorias</button>
            <button onClick={() => setLegislationOpen((oldState) => !oldState)}>Legislação</button>
            <button onClick={() => handleButton('/ultimas-noticias')}>Últimas Noticias</button>
            <button onClick={() => handleButton('/cursos-e-aperfeicoamentos')}>
              Cursos e aperfeiçoamentos
            </button>
            <button onClick={() => handleButton('/juridico')}>Jurídico</button>
            <button onClick={() => handleButton('/galeria')}>Galeria</button>
            <button onClick={() => handleButton('/estatuto')}>Estatuto</button>
            <a href="#">Área para associado</a>
            <button className={styles.button_join} onClick={() => handleButton('/associe-se')}>
              Associe-se
            </button>
            <button onClick={() => handleButton('/seja-parceiro-asbaf')}>Seja parceiro ASBAF</button>
          </div>
          {legislationIsOpen && (
            <div style={{ width: !pageIsMobile() ? '23%' : '40%' }} className={styles.legislation_content}>
              <button onClick={() => handleButton('/legislacao/0')}>Lei ordinaria 6149, 2002</button>
              <button onClick={() => handleButton('/legislacao/1')}>Lei ordinaria 8629, 2014</button>
              <button onClick={() => handleButton('/legislacao/2')}>Lei complementar 80, 2022</button>
              <button onClick={() => handleButton('/legislacao/3')}>Lei ordinaria 9808, 2024</button>
            </div>
          )}

          <div
            style={{ width: !pageIsMobile() ? (legislationIsOpen ? '54%' : '100%') : '20%' }}
            className={styles.menu_curtain}
            onClick={ActiveMenuHamburguer}
          ></div>
        </div>
      )}

      {loginIsOpen && (
        <div className={styles.modal}>
          <div onClick={() => setLoginIsOpen(false)} className={styles.curtain}></div>
          <div className={styles.content}>
            <h3>Login</h3>

            <form action="#">
              <div>
                <label htmlFor="cpf">CPF</label>
                <input type="text" placeholder="cpf" />
              </div>
              <div>
                <label htmlFor="senha">Senha</label>
                <input type="password" placeholder="senha" />
              </div>
              <button>Login</button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
