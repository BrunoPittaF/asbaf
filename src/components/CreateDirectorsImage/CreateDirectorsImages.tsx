import React, { useState } from 'react';
import { baseURL } from '../../api';
import styles from './CreateDirectorsImages.module.scss';

const CreateDirectorsImages: React.FC = () => {
  const [files, setFiles] = useState<FileList | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!files) return;

    const formData = new FormData();
    Array.from(files).forEach((file) => formData.append('images', file));

    const response = await fetch(baseURL + '/images/directors', {
      method: 'POST',
      body: formData,
    });

    if (response.ok) {
      setFiles(null);
      alert('Imagens enviadas com sucesso!');

    } else {
      alert('Erro ao enviar imagens.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.formElement}>
      <label>
        Escolha as imagens:
        <input
          type="file"
          multiple
          onChange={(e) => setFiles(e.target.files)}
        />
      </label>
      <button type="submit" className={styles.buttonAction}>
        Enviar
      </button>
    </form>
  );
};

export default CreateDirectorsImages;
