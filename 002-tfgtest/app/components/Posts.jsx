// import jsonData from '../json/posts.json'
import styles from './Posts.module.css'
import Link from 'next/link';
import Image from 'next/image';
import { jsonData } from '../services/apiCallJsonPosts';

export default function Posts() {
    return (
        <>
            <h1 style={{textAlign:'center', marginTop:'30px'}}>Nuestros viajes</h1>
            <div className={styles.grid_container}>
                {jsonData.splice(0, 3).map((item) => (
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
