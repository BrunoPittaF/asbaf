import React, { useState } from 'react';
import styles from './styles.module.scss';

import { useForm, useFieldArray } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
// import axios from "axios";

// Schema de validação com Yup
const schema = yup.object({
  cpf: yup.string().required('CPF é obrigatório'),
  email: yup.string().email('Email inválido').required('Email é obrigatório'),
  password: yup.string().min(6, 'Senha deve ter ao menos 6 caracteres').required('Senha é obrigatória'),
  address: yup.string().required('Endereço é obrigatório'),
  birthDate: yup.date().required('Data de nascimento é obrigatória'),
  name: yup.string().required('Nome é obrigatório'),
  cellphone: yup.string().required('Celular é obrigatório'),
  cellMobile: yup.string().required('Celular adicional é obrigatório'),
  cellSefaz: yup.string().optional(),
  sectorSefaz: yup.string().optional(),
  instagram: yup.string().optional(),
  theads: yup.string().optional(),
  facebook: yup.string().optional(),
  image: yup
    .mixed<FileList>()
    .test('fileRequired', 'A imagem é obrigatória', (value) => !!value && value.length > 0) // Verifica se há arquivo
    .test('fileType', 'Somente arquivos JPEG ou PNG são permitidos', (value) =>
      !!value && value.length > 0 ? ['image/jpeg', 'image/png'].includes(value[0]?.type) : true
    )
    .test('fileSize', 'O arquivo deve ter no máximo 2MB', (value) =>
      !!value && value.length > 0 ? value[0]?.size <= 2 * 1024 * 1024 : true
    ),
  relatives: yup
    .array(
      yup.object({
        cpf: yup.string().required('CPF do parente é obrigatório'),
        relationship: yup.string().required('Relacionamento é obrigatório'),
        name: yup.string().required('Nome do parente é obrigatório'),
      })
    )
    .optional(),
});

type FormValues = yup.InferType<typeof schema>;

const Join: React.FC = () => {
  const [numberChildren, setNumberChildren] = useState<number>(2);
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: yupResolver(schema),
    defaultValues: {
      relatives: [],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'relatives',
  });

  const removeParent = (index: number) => {
    remove(index);
    setNumberChildren((oldValue) => oldValue - 1);
  };

  const addParent = () => {
    append({ cpf: '', relationship: '', name: '' });
    setNumberChildren((oldValue) => oldValue + 1);
  };

  const onSubmit = async (data: FormValues) => {
    try {
      if (!data.image || data.image.length === 0) {
        return;
      }

      const formData = new FormData();
      formData.append('image', data.image[0]);

      alert('Dados enviados com sucesso!');
    } catch (error) {
      console.error(error);
      alert('Erro ao enviar os dados');
    }
  };

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <h2>Dados Pessoais</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label>Anexe sua foto:</label>
            <input
              type="file"
              accept="image/*"
              {...register('image', { required: 'Imagem é obrigatória' })}
            />
            {errors.image && <p>{errors.image.message}</p>}
          </div>
          <div>
            <label>CPF:*</label>
            <input type="text" {...register('cpf')} />
            <p>{errors.cpf?.message}</p>
          </div>

          <div>
            <label>Email:*</label>
            <input type="email" {...register('email')} />
            <p>{errors.email?.message}</p>
          </div>

          <div>
            <label>Senha:*</label>
            <input type="password" {...register('password')} />
            <p>{errors.password?.message}</p>
          </div>

          <div>
            <label>Endereço:*</label>
            <input {...register('address')} />
            <p>{errors.address?.message}</p>
          </div>

          <div>
            <label>Data de Nascimento:*</label>
            <input type="date" {...register('birthDate')} />
            <p>{errors.birthDate?.message}</p>
          </div>

          <div>
            <label>Nome:*</label>
            <input {...register('name')} />
            <p>{errors.name?.message}</p>
          </div>

          <div>
            <label>Telefone:*</label>
            <input {...register('cellphone')} />
            <p>{errors.cellphone?.message}</p>
          </div>

          <div>
            <label>Celular:*</label>
            <input {...register('cellMobile')} />
            <p>{errors.cellMobile?.message}</p>
          </div>

          <h3>Campos Opcionais</h3>
          <div>
            <label>Celular Sefaz:</label>
            <input {...register('cellSefaz')} />
          </div>

          <div>
            <label>Setor Sefaz:</label>
            <input {...register('sectorSefaz')} />
          </div>

          <div>
            <label>Instagram:</label>
            <input {...register('instagram')} />
          </div>

          <div>
            <label>Threads:</label>
            <input {...register('theads')} />
          </div>

          <div>
            <label>Facebook:</label>
            <input {...register('facebook')} />
          </div>

          <h3>Dependentes</h3>
          {fields.map((field, index) => (
            <div className={styles.parentsContainer} key={field.id}>
              <div>
                <label>CPF do dependente:</label>
                <input {...register(`relatives.${index}.cpf`)} />
                <p>{errors.relatives?.[index]?.cpf?.message}</p>
              </div>

              <div>
                <label>Relacionamento:</label>
                <select className={styles.selectInput} {...register(`relatives.${index}.relationship`)}>
                  <option value="">Selecione</option>
                  <option value="2">Cônjuge</option>
                  <option value={numberChildren}>Filho</option>
                </select>
                <p>{errors.relatives?.[index]?.relationship?.message}</p>
              </div>

              <div>
                <label>Nome:</label>
                <input {...register(`relatives.${index}.name`)} />
                <p>{errors.relatives?.[index]?.name?.message}</p>
              </div>

              <button className={styles.removeButton} type="button" onClick={() => removeParent(index)}>
                Remover
              </button>
            </div>
          ))}

          <button type="button" className={styles.addParent} onClick={() => addParent()}>
            Adicionar Parente
          </button>

          <div>
            <button className={styles.sendForm} type="submit">
              Enviar
            </button>
          </div>
        </form>
      </div>
    </main>
  );
};

export default Join;
