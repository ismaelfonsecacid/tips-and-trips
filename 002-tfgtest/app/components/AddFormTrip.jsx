'use client'

import React, { useState, useEffect } from 'react';
import { app } from '../firebases/firebaseApp';
import { getDatabase, ref, update, onValue } from 'firebase/database';

import styles from './AddFormTrip.module.css';
import AddFormTripData from './AddFormTripData';

const defaultImages = [
  '/images/def1.jpg',
  '/images/def2.jpg',
  '/images/def3.jpg',
  '/images/def4.jpg'
];

export default function FirebaseComponent({ onSubmit }) {
  const [data, setData] = useState({
    body: '',
    ciudad: '',
    continente: '',
    fecha: '',
    id: '',
    imgFile: null,
    imgURL: '',
    resume: ''
  });


  const [error, setError] = useState(false);

  const [count, setCount] = useState(0);
  const [showAddFormTripData, setShowAddFormTripData] = useState(false);
  const [selectedDefaultImage, setSelectedDefaultImage] = useState('');
  const [disabled, setDisabled] = useState(false);
  const [cityIdExists, setCityIdExists] = useState(false);
  const capitalizeFirstWord = (value) => {
    if (typeof value !== 'string' || value.length === 0) {
      return value;
    }

    const firstChar = value.charAt(0).toUpperCase();
    const restOfString = value.slice(1).toLowerCase();
    return firstChar + restOfString;
  };

  useEffect(() => {
    const database = getDatabase(app);
    const nodeRef = ref(database, 'dataResultsPrueba');

    onValue(nodeRef, (snapshot) => {
      const dataSize = snapshot.val() ? Object.keys(snapshot.val()).length : 0;
      setCount(dataSize - 1);
      setCityIdExists(false);
    });
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value
    }));

    const inputValue = e.target.value;
    const pattern = /^[A-Za-záéíóúÁÉÍÓÚñÑüÜ\s]+$/;

    if (!pattern.test(inputValue) || inputValue.trim() === '') {
      setError(true); // Activate the error state
    } else {
      setError(false); // Deactivate the error state Update the value in the state
    }
  };

  const handleDefaultImageSelect = (imageName) => {
    setSelectedDefaultImage(imageName);
    setData((prevData) => ({
      ...prevData,
      imgURL: imageName
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (selectedDefaultImage === '') {
      setId('');
      return;
    }

    const cityId = data.ciudad.replace(/\s+/g, '').toLowerCase();
    setCount((prevCount) => prevCount + 1);
    const newCount = count + 1;

    const newData = {
      [newCount]: {
        ciudad: data.ciudad,
        continente: data.continente,
        fecha: data.fecha,
        id: cityId.toLowerCase(),
        img: data.imgURL,
        resume: data.resume
      }
    };

    const database = getDatabase(app);
    const nodeRef = ref(database, 'dataResultsPrueba');

    update(nodeRef, newData)
      .then(() => {
        console.log('¡Datos escritos exitosamente en Firebase!');
        setShowAddFormTripData(true);
        setDisabled(true);
      })
      .catch((error) => {
        console.error('Error al escribir en Firebase:', error);
      });
    onSubmit();
  };

  useEffect(() => {
    const database = getDatabase(app);
    const nodeRef = ref(database, 'dataResultsPrueba');

    onValue(nodeRef, (snapshot) => {
      const cityId = data.ciudad.toLowerCase();
      const cityIdExists = Object.values(snapshot.val() || {}).some((item) => item.id === cityId);
      setCityIdExists(cityIdExists);
    });
  }, [data.ciudad]);

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div>
          <label htmlFor="ciudad" className={styles.label}>
            Ciudad:
            {error && data.ciudad.trim() === '' && (
            <p className={styles.errorText}>El campo no puede estar vacío</p>
          )}
          {error && !data.ciudad.match(/^[A-Za-z]+$/) && (
            <p className={styles.errorText}>Solo se permiten letras en el campo</p>
          )}
          {cityIdExists && <p className={styles.errorText}>El viaje a la ciudad ya existe o se acaba de agregar</p>}
          </label>
          <input
            type="text"
            id="ciudad"
            name="ciudad"
            pattern="^[A-Za-záéíóúÁÉÍÓÚñÑüÜ\s]+$"
            value={capitalizeFirstWord(data.ciudad)}
            onChange={handleInputChange}
            required
            disabled={disabled}
            className={`${styles.input} ${error ? styles.errorInput : ''}`}
          />
        
        </div>

        <div>
          <label htmlFor="continente" className={styles.label}>
            Continente:
          </label>
          <select
            id="continente"
            name="continente"
            value={data.continente}
            onChange={handleInputChange}
            required
            disabled={disabled}
            className={styles.select}
          >
            <option value="">Seleccionar continente</option>
            <option value="africa">África</option>
            <option value="america">América</option>
            <option value="asia">Asia</option>
            <option value="europa">Europa</option>
            <option value="oceania">Oceanía</option>
          </select>
        </div>

        <div>
          <label htmlFor="fecha" className={styles.label}>
            Fecha:
          </label>
          <input
            type="date"
            id="fecha"
            name="fecha"
            value={data.fecha}
            onChange={handleInputChange}
            required
            disabled={disabled}
            className={styles.input}
            max={new Date().toISOString().split('T')[0]}
          />
        </div>

        <div>
          <span>Elige una imagen por defecto: </span>
          <div className={styles.defaultImagesContainer}>
            {defaultImages.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Default Image ${index + 1}`}
                className={selectedDefaultImage === image ? styles.selectedImage : styles.defaultImage}
                onClick={() => handleDefaultImageSelect(image)}
              />
            ))}
          </div>
          <div className={styles.divImg}>
            {selectedDefaultImage && (
              <img src={selectedDefaultImage} alt="Imagen seleccionada" className={styles.imgBig} />
            )}
          </div>
        </div>

        <div>
          <label htmlFor="resume" className={styles.label}>
            Resumen:
          </label>
          <div className={styles.inputContainer}>
            <input
              type="text"
              id="resume"
              name="resume"
              value={capitalizeFirstWord(data.resume)}
              onChange={handleInputChange}
              required
              disabled={disabled}
              maxLength={60}
              className={styles.input}
            />
            <span className={styles.characterCount}>{`${data.resume.length}/${60}`}</span>
          </div>
        </div>

        <button
          type="submit"
          className={styles.button}
          disabled={
            cityIdExists || disabled
          }
        >
          Siguiente
        </button>
      </form>
      {showAddFormTripData && <AddFormTripData />}
    </div>
  );
}
