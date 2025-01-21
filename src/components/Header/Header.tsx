import React, { useState } from 'react';

import styles from './header.module.scss';
import { FiMenu } from 'react-icons/fi';
import { Link, useNavigate } from 'react-router-dom';
import { pageIsMobile, saveToken, saveUserLogged } from '../../Utils/Utils';
import { baseURL } from '../../api';
import { useForm } from 'react-hook-form';
import { useLoadingContext } from '../../hooks/useLoading';
import { useGlobalProvider } from '../../hooks/useGlobalProvider';

interface LoginFormInputs {
  cpf: string;
  password: string;
}

const Header: React.FC = () => {
  const { register, handleSubmit } = useForm<LoginFormInputs>();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [legislationIsOpen, setLegislationOpen] = useState<boolean>(false);
  const [loginIsOpen, setLoginIsOpen] = useState<boolean>(false);
  const [optionsIsOpen, setOptionsIsOpen] = useState<boolean>(false);

  const { setIsLoading } = useLoadingContext();
  const { userState, setUserState, setLoggedUser } = useGlobalProvider();
  const navigate = useNavigate();

  const onSubmit = async (data: LoginFormInputs) => {
    setIsLoading(true);
    try {
      const object = {
        cpf: data.cpf,
        password: data.password,
      };
      const response = await fetch(`${baseURL}/user/login`, {
        method: 'POST',
        body: JSON.stringify(object),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const json = await response.json();

      if (json.token) {
        saveToken(json.token);
      }

      const localUser = {
        id: json.user.id,
        Image: baseURL + '/' + json.user.Image,
        name: json.user.name.split(' ')[0],
      };

      setUserState(localUser);

      setLoggedUser(json.user);
      saveUserLogged(json.user);

      localStorage.setItem('user', JSON.stringify(localUser));

      setLoginIsOpen(false);
    } catch (error: any) {
      console.error('erro', error);
    } finally {
      setIsLoading(false);
    }
  };

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

  function logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setUserState({
      id: 999999,
      Image: '',
      name: '',
    });
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

            {!userState.name && (
              <a onClick={() => associate()} href="#">
                Área para associado
              </a>
            )}
          </div>

          {userState.name ? (
            <p onClick={() => setOptionsIsOpen((oldState) => !oldState)} className={styles.user_logged}>
              <span>Bem vindo, {userState.name}</span>
              <div className={styles.image_content}>
                <img src={userState.Image} alt="" />
              </div>
              {optionsIsOpen && (
                <div className={styles.user_logged_options}>
                  <button onClick={() => handleButton('/associe-se')}>Perfil</button>
                  <button onClick={() => logout()}>Logout</button>
                </div>
              )}
            </p>
          ) : (
            <button onClick={() => handleButton('/associe-se')}>Associe-se</button>
          )}
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

            {!userState.name && (
              <>
                <a href="#">Área para associado</a>
                <button className={styles.button_join} onClick={() => handleButton('/associe-se')}>
                  Associe-se
                </button>
              </>
            )}

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
            style={{
              width: !pageIsMobile()
                ? legislationIsOpen
                  ? '54%'
                  : '100%'
                : legislationIsOpen
                ? '20%'
                : '100%',
            }}
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

            <form onSubmit={handleSubmit(onSubmit)}>
              <div>
                <label htmlFor="cpf">CPF</label>
                <input
                  type="text"
                  placeholder="cpf"
                  {...register('cpf', {
                    required: 'O CPF é obrigatório',
                  })}
                />
              </div>
              <div>
                <label htmlFor="senha">Senha</label>
                <input
                  type="password"
                  placeholder="senha"
                  {...register('password', {
                    required: 'A senha é obrigatória',
                  })}
                />
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
