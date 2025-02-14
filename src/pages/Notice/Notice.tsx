import React, { useEffect, useState } from 'react';

import styles from './style.module.scss';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/footer';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { baseURL } from '../../api';
import { INotice } from '../../interfaces/global';

const Notice: React.FC = () => {
  const { id } = useParams();
  const [notice, setNotice] = useState<INotice>();
  const [dateNotice, setDateNotice] = useState<string>('');

  async function getNotice(idNotice: string) {
    const response = await axios.get(`${baseURL}/notice/${idNotice}`);
    const responseData = await response.data;
    setNotice(responseData.notice);
    setDateNotice(responseData.notice.date);
  }

  useEffect(() => {
    getNotice(id!);
  }, [id]);

  return (
    <>
      <Header />
      <main className={styles.main}>
        <div className={styles.container}>
          <img className={styles.mainImage} src={baseURL + '/' + notice?.image} alt="main-img" />
          <h1>{notice?.title}</h1>
          <h2>{notice?.subtitle}</h2>
          <div className={styles.row}>
            <span>Data de publicação: {new Date(dateNotice).toLocaleDateString('pt-BR')}</span>
            <div className={styles.buttons}>
              <a href={`https://wa.me/+5571991651013/?text=${encodeURIComponent(window.location.href)}`}>
                <img src="/images/WhatsApp.png" alt="whatsapp" />
              </a>
            </div>
          </div>

          {notice?.content && (
            <div className={styles.content} dangerouslySetInnerHTML={{ __html: notice.content }}></div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Notice;
