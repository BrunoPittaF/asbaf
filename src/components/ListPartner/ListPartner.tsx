import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { baseURL } from '../../api';
import { IPartner } from '../../interfaces/global';

import Correct from '/images/correct.png';
import Cancel from '/images/Cancel.png';

import styles from './listPartner.module.scss';
import { useNavigate } from 'react-router-dom';
import { useGlobalContext } from '../../hooks/useGlobal';

const ListPartner: React.FC = () => {
  const navigate = useNavigate();

  const { setPartnerGlobal } = useGlobalContext();
  const [partners, setPartners] = useState<IPartner[]>([]);
  const [auxPartner, setAuxPartner] = useState<IPartner[]>([]);

  const customNavigate = async (partner: IPartner) => {
    setPartnerGlobal(partner);

    navigate(`/manager/parceiro/${String(partner.id)}`);
  };

  function filterDisablePartner() {
    const filteredPartners = partners.filter((item) => item.isPartner === false);

    setAuxPartner(filteredPartners);
  }

  function filterActivePartner() {
    const filteredPartners = partners.filter((item) => item.isPartner === true);

    setAuxPartner(filteredPartners);
  }

  function allPartners() {
    setAuxPartner(partners);
  }

  async function getListNotice() {
    const response = await axios.get(`${baseURL}/partner/list`);
    const responseData = await response.data;
    setAuxPartner(responseData.partners);
    setPartners(responseData.partners);
    // setListPartner(responseData.partners);
  }

  useEffect(() => {
    getListNotice();
  }, []);

  return (
    <section className={styles.container}>
      <div className={styles.buttons}>
        <button onClick={() => filterActivePartner()}>Filtrar parceiros ativos</button>
        <button onClick={() => filterDisablePartner()}>Filtrar parceiros inativos</button>
        <button onClick={() => allPartners()}>Filtrar todos os parceiros</button>
      </div>

      <div className={styles.containerList}>
        {auxPartner.length > 0 &&
          auxPartner.map((partner, index) => (
            <div className={styles.element} key={partner.id! + index}>
              <div className={styles.datas}>
                <p onClick={() => customNavigate(partner)} className={styles.name}>
                  {partner.name}
                </p>
                <p>{partner.cnpj}</p>
              </div>

              <div className={styles.datas}>
                <p>{partner.email}</p>
                <span>{partner.cellphone}</span>
                <p className={styles.imagePartner}>
                  Parceiro: <img src={partner.isPartner ? Correct : Cancel} alt="Parceria ativa" />
                </p>
              </div>
            </div>
          ))}
      </div>
    </section>
  );
};

export default ListPartner;
