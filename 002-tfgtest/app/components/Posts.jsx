// import jsonData from '../json/posts.json'



import styles from './Posts.module.css'
import Link from 'next/link';
import Image from 'next/image';

import { fetchData } from '../services/apiFetchData';

export default async function Posts() {
const URL = 'dataResultsPrueba';
const jsonData = await fetchData(URL);

const randomNumber = Math.floor(Math.random()*11)


    return (
        <>
            <h1 style={{textAlign:'center', marginTop:'30px'}}>Nuestros viajes</h1>
            <div className={styles.grid_container}>
                {jsonData.splice({randomNumber},3).map((item) => (
                    <Link className={styles.link} href={`/trips/${item.continente}/${item.id}`} key={item.id}>
                        <div className={styles.grid_item}>
                        <Image src={item.img} alt={item.ciudad} className={styles.image} width={'400'}height={'300'}/>
                            <p className={styles.date}>{item.fecha}</p>
                            <p className={styles.resume}>{item.resume}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </>
    );
}
