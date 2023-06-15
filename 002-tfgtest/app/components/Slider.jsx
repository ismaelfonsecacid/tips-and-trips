'use client'
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './Slider.module.css';
import { fetchData } from '../services/apiFetchData';
import useSWR from 'swr';

const fetchSliderData = async (URL) => {
  const response = await fetchData(URL);
  return response;
};

const Slider = () => {
  const URL = 'dataResultsPrueba';
  const { data: sliderData, mutate } = useSWR(URL, fetchSliderData);

  const renderSliderCards = () => {
    if (!sliderData) {
      return <p>Cargando datos...</p>;
    }

    return sliderData.map((item) => (
      <div className={styles.card} key={item.id}>
        <Link href={`/trips/${item.continente}/${item.id}`} key={item.id} style={{ cursor: 'grab', textDecoration: 'none' }}>
          <Image src={item.img} alt={item.ciudad} width={'200'} height={'300'} />
          <p>{item.resume}</p>
        </Link>
      </div>
    ));
  };

  // Set the automatic revalidation every 10 seconds (10000 ms)
  React.useEffect(() => {
    const interval = setInterval(() => {
      mutate();
      console.log('mutate')
    }, 10000);

    return () => clearInterval(interval);
  }, [mutate]);

  return <main className={styles.carrusel}>{renderSliderCards()}</main>;
};

export default Slider;
