
import WeatherEmoji from '@/app/components/WeatherEmoji';
import styles from './Page.module.css';
// import jsonData from '../../../json/infoPosts.json'

import Image from 'next/image';
import NotFound from '@/app/not-found';
import { fetchData } from '@/app/services/apiFetchData';



export default async function TripPage({ params }) {
  const URL = 'dataInfoPosts';
  const { id } = params;
  const data = await fetchData(URL)

  const datosFiltrados = data.filter(item => item.id === id);


  const lugar = datosFiltrados[0];

  if (lugar == undefined)
  return <NotFound/>


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

      <h3>Comida típica</h3>
      <ul className={styles.foodList}>
        {lugar.comida_tipica.map(comida => (
          <li key={comida}>{comida}</li>
        ))}
      </ul>
    </div>

  );

};

