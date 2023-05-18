import jsonData from '../json/posts.json'
import styles from './Posts.module.css'
import Link from 'next/link';

export default function Posts() {
    return (
        <>
            <h1 style={{textAlign:'center', marginTop:'30px'}}>Nuestros viajes</h1>
            <div className={styles.grid_container}>
                {jsonData.splice(0, 3).map((item) => (
                    <Link className={styles.link} href={`/trips/${item.id}`} key={item.id}>
                        <div className={styles.grid_item}>
                            <img src={item.img} alt={item.ciudad} className={styles.image} />
                            <p className={styles.date}>{item.fecha}</p>
                            <p className={styles.resume}>{item.resume}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </>
    );
}