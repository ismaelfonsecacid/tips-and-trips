'use client'
import React, { useState } from 'react';
import { app } from '../firebases/firebaseApp';
import { getDatabase, ref, get, set } from 'firebase/database';

function FirebaseComponent() {
  const [campo1, setCampo1] = useState('');
  const [campo2, setCampo2] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'campo1') {
      setCampo1(value);
    } else if (name === 'campo2') {
      setCampo2(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Obtén una referencia a la base de datos
    const database = getDatabase(app);

    // Referencia al nodo 'prueba'
    const nodeRef = ref(database, 'prueba');

    // Ejemplo de escritura de datos
    set(nodeRef, {
      campo1: campo1,
      campo2: campo2,
    })
      .then(() => {
        console.log('¡Datos escritos exitosamente en Firebase!');
      })
      .catch((error) => {
        console.error('Error al escribir en Firebase:', error);
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Campo 1:
          <input type="text" name="campo1" value={campo1} onChange={handleInputChange} />
        </label>
        <br />
        <label>
          Campo 2:
          <input type="text" name="campo2" value={campo2} onChange={handleInputChange} />
        </label>
        <br />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default FirebaseComponent;
