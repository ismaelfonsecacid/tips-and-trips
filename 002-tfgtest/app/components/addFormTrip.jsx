'use client'

import React, { useState, useEffect } from 'react';
import { app } from '../firebases/firebaseApp';
import { getDatabase, ref, update, onValue } from 'firebase/database';
import InputField from './InputField';
import styles from './addFormTrip.module.css';
import AddFormTripData from './addFormTripData';

const defaultImages = [
  '/images/berlin.jpg',
  '/images/estambul.jpg',
  '/images/rio.jpg',
  '/images/sidney.jpg'
];

function FirebaseComponent() {
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
  const [count, setCount] = useState(0);
  const [showAddFormTripData, setShowAddFormTripData] = useState(false);
  const [selectedDefaultImage, setSelectedDefaultImage] = useState('');
  const [inputErrors, setInputErrors] = useState({
    body: false,
    ciudad: false,
    continente: false,
    fecha: false,
    imgURL: false,
    resume: false
  });

  useEffect(() => {
    const database = getDatabase(app);
    const nodeRef = ref(database, 'dataResultsPrueba');

    onValue(nodeRef, (snapshot) => {
      const dataSize = snapshot.val() ? Object.keys(snapshot.val()).length : 0;
      setCount(dataSize - 1);
    });
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleDefaultImageSelect = (imageName) => {
    setSelectedDefaultImage(imageName);
    setData((prevData) => ({
      ...prevData,
      imgURL: imageName
    }));
  };

  const validateInputs = () => {
    const errors = {
      body: !data.body,
      ciudad: !data.ciudad,
      continente: !data.continente,
      fecha: !data.fecha,
      imgURL: !data.imgURL,
      resume: !data.resume
    };

    setInputErrors(errors);

    return Object.values(errors).every((error) => !error);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateInputs()) {
      alert('Faltan campos obligatorios');
      return;
    }

    setCount((prevCount) => prevCount + 1);
    const newCount = count + 1;

    const newData = {
      [newCount]: {
        body: data.body,
        ciudad: data.ciudad,
        continente: data.continente,
        fecha: data.fecha,
        id: data.ciudad.toLowerCase(),
        img: data.imgURL,
        resume: data.resume
      }
    };

    const database = getDatabase(app);
    const nodeRef = ref(database, 'dataResultsPrueba');

    update(nodeRef, newData)
      .then(() => {
        console.log('¡Datos escritos exitosamente en Firebase!');
        setData({
          body: '',
          ciudad: '',
          continente: '',
          fecha: '',
          id: '',
          imgFile: null,
          imgURL: '',
          resume: ''
        });
        setShowAddFormTripData(true);
      })
      .catch((error) => {
        console.error('Error al escribir en Firebase:', error);
      });
  };

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <InputField
          label="Body"
          type="text"
          name="body"
          value={data.body}
          onChange={handleInputChange}
          className={styles.input}
          required
          error={inputErrors.body}
          errorMessage="Este campo es obligatorio"
        />
        <br />
        <InputField
          label="Ciudad"
          type="text"
          name="ciudad"
          value={data.ciudad}
          onChange={handleInputChange}
          className={styles.input}
          required
          error={inputErrors.ciudad}
          errorMessage="Este campo es obligatorio"
        />
        <br />
        <label className={styles.label}>
          Continente:
          <select
            name="continente"
            value={data.continente}
            onChange={handleInputChange}
            className={styles.select}
            required
            error={inputErrors.continente}
          >
            <option value="">Seleccionar continente</option>
            <option value="africa">África</option>
            <option value="america">América</option>
            <option value="asia">Asia</option>
            <option value="europa">Europa</option>
            <option value="oceania">Oceanía</option>
          </select>
        </label>
        <br />
        <InputField
          label="Fecha"
          type="date"
          name="fecha"
          value={data.fecha}
          onChange={handleInputChange}
          className={styles.input}
          required
          error={inputErrors.fecha}
          errorMessage="Este campo es obligatorio"
        />
        <br />
        <div className={styles.defaultImagesContainer}>
            <span>Elige una imagen por defecto: </span>
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
        <br />
        <InputField
          label="Resumen"
          type="text"
          name="resume"
          value={data.resume}
          onChange={handleInputChange}
          className={styles.input}
          required
          error={inputErrors.resume}
          errorMessage="Este campo es obligatorio"
        />
        <br />
        <button type="submit" className={styles.button}>
          Enviar
        </button>
      </form>
      {showAddFormTripData && <AddFormTripData />}
    </div>
  );
}

export default FirebaseComponent;
