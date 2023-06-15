
'use client'
import { useEffect } from 'react';
import useSWR from 'swr';
import WeatherEmoji from '@/app/components/WeatherEmoji';
import styles from './Page.module.css';
import Image from 'next/image';
import NotFound from '@/app/not-found';
import { fetchData } from '@/app/services/apiFetchData';

const fetcher = (url) => fetchData(url);

export default function TripPage({ params }) {
  const URL = 'dataInfoPostsPrueba';
  const { id } = params;

  const { data, error, revalidate } = useSWR(URL, fetcher, {
    refreshInterval: 5000, // Revalidar cada 5 segundos
  });

  useEffect(() => {
    const interval = setInterval(revalidate, 5000); // Revalidar cada 5 segundos
    console.log('yepa')
    return () => clearInterval(interval);
  }, []);

  if (error) {
    return <NotFound />;
  }

  if (!data) {
    return <div>Cargando...</div>;
  }

  const datosFiltrados = data.filter((item) => item.id === id);
  const lugar = datosFiltrados[0];

  if (!lugar) {
    return <NotFound />;
  }

  return (

    <div className={styles.cityContainer}>
      <div className={styles.cityContainerlat}>
        <div>
          <h3>{lugar.nombre}</h3>
          <p>{lugar.detalles}</p>
          <br />
        </div>
        <div className={styles.right}>
          <div className={styles.right2}>
            <WeatherEmoji nombreLugar={lugar.id} />
            <p>País: {lugar.pais}</p>
            <p>Población: {lugar.poblacion}</p>
            <p>Idioma: {lugar.idioma}</p>
            <p>Moneda: {lugar.moneda}</p>
          </div>
        </div>
      </div>
      <br />
      <div className={styles.atracciones}>
        <h3>Atracciones</h3>
        <div className={styles.attractionsContainer}>
          {lugar.atracciones.map(atraccion => (
            <div key={atraccion.nombre} className={styles.attraction}>
              <Image
                src={atraccion.img}
                title={atraccion.nombre}
                alt={atraccion.nombre}
                width={'200'}
                height={'250'}
                sizes="(height: 250px)"
              />
              <div className={styles.aside}>
                <h4>{atraccion.nombre}</h4>
                <p>{atraccion.descripcion}</p>
              </div>
            </div>
          ))}

        </div>
      </div>
    </div>

  );

};

