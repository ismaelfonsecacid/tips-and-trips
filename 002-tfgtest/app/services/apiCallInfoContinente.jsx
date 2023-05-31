
let jsonData = []; // Variable para almacenar los datos de la API sustituyendo useState para evitar el renderizado desde el cliente

fetch('https://trips-and-trips-default-rtdb.europe-west1.firebasedatabase.app/continente.json')
  .then((response) => response.json())
  .then((data) => {
    jsonData = data;
  })
  .catch((error) => {
    console.log('Error fetching data:', error);
  });


export  {jsonData}