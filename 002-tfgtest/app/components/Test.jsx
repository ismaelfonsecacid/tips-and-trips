'use client'


import React, { useState, useEffect } from 'react';
import { app } from '../firebases/firebaseApp';
import { getDatabase, ref, update, onValue } from 'firebase/database';

function FirebaseComponent() {
  const [data, setData] = useState({
    body: '',
    ciudad: '',
    continente: '',
    fecha: '',
    id: '',
    imgFile: null, // Almacenará el archivo de imagen seleccionado
    imgURL: '', // Almacenará la URL de la imagen cargada
    resume: ''
  });
  const [count, setCount] = useState(0);

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

  const handleImageUpload = (acceptedFiles) => {
    const image = acceptedFiles[0];
    const imageURL = URL.createObjectURL(image);

    setData((prevData) => ({
      ...prevData,
      imgFile: image,
      imgURL: imageURL
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setCount((prevCount) => prevCount + 1);
    const newCount = count + 1;

    const newData = {
      [newCount]: {
        body: data.body,
        ciudad: data.ciudad,
        continente: data.continente,
        fecha: data.fecha,
        id: data.id,
        img: data.imgURL, // Utiliza la URL de la imagen cargada
        resume: data.resume,
      }
    };

    const database = getDatabase(app);
    const nodeRef = ref(database, 'dataResultsPrueba');

    update(nodeRef, newData)
      .then(() => {
        console.log('¡Datos escritos exitosamente en Firebase!');
        // Borrar los valores de los inputs y la imagen seleccionada
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
      })
      .catch((error) => {
        console.error('Error al escribir en Firebase:', error);
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Body:
          <input type="text" name="body" value={data.body} onChange={handleInputChange} />
        </label>
        <br />
        <label>
          Ciudad:
          <input type="text" name="ciudad" value={data.ciudad} onChange={handleInputChange} />
        </label>
        <br />
        <label>
          Continente:
          <select name="continente" value={data.continente} onChange={handleInputChange}>
            <option value="">Seleccionar continente</option>
            <option value="africa">África</option>
            <option value="america">América</option>
            <option value="asia">Asia</option>
            <option value="europa">Europa</option>
            <option value="oceania">Oceanía</option>
          </select>
        </label>
        <br />
        <label>
          Fecha:
          <input type="text" name="fecha" value={data.fecha} onChange={handleInputChange} />
        </label>
        <br />
        <label>
          ID:
          <input type="text" name="id" value={data.id} onChange={handleInputChange} />
        </label>
        <br />
        <label>
          Imagen:
          <input type="file" accept="image/*" onChange={(e) => handleImageUpload(e.target.files)} />
          {data.imgURL && <img src={data.imgURL} alt="Imagen seleccionada" />}
        </label>
        <br />
        <label>
          Resumen:
          <input type="text" name="resume" value={data.resume} onChange={handleInputChange} />
        </label>
        <br />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default FirebaseComponent;
