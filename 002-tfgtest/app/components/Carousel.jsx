
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import styles from './Slider.module.css'
import { jsonData } from '../services/apiCallJsonPosts'



const Slider = () => {

  const data = jsonData.map((item) => {
    return (

      <div className={styles.card} draggable>
        <Link href={`/trips/${item.continente}/${item.id}`} key={item.id} style={{ cursor: 'grab', textDecoration: 'none' }}>
          <Image src={item.img} alt={item.ciudad} width={'200'} height={'300'} />
          <p>{item.resume}</p>
        </Link>
      </div>


    );
  });


  return (

    <main className={styles.carrusel}>

      {data}

    </main>

  )
}

export default Slider