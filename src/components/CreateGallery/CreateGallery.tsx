import React, { useState } from 'react';
import { baseURL } from '../../api';
import styles from './CreateGallery.module.scss';

const CreateGalleryForm: React.FC = () => {
  const [folder, setFolder] = useState('');
  const [files, setFiles] = useState<FileList | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!folder || !files) return;

    const formData = new FormData();
    formData.append('folderName', folder);
    Array.from(files).forEach((file) => formData.append('images', file));

    const response = await fetch(baseURL + '/images/gallery', {
      method: 'POST',
      body: formData,
    });

    if (response.ok) {
      setFolder('');
      setFiles(null);
      alert('Imagens enviadas com sucesso!');

    } else {
      alert('Erro ao enviar imagens.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.formElement}>
      <label className="block mb-2">
        Nome da pasta:
        <input
          type="text"
          value={folder}
          onChange={(e) => setFolder(e.target.value)}
          className="border p-2 w-full"
        />
      </label>
      <label className="block mb-2">
        Escolha as imagens:
        <input
          type="file"
          multiple
          onChange={(e) => setFiles(e.target.files)}
          className="border p-2 w-full"
        />
      </label>
      <button type="submit" className={styles.buttonAction}>
        Enviar
      </button>
    </form>
  );
};

export default CreateGalleryForm;
