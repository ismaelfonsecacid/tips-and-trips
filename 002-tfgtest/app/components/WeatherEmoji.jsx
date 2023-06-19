import React, { useEffect, useState } from 'react';

const WeatherEmoji = ({ nombreLugar }) => {
  const [weatherEmoji, setWeatherEmoji] = useState('❓');

  useEffect(() => {
    fetchWeatherEmoji(nombreLugar);
  }, [nombreLugar]);
  
  const fetchWeatherEmoji = async (nombreLugar) => {
    try {
      const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=9bbd27db37474d2c9e8121525231905&q=${nombreLugar}`);
      const data = await response.json();
      
      if (data.error) {
        console.error('Error fetching weather data:', data.error.message);
        // Manejar el error aquí y mostrar un mensaje adecuado al usuario
      } else {
        const condition = data.current.condition.text;
        const emoji = getEmojiFromCondition(condition);
        setWeatherEmoji(emoji);
      }
    } catch (error) {
      console.error('Error fetching weather data:', error);
      // Manejar el error aquí y mostrar un mensaje adecuado al usuario
    }
  };
  
  const getEmojiFromCondition = (condition) => {
    const lowercaseCondition = condition.toLowerCase();
    if (lowercaseCondition.includes('sunny') || lowercaseCondition.includes('clear')) {
      return '☀️';
    } else if (lowercaseCondition.includes('cloudy') || lowercaseCondition.includes('partly cloudy')) {
      return '☁️';
    } else if (lowercaseCondition.includes('rain')) {
      return '🌧️';
    } else if (lowercaseCondition.includes('snow')) {
      return '❄️';
    } else if (lowercaseCondition.includes('fog') || lowercaseCondition.includes('mist') || lowercaseCondition.includes('overcast')) {
      return '🌫️';
    } else {
      return '❓';
    }
  };

  return <p>Tiempo: <span style={{ fontSize: '25px' }}>{weatherEmoji}</span></p>;
};

export default WeatherEmoji;
