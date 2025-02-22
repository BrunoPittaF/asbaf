import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { IPartner } from '../../interfaces/global';
// import axios from 'axios';
// import { baseURL } from '../../api';

import styles from './styles.module.scss';
import axios from 'axios';
import { baseURL } from '../../api';

const schema = yup.object().shape({
  image: yup.mixed<FileList>(),
  cnpj: yup.string().required('CNPJ é obrigatório.'),
  name: yup.string().required('Nome é obrigatório.'),
  cellphone: yup.string().required('Telefone é obrigatório.'),
  email: yup.string().required('Email é obrigatório.'),
  instagram: yup.string(),
  website: yup.string(),
  note: yup.string(),
  isPartner: yup.boolean(),
});

const ManagePartner: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IPartner>({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: IPartner) => {
    const formData = new FormData();
    formData.append('image', data.image![0]);
    formData.append('cnpj', data.cnpj);
    formData.append('name', data.name);
    formData.append('cellphone', data.cellphone);
    formData.append('email', data.email);
    formData.append('instagram', data.instagram || '');
    formData.append('website', data.website || '');
    formData.append('isPartner', data.website || '');

    const response = await axios.post(`${baseURL}/partner/register`, formData);
    const responseData = await response.data;

    return responseData;
  };

  return (
    <form className={styles.formManagePartner} onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.formDiv}>
        <label htmlFor="image">Imagem do parceiro</label>
        <input id="image" type="file" accept="image/*" {...register('image')} />
        {errors.image && <p>{errors.image.message}</p>}
      </div>

      <div className={styles.formDiv}>
        <label htmlFor="title">CNPJ</label>
        <input id="title" {...register('cnpj')} />
        {errors.cnpj && <p>{errors.cnpj.message}</p>}
      </div>

      <div className={styles.formDiv}>
        <label htmlFor="subtitle">Nome</label>
        <input id="subtitle" {...register('name')} />
        {errors.name && <p>{errors.name.message}</p>}
      </div>

      <div className={styles.formDiv}>
        <label htmlFor="subtitle">Celular</label>
        <input id="subtitle" {...register('cellphone')} />
        {errors.cellphone && <p>{errors.cellphone.message}</p>}
      </div>

      <div className={styles.formDiv}>
        <label htmlFor="subtitle">Email</label>
        <input id="subtitle" type="email" {...register('email')} />
        {errors.email && <p>{errors.email.message}</p>}
      </div>

      <div className={styles.formDiv}>
        <label htmlFor="subtitle">Instagram</label>
        <input id="subtitle" type="text" {...register('instagram')} />
        {errors.instagram && <p>{errors.instagram.message}</p>}
      </div>

      <div className={styles.formDiv}>
        <label htmlFor="subtitle">Website</label>
        <input id="subtitle" {...register('website')} />
        {errors.website && <p>{errors.website.message}</p>}
      </div>

      <div className={styles.divCheckbox}>
        <label htmlFor="isPartner">Parceiro ativo</label>
        <input type="checkbox" id="isPartner" {...register('isPartner')} />
        {errors.isPartner && <p>{errors.isPartner.message}</p>}
      </div>

      <button type="submit">Registrar Parceiro</button>
    </form>
  );
};

export default ManagePartner;
