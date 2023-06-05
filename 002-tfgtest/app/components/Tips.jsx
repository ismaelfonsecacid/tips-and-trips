'use client'

import Image from 'next/image';
import styles from './Tips.module.css';
import { useState } from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';

export function Tips({ datos }) {
  console.log(datos);

  const [showMore, setShowMore] = useState(5);

  const handleShowMore = () => {
    setShowMore(showMore + 5);
  };

  const handleGoToStart = () => {
    setShowMore(5);
    scroll.scrollTo('top', {
      smooth: true,
      duration: 200, // Adjust the offset as needed
    });
  };

  if (datos.length === 0) {
    return (
      <div className={styles.noData}>
        <p>Lo sentimos, no hay información disponible con esos filtros.</p>
      </div>
    );
  }

  return (
    <main className={styles.main}>
      <ul className={styles.ul}>
        {datos.slice(0, showMore).map((dato) => (
          <li key={dato.id} className={styles.li}>
            <h2>{dato.lugar}</h2>
            <div className={styles.mid}>
              <div className={styles.div1}>
                <div>
                  <Image
                    src={dato.imgH}
                    width={250}
                    height={250}
                    alt={`Imagen que muestra como es ${dato.nombreHotel}`}
                    title={dato.nombreHotel}
                    className={styles.img}
                  />
                  <ul className={styles.ul2}>
                    <li>
                      <strong>Alojamiento: </strong>
                      {dato.categoria.tipo} llamado <strong>{dato.nombreHotel}</strong>
                    </li>
                    <li>
                      <strong>Días</strong>: {dato.dias}
                    </li>
                    <li>
                      <strong>Precio alojamiento: </strong>: {dato.categoria.precio}€
                    </li>
                    <li>
                      <strong>Transporte</strong>: El precio ronda los {dato.precioTransporte}€
                    </li>
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
                  {dato.tips.map((tip) => (
                    <li key={tip}>{tip}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div></div>
          </li>
        ))}
      </ul>
      {showMore < datos.length ? (
        <div className={styles.divBot}>
          <button onClick={handleShowMore} role="button" className={styles.showMore}>
            Mostrar más
          </button>
        </div>
      ) : (
        <div className={styles.divBot}>
          <button onClick={handleGoToStart} role="button" className={styles.showMore}>
            Volver al inicio
          </button>
        </div>
      )}
    </main>
  );
}

