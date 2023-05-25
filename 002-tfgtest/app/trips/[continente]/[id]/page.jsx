
'use client'
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from './Page.module.css';
import jsonData from '../../../json/infoPosts.json'
import Image from 'next/image';

const TripPage = ({ params }) => {
  const { id } = params;
  const router = useRouter();
  const [weatherEmoji, setWeatherEmoji] = useState('');
  const datosFiltrados = jsonData.filter(item => item.id === id);

  useEffect(() => {
    if (datosFiltrados.length > 0) {
      fetchWeatherEmoji(datosFiltrados[0].nombre);
    } else {
      // No se encontró ningún elemento con el ID especificado, redirigir a un error 404
      router.push('/404'); // Reemplaza '/404' con la URL correcta para la página de error 404
    }
  }, []);

  const fetchWeatherEmoji = async (nombreLugar) => {
    try {
      const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=9bbd27db37474d2c9e8121525231905&q=${nombreLugar}`);
      const data = await response.json();
      const condition = data.current.condition.text;
      const emoji = getEmojiFromCondition(condition);
      setWeatherEmoji(emoji);
    } catch (error) {
      console.error('Error fetching weather data:', error);
      // Manejar el error aquí y mostrar un mensaje adecuado al usuario
    }
  };

  const getEmojiFromCondition = (condition) => {
    const lowercaseCondition = condition.toLowerCase();

    if (lowercaseCondition.includes('sunny') || lowercaseCondition.includes('clear')) {
      return '☀️';
    } else if (lowercaseCondition.includes('cloudy') || lowercaseCondition.includes('partial cloudy')) {
      return '☁️';
    } else if (lowercaseCondition.includes('rain')) {
      return '🌧️';
    } else if (lowercaseCondition.includes('snow')) {
      return '❄️';
    } else if (lowercaseCondition.includes('fog')) {
      return '🌫️';
    } else {
      return '❓';
    }
  };

  if (datosFiltrados.length > 0) {
    const lugar = datosFiltrados[0];

    return (
      <div className={styles.cityContainer}>
        <div className={styles.cityContainerlat}>
          <div>
            <h2>{weatherEmoji}</h2>
            <h3>{lugar.nombre}</h3>
            <p>{lugar.detalles}</p>
            <br />
          </div>
          <div className={styles.right}>
            <div>
              <p>País: {lugar.pais}</p>
              <p>Población: {lugar.poblacion}</p>
              <p>Idioma: {lugar.idioma}</p>
              <p>Moneda: {lugar.moneda}</p>
            </div>
          </div>
        </div>
        <br />
        <div>
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
  } else {
    return <div>Loading...</div>; // Otra opción es mostrar un mensaje de "cargando" mientras se realiza la solicitud
  }
};

export default TripPage;
