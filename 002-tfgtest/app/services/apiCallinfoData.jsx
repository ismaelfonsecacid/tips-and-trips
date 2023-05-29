let jsonData = [];

const fetchData = async () => {
  try {
    const response = await fetch('https://trips-and-trips-default-rtdb.europe-west1.firebasedatabase.app/infoPost.json');
    jsonData = await response.json(); // Puedes hacer algo con los datos cargados aquí
  } catch (error) {
    console.log('Error fetching data:', error);
  }
};

fetchData();



export default jsonData;
