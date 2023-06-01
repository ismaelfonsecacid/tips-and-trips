
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from './Slider.module.css'
import { fetchData } from '../services/apiFetchData'



export default async function Slider() {
  const URL = 'results'
  let data = await fetchData(URL);
  let info = data.map((item) => {
    return (

      <div className={styles.card} key={item.id}>
        <Link href={`/trips/${item.continente}/${item.id}`} key={item.id} style={{ cursor: 'grab', textDecoration: 'none' }}>
          <Image src={item.img} alt={item.ciudad} width={'200'} height={'300'} />
          <p>{item.resume}</p>
        </Link>
      </div>


    );
  });


  return (

    <main className={styles.carrusel}>

      {info}

    </main>

  )
}

