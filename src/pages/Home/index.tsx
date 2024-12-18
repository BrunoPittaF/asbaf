import Carroussel from '../../components/Carroussel/Carroussel';
import GiantLogo from '../../components/GiantLogo/GiantLogo';
import Header from '../../components/Header/Header';
import InstagramEmbed from '../../components/InstagramEmbed/InstagramEmbed';
import Partners from '../../components/Partners/Partners';

import styles from './styles.module.scss';

import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import Footer from '../../components/Footer/footer';
import { useState } from 'react';

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

export function Home() {
  const [value, onChange] = useState<Value>(new Date(2025, 0, 28));
  return (
    <>
      <Header></Header>
      <main>
        <GiantLogo />
        <Partners />
        <Carroussel title="Últimas noticias" />
        <Carroussel title="Exclusivo associado" />

        <div className={styles.container}>
          <h3>Agenda do associado</h3>
          <div className={styles.wrapper}>
            <Calendar onChange={onChange} value={value} />
            <InstagramEmbed />
          </div>
        </div>
        <Footer />
      </main>
    </>
  );
}
