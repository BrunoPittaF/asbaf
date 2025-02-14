import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { baseURL } from '../../api';
import { INotice } from '../../interfaces/global';
import { useNavigate } from 'react-router-dom';

import styles from './listNotice.module.scss';
import { useGlobalProvider } from '../../hooks/useGlobalProvider';

const ListNotice: React.FC = () => {
  const [notices, setNotices] = useState<INotice[]>([]);
  const navigate = useNavigate();
  const { setNoticeGlobal } = useGlobalProvider();

  const customNavigate = (notice: INotice) => {
    setNoticeGlobal(notice);
    navigate(`/${String(notice.id)}`);
  };

  async function getListNotice() {
    const response = await axios.get(`${baseURL}/notice/`);
    const responseData = await response.data;
    setNotices(responseData.notices);
  }

  useEffect(() => {
    getListNotice();
  }, []);

  return (
    <div className={styles.containerList}>
      {notices?.length > 0 &&
        notices?.map((notice, index) => (
          <div className={styles.element} key={notice.id! + index}>
            <p onClick={() => customNavigate(notice)}>{notice.title}</p>
            <span>{new Date(notice.date).toLocaleDateString('pt-BR')}</span>
          </div>
        ))}
    </div>
  );
};

export default ListNotice;
