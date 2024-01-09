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
const languages = [
  "Español",
  "Inglés",
  "Francés",
  "Alemán",
  "Italiano",
  "Portugués",
  "Chino mandarín",
  "Japonés",
  "Coreano",
  "Ruso",
  "Árabe",
  "Hindi",
  "Bengalí",
  "Urdu",
  "Swahili",
  "Gallego"
];

function AddFormTripData({ onCloseForm }) {

  const [data, setData] = useState({
    atracciones: Array(4).fill().map(() => ({
      descripcion: '',
      img: '',
      nombre: '',
    })),
    detalles: '',
    id: "",
    idioma: [],
    moneda: '',
    nombre: '',
    pais: '',
    poblacion: '',
  });

  const [selectedLanguages, setSelectedLanguages] = useState([]);

  const [count, setCount] = useState(0);

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

  };

  const [lastID, setLastID] = useState('')

  useEffect(() => {
    const database = getDatabase(app);
    const nodeRef = ref(database, 'dataResultsPrueba');

    const unsubscribe = onValue(nodeRef, (snapshot) => {
      const data = snapshot.val();
      let lastPositionId = data[data.length - 1].id;
      setLastID(lastPositionId)
    });

    return () => {
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
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      if (checked) {
        setSelectedLanguages((prevSelectedLanguages) => [...prevSelectedLanguages, value]);
      } else {
        setSelectedLanguages((prevSelectedLanguages) =>
          prevSelectedLanguages.filter((language) => language !== value)
        );
      }
    } else {
      setData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
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
    if (selectedLanguages.length === 0) {
      // Mostrar mensaje de error o realizar alguna acción
      console.log('Selecciona al menos un idioma');
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
        detalles: capitalizeFirstWord(data.detalles),
        id: lastID,
        idioma: selectedLanguages.join(', '),
        moneda: capitalizeFirstWord(data.moneda),
        nombre: capitalizeFirstWord(lastID),
        pais: capitalizeFirstWord(data.pais),
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
    <div className={styles.container} id='addFormData'>
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
          <label>Idiomas:</label>
          <div className={styles.languageList}>
            {languages.map((language) => (
              <label key={language} className={styles.languageLabel}>
                <input
                  type="checkbox"
                  name="idioma"
                  value={language}
                  checked={selectedLanguages.includes(language)}
                  onChange={handleInputChange}
                  className={styles.checkbox}
                />
                {language}
              </label>
            ))}
          </div>
          <div className={styles.infoIdioma}>
            <strong>Idiomas seleccionados:</strong>
            {selectedLanguages.map((language) => (
              <span key={language}>{language}, </span>
            ))}
          </div>
        </div>
        <br />
        <div>
          <label htmlFor="moneda">
            Moneda:
          </label>
          <select
            id="moneda"
            name="moneda"
            value={data.moneda}
            onChange={handleInputChange}
            required
            className={styles.select}
          >
            <option value="" disabled>Seleccionar moneda</option>
            <option value="Dólar estadounidense (USD)">Dólar estadounidense (USD)</option>
            <option value="Euro (EUR)">Euro (EUR)</option>
            <option value="Libra esterlina (GBP)">Libra esterlina (GBP)</option>
            <option value="Yen japonés (JPY)">Yen japonés (JPY)</option>
            <option value="Dólar australiano (AUD)">Dólar australiano (AUD)</option>
            <option value="Dólar canadiense (CAD)">Dólar canadiense (CAD)</option>
            <option value="Franco suizo (CHF)">Franco suizo (CHF)</option>
            <option value="Yuan chino (CNY)">Yuan chino (CNY)</option>
            <option value="Rupia india (INR)">Rupia india (INR)</option>
            <option value="Real brasileño (BRL)">Real brasileño (BRL)</option>
            <option value="Peso mexicano (MXN)">Peso mexicano (MXN)</option>
            <option value="Rand sudafricano (ZAR)">Rand sudafricano (ZAR)</option>
            <option value="Rublo ruso (RUB)">Rublo ruso (RUB)</option>
            <option value="Lira turca (TRY)">Lira turca (TRY)</option>

          </select>
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
          <label htmlFor="poblacion">Número de habitantes</label>
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
              <label htmlFor={`atraccion${index}`}>Punto nº {index + 1}: <span style={{ color: 'green' }}>{attraction.nombre}</span></label>
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
