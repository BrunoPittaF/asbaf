import React from 'react';
import Slider from 'react-slick';
import styles from './carroussel.module.scss';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

interface ICarroussel {
  title: string;
}

const Carroussel: React.FC<ICarroussel> = ({ title }: ICarroussel) => {
  function SampleNextArrow(props: any) {
    const { className, style, onClick } = props;
    return (
      <img
        className={className}
        style={{ ...style, display: 'block', width: '60px', height: '60px' }}
        src="/images/nextArrow.png"
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props: any) {
    const { className, style, onClick } = props;
    return (
      <img
        className={className}
        style={{ ...style, display: 'block', left: '-85px', width: '60px', height: '60px' }}
        src="/images/backArrow.png"
        onClick={onClick}
      />
    );
  }

  const settings = {
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <section className={styles.section}>
      <div className={styles.blueBar}></div>
      <div className={styles.goldBar}></div>

      <div className={styles.container}>
        <h2>{title}</h2>
        <Slider {...settings}>
          <a href="#" className={styles.card}>
            <img src="/images/card.png" alt="card" />
          </a>
          <a href="#" className={styles.card}>
            <img src="/images/card.png" alt="card" />
          </a>
          <a href="#" className={styles.card}>
            <img src="/images/card.png" alt="card" />
          </a>
          <a href="#" className={styles.card}>
            <img src="/images/card.png" alt="card" />
          </a>
          <a href="#" className={styles.card}>
            <img src="/images/card.png" alt="card" />
          </a>
          <a href="#" className={styles.card}>
            <img src="/images/card.png" alt="card" />
          </a>
        </Slider>
      </div>
    </section>
  );
};

export default Carroussel;
