'use client'


import React, { useState, useEffect } from 'react';
import { app } from '../firebases/firebaseApp';
import { getDatabase, ref, update, onValue } from 'firebase/database';
import styles from './AddFormTripData.module.css';

const defaultImages = [
  { url: '/images/bar.jpg', name: 'Restaurante o Bar' },
  { url: '/images/museo.jpg', name: 'Arte y Entretenimiento' },
  { url: '/images/rios.jpg', name: 'Río o playa' },
  { url: '/images/mercadillo.jpg', name: 'Mercadillo o Tienda' }
];

function AddFormTripData({onCloseForm}) {

  const [data, setData] = useState({
    atracciones: Array(4).fill().map(() => ({
      descripcion: '',
      img: '',
      nombre: '',
    })),
    detalles: '',
    id:"",
    idioma: '',
    moneda: '',
    nombre: '',
    pais: '',
    poblacion: '',
  });


  const [count, setCount] = useState(0);
  const [errors, setErrors] = useState({
    imgURL: Array(4).fill(false),
  });
  const [selectedImages, setSelectedImages] = useState(Array(4).fill(""));

  const handleDefaultImageSelect = (attractionIndex, imageName) => {
    const selectedImage = defaultImages.find((image) => image.name === imageName);

    setData((prevData) => {
      const newAttractions = [...prevData.atracciones];
      newAttractions[attractionIndex] = {
        ...newAttractions[attractionIndex],
        img: null,
        imgURL: selectedImage.url,
      };
      return {
        ...prevData,
        atracciones: newAttractions,
      };
    });

    setSelectedImages((prevSelectedImages) => {
      const newSelectedImages = [...prevSelectedImages];
      newSelectedImages[attractionIndex] = imageName;
      return newSelectedImages;
    });

    setErrors((prevErrors) => {
      const newErrors = [...prevErrors.imgURL];
      newErrors[attractionIndex] = false;
      return {
        ...prevErrors,
        imgURL: newErrors,
      };
    });
  };

  const [lastID,setLastID] = useState('')

  useEffect(() => {
    const database = getDatabase(app);
    const nodeRef = ref(database, 'dataResultsPrueba');

    const unsubscribe = onValue(nodeRef, (snapshot) => {
      const data = snapshot.val();
      let lastPositionId = data[data.length - 1].id;
      setLastID(lastPositionId)
      console.log(lastPositionId)
    });

    return () => {
      // Limpia la suscripción cuando el componente se desmonta
      unsubscribe();
    };
  }, []);

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

    const hasEmptyImageURL = data.atracciones.some((attraction) => !attraction.imgURL);

    if (hasEmptyImageURL) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        imgURL: data.atracciones.map((attraction) => !attraction.imgURL),
      }));
      return;
    }

    setCount((prevCount) => prevCount);
    const newCount = count + 1;

    const newData = {
      [newCount]: {
        atracciones: Array(4).fill().map((attraction, index) => ({
          descripcion: data.atracciones[index].descripcion,
          img: data.atracciones[index].imgURL,
          nombre: data.atracciones[index].nombre,
        })),
        detalles: data.detalles,
        id:lastID,
        idioma: data.idioma,
        moneda: data.moneda,
        nombre: capitalizeFirstWord(lastID),
        pais: data.pais,
        poblacion: data.poblacion,
      }
    };
    


    const database = getDatabase(app);
    const nodeRef = ref(database, 'dataInfoPostsPrueba');

    update(nodeRef, newData)
      .then(() => {
        console.log('¡Datos escritos exitosamente en Firebase!');
        onCloseForm();
      })
      .catch((error) => {
        console.error('Error al escribir en Firebase:', error);
      });
  };
  const capitalizeFirstWord = (value) => {
    if (typeof value !== 'string' || value.length === 0) {
      return value;
    }

    const firstChar = value.charAt(0).toUpperCase();
    const restOfString = value.slice(1).toLowerCase();
    return firstChar + restOfString;
  };
  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit}>
        <br />
        <div>
          <label htmlFor="detalles">Detalles que deberíamos saber sobre: <strong>{capitalizeFirstWord(lastID)}</strong></label>
          <input
            type="text"
            id="detalles"
            name="detalles"
            value={data.detalles}
            onChange={handleInputChange}
            required
            className={styles.input}
          />
        </div>
        <br />
        <div>
          <label htmlFor="idioma">Idioma</label>
          <input
            type="text"
            id="idioma"
            name="idioma"
            value={capitalizeFirstWord(data.idioma)}
            onChange={handleInputChange}
            required
            className={styles.input}
          />
        </div>
        <br />
        <div>
          <label htmlFor="moneda">Moneda</label>
          <input
            type="text"
            id="moneda"
            name="moneda"
            value={capitalizeFirstWord(data.moneda)}
            onChange={handleInputChange}
            required
            className={styles.input}
          />
        </div>
        <br />
        <div>
          <label htmlFor="pais">País</label>
          <input
            type="text"
            id="pais"
            name="pais"
            value={capitalizeFirstWord(data.pais)}
            onChange={handleInputChange}
            required
            className={styles.input}
          />
        </div>
        <br />
        <div>
          <label htmlFor="poblacion">Población</label>
          <input
            type="number"
            id="poblacion"
            name="poblacion"
            min={0}
            value={data.poblacion}
            onChange={handleInputChange}
            required
            className={styles.input}
          />
        </div>
        <br />
        <div>
          <h2>Puntos de interés</h2>
          <br />
          {data.atracciones.map((attraction, index) => (
            <div key={index}>
              <label htmlFor={`atraccion${index}`}>Punto nº {index + 1}: <span style={{color:'green'}}>{attraction.nombre}</span></label>
              <input
                type="text"
                id={`atraccion${index}`}
                name={`atraccion${index}`}
                value={capitalizeFirstWord(attraction.nombre)}
                onChange={(e) =>
                  handleAttractionInputChange(index, 'nombre', e.target.value)
                }
                required
                className={styles.input}
              />
              <br />
              <label htmlFor={`descripcion${index}`}>Descripción:</label>
              <textarea
                id={`descripcion${index}`}
                name={`descripcion${index}`}
                value={attraction.descripcion}
                onChange={(e) =>
                  handleAttractionInputChange(index, 'descripcion', e.target.value)
                }
                required
                className={styles.textarea}
              />
              <br />
              <label htmlFor={`imagenDefault${index}`}>Tipo de:</label>
              <select
                id={`imagenDefault${index}`}
                name={`imagenDefault${index}`}
                value={selectedImages[index]}
                onChange={(e) => handleDefaultImageSelect(index, e.target.value)}
                required
                className={styles.select}
              >
                <option value="" disabled>
                  Seleccionar imagen
                </option>
                {defaultImages.map((image, imageIndex) => (
                  <option
                    key={imageIndex}
                    value={image.name}
                    selected={selectedImages[index] === image.name}
                  >
                    {image.name}
                  </option>
                ))}
              </select>

              {selectedImages[index] && (
                <img src={defaultImages.find((image) => image.name === selectedImages[index]).url} alt={`Imagen ${index}`} className={styles.imgBig} />
              )}
              <br />
              {errors.imgURL[index] && (
                <span className={styles.error}>Por favor, selecciona una imagen</span>
              )}
              <br />
            </div>
          ))}
        </div>
        <br />
        <button type="submit" className={styles.button}>Agregar</button>
      </form>
    </div>
  );


}

export default AddFormTripData;
