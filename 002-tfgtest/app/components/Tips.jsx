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
                                    <Image src={dato.imgH} width={250} height={250} alt={`Imagen que muestra como es ${dato.nombreHotel}`} title={dato.nombreHotel} className={styles.img} />
                                    <ul className={styles.ul2}>
                                        <li><strong>Alojamiento: </strong>{dato.categoria.tipo} llamado <strong>{dato.nombreHotel}</strong></li>
                                        <li><strong>Días</strong>: {dato.dias}</li>
                                        <li><strong>Precio alojamiento: </strong>: {dato.categoria.precio}€</li>
                                        <li><strong>Transporte</strong>: El precio ronda los {dato.precioTransporte}€</li>
                                        <div className={styles.precio}>
                                            <p>{dato.precioViaje}</p>
                                        </div>

                                    </ul>
                                </div>
                            </div>
                            <div className={styles.div2}>
                                <p>{dato.relleno}</p>
                                <br />
                                <h3>TIPS</h3>
                                <ul className={styles.ul3}>
                                    {dato.tips.map(tip => (
                                        <li key={tip}>{tip}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div>
                        </div>
                    </li>)
                )}
            </ul>
            {!showMore && (
                <div className={styles.divBot}><button onClick={handleShowMore} role='button' className={styles.showMore}>Mostra más</button></div>
            )}
        </main>
    )

}