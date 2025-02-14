import React from 'react';
import Slider from 'react-slick';
import styles from './carroussel.module.scss';
import './customCarrossel.scss';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { pageIsMobile } from '../../Utils/Utils';

interface ICarroussel {
  title: string;
}

const Carroussel: React.FC<ICarroussel> = ({ title }: ICarroussel) => {
  function SampleNextArrow(props: any) {
    const { className, style, onClick } = props;
    return (
      <img
        className={className}
        style={{ ...style, display: pageIsMobile() ? 'none' : 'block', width: '60px', height: '60px' }}
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
        style={{
          ...style,
          display: pageIsMobile() ? 'none' : 'block',
          left: '-85px',
          width: '60px',
          height: '60px',
        }}
        src="/images/backArrow.png"
        onClick={onClick}
      />
    );
  }

  const settings = {
    infinite: true,
    speed: 6000,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <SampleNextArrow className={styles.arrow_next} />,
    prevArrow: <SamplePrevArrow className={styles.arrow_prev} />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        speed: 100,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
        },
      },
    ],
  };

  return (
    <section className={styles.section}>
      <div className={styles.blueBar}></div>
      <div className={styles.goldBar}></div>

      <div className={styles.container}>
        <h2>{title}</h2>
        {!pageIsMobile() && (
          <Slider {...settings}>
            <a href="#" className={styles.card}>
              {/* <img src="/images/nota-de-esclarecimento.jpg" alt="card" /> */}
            </a>
            <a href="/notice/1" className={styles.card}>
              <img src="/images/nota-de-esclarecimento.jpg" alt="card" />
            </a>
            <a href="#" className={styles.card}>
              {/* <img src="/images/nota-de-esclarecimento.jpg" alt="card" /> */}
            </a>

            <a href="#" className={styles.card}>
              {/* <img src="/images/nota-de-esclarecimento.jpg" alt="card" /> */}
            </a>
            <a href="#" className={styles.card}>
              {/* <img src="/images/nota-de-esclarecimento.jpg" alt="card" /> */}
            </a>
            <a href="#" className={styles.card}>
              {/* <img src="/images/nota-de-esclarecimento.jpg" alt="card" /> */}
            </a>
          </Slider>
        )}
        {pageIsMobile() && (
          <img className={styles.imageMobile} src="/images/nota-de-esclarecimento.jpg" alt="card" />
        )}
      </div>
    </section>
  );
};

export default Carroussel;
