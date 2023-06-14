'use client'

import React, { useState, useEffect } from 'react';
import { app } from '../firebases/firebaseApp';
import { getDatabase, ref, update, onValue } from 'firebase/database';
import InputField from './InputField';
import styles from './addFormTrip.module.css';

function FirebaseComponent() {
  const [data, setData] = useState({
    atracciones: Array(4).fill().map(() => ({
      descripcion: '',
      img: null,
      nombre: '',
    })),
    detalles: '',
    id: '',
    idioma: '',
    moneda: '',
    nombre: '',
    pais: '',
    poblacion: '',
  });
  const [count, setCount] = useState(0);

  useEffect(() => {
    const database = getDatabase(app);
    const nodeRef = ref(database, 'dataInfoPostsPrueba');

    onValue(nodeRef, (snapshot) => {
      const dataSize = snapshot.val() ? Object.keys(snapshot.val()).length : 0;
      setCount(dataSize - 1);
    });
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleImageUpload = (acceptedFiles, index) => {
    const image = acceptedFiles[0];
    const imageURL = URL.createObjectURL(image);

    setData((prevData) => {
      const newAttractions = [...prevData.atracciones];
      newAttractions[index] = {
        ...newAttractions[index],
        img: image,
        imgURL: imageURL,
      };
      return {
        ...prevData,
        atracciones: newAttractions,
      };
    });
  };

  const handleAttractionInputChange = (index, field, value) => {
    setData((prevData) => {
      const newAttractions = [...prevData.atracciones];
      newAttractions[index] = {
        ...newAttractions[index],
        [field]: value,
      };
      return {
        ...prevData,
        atracciones: newAttractions,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setCount((prevCount) => prevCount + 1);
    const newCount = count + 1;

    const newData = {
      [newCount]: {
        atracciones: data.atracciones.reduce((acc, attraction, index) => {
          acc[index] = {
            descripcion: attraction.descripcion,
            img: attraction.imgURL,
            nombre: attraction.nombre,
          };
          return acc;
        }, {}),
        detalles: data.detalles,
        id: data.id,
        idioma: data.idioma,
        moneda: data.moneda.toLowerCase(),
        nombre: data.nombre,
        pais: data.pais,
        poblacion: data.poblacion,
      },
    };

    const database = getDatabase(app);
    const nodeRef = ref(database, 'dataInfoPostsPrueba');

    update(nodeRef, newData)
      .then(() => {
        console.log('¡Datos escritos exitosamente en Firebase!');
        // Borrar los valores de los inputs y las imágenes seleccionadas
        setData({
          atracciones: Array(4).fill().map(() => ({
            descripcion: '',
            img: null,
            nombre: '',
          })),
          detalles: '',
          id: '',
          idioma: '',
          moneda: '',
          nombre: '',
          pais: '',
          poblacion: '',
        });
      })
      .catch((error) => {
        console.error('Error al escribir en Firebase:', error);
      });
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit}>
        <InputField
          label="Detalles"
          type="text"
          name="detalles"
          value={data.detalles}
          onChange={handleInputChange}
        />
        <br />
        <InputField
          label="ID"
          type="text"
          name="id"
          value={data.id}
          onChange={handleInputChange}
        />
        <br />
        <InputField
          label="Idioma"
          type="text"
          name="idioma"
          value={data.idioma}
          onChange={handleInputChange}
        />
        <br />
        <InputField
          label="Moneda"
          type="text"
          name="moneda"
          value={data.moneda}
          onChange={handleInputChange}
        />
        <br />
        <InputField
          label="Nombre"
          type="text"
          name="nombre"
          value={data.nombre}
          onChange={handleInputChange}
        />
        <br />
        <InputField
          label="País"
          type="text"
          name="pais"
          value={data.pais}
          onChange={handleInputChange}
        />
        <br />
        <InputField
          label="Población"
          type="text"
          name="poblacion"
          value={data.poblacion}
          onChange={handleInputChange}
        />
        <br />
        {data.atracciones.map((attraction, index) => (
          <div key={index}>
            <InputField
              label={`Nombre de la atracción ${index + 1}`}
              type="text"
              name={`nombre${index}`}
              value={attraction.nombre}
              onChange={(e) =>
                handleAttractionInputChange(index, 'nombre', e.target.value)
              }
            />
            <br />
            <InputField
              label={`Descripción de la atracción ${index + 1}`}
              type="text"
              name={`descripcion${index}`}
              value={attraction.descripcion}
              onChange={(e) =>
                handleAttractionInputChange(index, 'descripcion', e.target.value)
              }
            />
            <br />
            <input
              type="file"
              accept="image/*"
              onChange={(e) => handleImageUpload(e.target.files, index)}
            />
            {attraction.imgURL && <img src={attraction.imgURL} alt="" />}
          </div>
        ))}
        <button type="submit">Agregar</button>
      </form>
    </div>
  );
}

export default FirebaseComponent;
