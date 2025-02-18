import React, { useEffect, useState } from 'react';

import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { INotice, NewsFormData } from '../../../interfaces/global';
import { baseURL } from '../../../api';
import axios from 'axios';

import styles from './styles.module.scss';
import { useNavigate, useParams } from 'react-router-dom';

const schema = yup.object().shape({
  image: yup.mixed<FileList>().required('Imagem é obrigatória.'),
  title: yup.string().required('Título é obrigatório.'),
  subtitle: yup.string().required('Subtítulo é obrigatório.'),
  content: yup.string().required('Conteúdo é obrigatório.'),
});

const EditNotice: React.FC = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [localNotice, setLocalNotice] = useState<INotice>({
    content: '',
    date: '',
    image: '',
    subtitle: '',
    title: '',
  });

  const {
    control,
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<NewsFormData>({
    resolver: yupResolver(schema),
    defaultValues: {
      content: localNotice!.content,
      subtitle: localNotice!.subtitle,
      title: localNotice!.title,
    },
  });

  useEffect(() => {
    async function getEspecificNotice() {
      const response = await axios.get(`${baseURL}/notice/${id}`);
      const responseData = await response.data;
      setLocalNotice(responseData.notice);
      reset(responseData.notice);
    }
    getEspecificNotice();
  }, [id, reset]);

  const onSubmit = async (data: NewsFormData) => {
    const formData = new FormData();
    formData.append('image', data.image[0]);
    formData.append('title', data.title);
    formData.append('subtitle', data.subtitle);
    formData.append('content', data.content);

    const response = await axios.post(`${baseURL}/notice/`, formData);
    const responseData = await response.data;

    return responseData;
  };

  const deleteNotice = async () => {
    const response = await axios.delete(`${baseURL}/notice/${id}`);
    const responseData = await response.data;
    console.log('deletado', responseData);
    setLocalNotice({
      content: '',
      date: '',
      image: '',
      subtitle: '',
      title: '',
    });
    navigate('/admin');
  };

  return (
    <>
      <button className={styles.backButton} onClick={() => navigate(-1)}>
        Voltar
      </button>
      <form className={styles.formManageNotice} onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.formDiv}>
          <label htmlFor="image">Imagem de capa</label>
          <input id="image" type="file" accept="image/*" {...register('image')} />
          {errors.image && <p>{errors.image.message}</p>}
          {localNotice!.image && (
            <>
              <p>Última Imagem:</p>
              <img
                style={{ width: '150px', height: '150px' }}
                src={baseURL + '/' + localNotice!.image}
                alt={localNotice!.title ?? ''}
              />
            </>
          )}
        </div>

        <div className={styles.formDiv}>
          <label htmlFor="title">Título</label>
          <input id="title" {...register('title')} />
          {errors.title && <p>{errors.title.message}</p>}
        </div>

        <div className={styles.formDiv}>
          <label htmlFor="subtitle">Subtítulo</label>
          <input id="subtitle" {...register('subtitle')} />
          {errors.subtitle && <p>{errors.subtitle.message}</p>}
        </div>

        <div className={styles.formDiv}>
          <label htmlFor="content">Conteúdo</label>
          {/* <textarea id="content" {...register('content')} />
           */}
          <Controller
            name="content"
            control={control}
            defaultValue=""
            rules={{ required: 'O conteúdo do editor é obrigatório' }} // Validação
            render={({ field }) => (
              <ReactQuill
                {...field} // Passando os campos necessários para o React Quill
                onChange={(value) => field.onChange(value)} // Atualizando o valor no React Hook Form
              />
            )}
          />
          {errors.content && <p>{errors.content.message}</p>}
        </div>

        <button type="submit">Editar Matéria</button>
      </form>
      <button className={styles.deleteButton} onClick={() => deleteNotice()}>
        Excluir Matéria
      </button>
    </>
  );
};

export default EditNotice;
