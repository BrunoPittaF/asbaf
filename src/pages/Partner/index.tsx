import React from 'react';
import styles from './styles.module.scss';

import { useLoadingContext } from '../../hooks/useLoading';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import axios from 'axios';
import { baseURL } from '../../api';
// Validation schema
const schema = yup.object().shape({
  cnpj: yup.string().required('CNPJ é obrigatório.'),
  name: yup.string().required('Nome é obrigatório.'),
  cellphone: yup.string().required('Celular é obrigatório.'),
  email: yup.string().email('E-mail inválido.').required('E-mail é obrigatório.'),
  note: yup.string().required('Nota é obrigatória.'),
});

type FormData = {
  cnpj: string;
  name: string;
  cellphone: string;
  email: string;
  note: string;
};

const Partner: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const { setIsLoading } = useLoadingContext();

  const onSubmit = async (data: FormData) => {
    setIsLoading(true);
    try {
      const response = await axios.post(`${baseURL}/partner/sendOrder`, data);
      const responseData = await response.data;
      return responseData;
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <div className={styles.header_content}>
          <h2>Seja Parceiro Asbaf</h2>
        </div>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label htmlFor="cnpj">CNPJ</label>
            <input id="cnpj" {...register('cnpj')} />
            {errors.cnpj && <p>{errors.cnpj.message}</p>}
          </div>

          <div>
            <label htmlFor="name">Nome</label>
            <input id="name" {...register('name')} />
            {errors.name && <p>{errors.name.message}</p>}
          </div>

          <div>
            <label htmlFor="cellphone">Celular</label>
            <input id="cellphone" {...register('cellphone')} />
            {errors.cellphone && <p>{errors.cellphone.message}</p>}
          </div>

          <div>
            <label htmlFor="email">E-mail</label>
            <input id="email" {...register('email')} />
            {errors.email && <p>{errors.email.message}</p>}
          </div>

          <div>
            <label htmlFor="note">Observação</label>
            <textarea id="note" {...register('note')} />
            {errors.note && <p>{errors.note.message}</p>}
          </div>

          <button type="submit" className="w-full">
            Enviar
          </button>
        </form>
      </div>
    </main>
  );
};

export default Partner;
