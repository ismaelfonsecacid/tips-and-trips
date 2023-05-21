
'use client'
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from './Page.module.css';
import jsonData from '../../../json/infoPosts.json'

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
    // Lógica para asignar un emoji basado en las condiciones climáticas
    // Puedes personalizar esta función según tus necesidades
    // Aquí hay un ejemplo básico
    if (condition.includes('Sunny') || condition.includes('Clear')) {
      return '☀️';
    } else if (condition.includes('Cloudy')) {
      return '☁️';
    } else if (condition.includes('Rain')) {
      return '🌧️';
    } else if (condition.includes('Snow')) {
      return '❄️';
     } else if (condition.includes('Fog')) {
      return '🌫️';
    } else {
      return '❓';
    }
  };

  if (datosFiltrados.length > 0) {
    const lugar = datosFiltrados[0];

    return (
      <div>
        <div key={lugar.id} className={styles.cityContainer}>
          <h2>{weatherEmoji}</h2>
          <h3>{lugar.nombre}</h3>
          <p>País: {lugar.pais}</p>
          <p>Población: {lugar.poblacion}</p>
          <p>Idioma: {lugar.idioma}</p>
          <p>Moneda: {lugar.moneda}</p>

          <h3>Atracciones</h3>
          {lugar.atracciones.map(atraccion => (
            <div key={atraccion.nombre} className={styles.attractionContainer}>
              <h4>{atraccion.nombre}</h4>
              <img src={atraccion.img} alt={atraccion.nombre} />
              <p>{atraccion.descripcion}</p>
            </div>
          ))}

          <h3>Comida típica</h3>
          <ul className={styles.foodList}>
            {lugar.comida_tipica.map(comida => (
              <li key={comida}>{comida}</li>
            ))}
          </ul>
        </div>
      </div>
    );
  } else {
    return null; // Otra opción es mostrar un mensaje de "cargando" mientras se realiza la solicitud
  }
};

export default TripPage;
