export const fetchData = (url) => {


  return fetch(`https://trips-and-trips-default-rtdb.europe-west1.firebasedatabase.app/${url}.json`)
    .then(res => res.json())

};

