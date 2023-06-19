export const fetchData = async (url) => {
    await new Promise(resolve => setTimeout(resolve,1));

  return fetch(`https://trips-and-trips-default-rtdb.europe-west1.firebasedatabase.app/${url}.json`)
    .then(res => res.json())

};

