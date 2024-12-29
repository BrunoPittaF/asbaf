import Carroussel from '../../components/Carroussel/Carroussel';
import InstagramEmbed from '../../components/InstagramEmbed/InstagramEmbed';

import styles from './styles.module.scss';

import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { useState } from 'react';

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

export function Home() {
  const [value, onChange] = useState<Value>(new Date());
  return (
    <>
      <main className={styles.main}>
        <Carroussel title="Últimas noticias" />
        {/* <Carroussel title="Exclusivo associado" /> */}

        <div className={styles.container}>
          <h3>Agenda do associado</h3>
          <div className={styles.wrapper}>
            <Calendar locale="pt-BR" onChange={onChange} value={value} />
            <InstagramEmbed />
          </div>
        </div>
      </main>
    </>
  );
}
