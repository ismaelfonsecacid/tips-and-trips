'use client'
import { app } from '../firebases/firebaseApp';
import { getDatabase,ref,get,set } from 'firebase/database';

// Obtén una referencia a la base de datos
const database = getDatabase(app);

// Ahora puedes utilizar la referencia a la base de datos para realizar operaciones
// Por ejemplo, puedes obtener una referencia a un nodo y leer o escribir datos en él
const nodeRef = ref(database, 'prueba');

// Ejemplo de lectura de datos
get(nodeRef)
  .then((snapshot) => {
    if (snapshot.exists()) {
      const data = snapshot.val();
      console.log('Datos obtenidos:', data);
    } else {
      console.log('No se encontraron datos en el nodo');
    }
  })
  .catch((error) => {
    console.error('Error al obtener datos:', error);
  });

// Ejemplo de escritura de datos
set(nodeRef, {
  campo1: 'valor1',
  campo2: 'valor2',
})
  .then(() => {
    console.log('¡Datos escritos exitosamente en Firebase!');
  })
  .catch((error) => {
    console.error('Error al escribir en Firebase:', error);
  });
