import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { IInstagramLink } from '../../interfaces/global';
import axios from 'axios';
import { baseURL } from '../../api';

import styles from './styles.module.scss';

const schema = yup.object().shape({
  url: yup.string().required('Link do instagram é obrigatório.'),
});

const InstagramAdmin: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IInstagramLink>({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: IInstagramLink) => {
    const response = await axios.post(`${baseURL}/instagram/create`, data);
    const responseData = response.data;
    console.log(responseData);
  };

  return (
    <form className={styles.formInstagram} onSubmit={handleSubmit(onSubmit)} action="">
      <label htmlFor="url">Insira o link do instagram a baixo</label>
      <input type="text" {...register('url')} placeholder="Digite código do instagram" />
      {errors.url && <p>{errors.url.message}</p>}
      <button type="submit">Postar</button>
    </form>
  );
};

export default InstagramAdmin;
