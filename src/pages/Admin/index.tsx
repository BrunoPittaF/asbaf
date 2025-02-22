import React, { useEffect, useState } from 'react';
import ManageNotice from '../../components/ManageNotice';

import styles from './styles.module.scss';
import ListNotice from '../../components/ListNotice/ListNotice';
import ListPartner from '../../components/ListPartner/ListPartner';
import ManagePartner from '../../components/ManageParner/ManageParner';

//add noticias, parceiros, código do instagram, imagens diretorias, imagens galeria

// Validation schema

type IAdminTitlePage = {
  noticias: string;
  parceiros: string;
  instagram: string;
  diretorias: string;
  galeria: string;
  listagem: string;
  listarParceiros: string;
  registrarParceiros: string;
};

const adminTitlePage: IAdminTitlePage = {
  noticias: 'Criar Noticia',
  parceiros: 'Adicionar Parceiro',
  instagram: 'Postagem Instagram',
  diretorias: 'Adicionar Diretoria',
  galeria: 'Adicionar Imagem',
  listagem: 'Lista de Notícias',
  listarParceiros: 'Lista de Pedidos de Parcerias',
  registrarParceiros: 'Registrar Parceiro',
};

const adminContent = {
  noticias: <ManageNotice />,
  parceiros: <ManageNotice />,
  instagram: <ManageNotice />,
  diretorias: <ManageNotice />,
  galeria: <ManageNotice />,
  listagem: <ListNotice />,
  listarParceiros: <ListPartner />,
  registrarParceiros: <ManagePartner />,
};

const Admin: React.FC = () => {
  const [titlePage, setTitlePage] = useState<keyof IAdminTitlePage>('noticias');
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleAuthentication = () => {
    // const username = prompt('Digite seu usuário:');
    // const password = prompt('Digite sua senha:');

    // // Substitua com a validação que preferir
    // if (username === 'admin' && password === 'adminasbaf202501') {
    //   setIsAuthenticated(true);
    // } else {
    //   alert('Usuário ou senha incorretos!');
    // }
    setIsAuthenticated(true);
  };

  useEffect(() => {
    handleAuthentication();
  }, []);

  if (!isAuthenticated) {
    return (
      <div className="">
        <h1>Não autorizado</h1>
      </div>
    );
  }

  return (
    <section className={styles.page}>
      <header>
        <ul>
          <li>
            <button onClick={() => setTitlePage('noticias')}>Criar Noticias</button>
          </li>
          <li>
            <button onClick={() => setTitlePage('listagem')}>Lista de Notícias</button>
          </li>
          <li>
            <button onClick={() => setTitlePage('listarParceiros')}>Lista de pedidos de parceria</button>
          </li>
          <li>
            <button onClick={() => setTitlePage('registrarParceiros')}>Registrar Parceiro</button>
          </li>
          <li>
            <button onClick={() => setTitlePage('parceiros')}>Adicionar Parceiro</button>
          </li>
          <li>
            <button onClick={() => setTitlePage('instagram')}>Postagem Instagram</button>
          </li>
          <li>
            <button onClick={() => setTitlePage('diretorias')}>Adicionar Diretorias</button>
          </li>
          <li>
            <button onClick={() => setTitlePage('galeria')}>Adicionar Imagem</button>
          </li>
        </ul>
      </header>
      <div className="">
        <h1 className="">{adminTitlePage[titlePage]}</h1>
        {adminContent[titlePage]}
      </div>
    </section>
  );
};

export default Admin;
