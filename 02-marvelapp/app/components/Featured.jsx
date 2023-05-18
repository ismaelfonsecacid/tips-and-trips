import axios from 'axios';

export function Featured () {
    const fetchCharacters = async () => {
        try {
          const response = await axios.get(
            `https://gateway.marvel.com/v1/public/characters?ts=1&apikey=d856e3957ff64c0556b85454f1bd82af&hash=95671e97f084235e5d280687810b215b`
          );
            
          let data = response.data.data.results;
          console.log(data);
        } catch (error) {
        }
      };


    return (
        <></>
    )
}