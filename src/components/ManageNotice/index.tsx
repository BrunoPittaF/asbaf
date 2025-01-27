import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const schema = yup.object().shape({
  image: yup.mixed<FileList>().required('Imagem é obrigatória.'),
  title: yup.string().required('Título é obrigatório.'),
  subtitle: yup.string().required('Subtítulo é obrigatório.'),
  content: yup.string().required('Conteúdo é obrigatório.'),
});

type NewsFormData = {
  image: FileList;
  title: string;
  subtitle: string;
  content: string;
};

const ManageNotice: React.FC = () => {
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<NewsFormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: NewsFormData) => {
    const formData = new FormData();
    formData.append('image', data.image[0]);
    formData.append('title', data.title);
    formData.append('subtitle', data.subtitle);
    formData.append('content', data.content);

    console.log('Form Data:', data);
    // Aqui você pode enviar `formData` para o backend.
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="image">Imagem</label>
        <input id="image" type="file" accept="image/*" {...register('image')} />
        {errors.image && <p>{errors.image.message}</p>}
      </div>

      <div>
        <label htmlFor="title">Título</label>
        <input id="title" {...register('title')} />
        {errors.title && <p>{errors.title.message}</p>}
      </div>

      <div>
        <label htmlFor="subtitle">Subtítulo</label>
        <input id="subtitle" {...register('subtitle')} />
        {errors.subtitle && <p>{errors.subtitle.message}</p>}
      </div>

      <div>
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

      <button type="submit">Criar Matéria</button>
    </form>
  );
};

export default ManageNotice;
