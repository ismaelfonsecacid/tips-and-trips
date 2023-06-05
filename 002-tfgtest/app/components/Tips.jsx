'use client'
import Image from 'next/image'
import styles from './Tips.module.css'
import { useState } from 'react';

export function Tips({ datos }) {

    console.log(datos)


        const [showMore, setShowMore] = useState(false);
      
        const handleShowMore = () => {
          setShowMore(true);
        };
    return (
        <main className={styles.main}>
            <ul className={styles.ul}>
            {datos.slice(0, showMore ? datos.length : 2).map((dato) => 
                (
                    <li key={dato.id} className={styles.li}>
                        <h2>{dato.lugar}</h2>
                        <div className={styles.mid}>
                            <div className={styles.div1}>
                                <div>
                                    <Image src={dato.imgH} width={200} height={200} />
                                    <p>{dato.categoria.tipo} llamado {dato.nombreHotel} durante  {dato.categoria.dias} por un precio de {dato.categoria.precio}</p>
                                </div>
                            </div>
                            <div className={styles.div2}>
                                {dato.relleno}
                            </div>
                        </div>
                    </li>)
                )}
            </ul>
            {!showMore && (
        <button onClick={handleShowMore}>Show More</button>
      )}
        </main>
    )

}