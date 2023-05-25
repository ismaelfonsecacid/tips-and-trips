'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import styles from './Slider.module.css'
import { motion } from 'framer-motion'


let jsonData = []; // Variable para almacenar los datos de la API sustituyendo useState para evitar el renderizado desde el cliente

fetch('https://trips-and-trips-default-rtdb.europe-west1.firebasedatabase.app/results.json')
  .then((response) => response.json())
  .then((data) => {
    jsonData = data;
    console.log(jsonData[0]);
  })
  .catch((error) => {
    console.log('Error fetching data:', error);
  });


const Slider = () => {
  return (
    <motion.div className={styles.slider_container}>
      <motion.div className={styles.slider} drag='x'
        dragConstraints={{ right: 0, left: -2150 }} >
        {jsonData.map(image => (
        
          <motion.div className={styles.item} key={image.id}>
            <Link href={`/trips/${image.continente}/${image.id}`} key={image.id} style={{cursor:'grab'}}>
              <Image src={image.img} alt={image.ciudad} width={'200'} height={'300'} />
            </Link>
              <Link href={`/trips/${image.continente}/${image.id}`} key={image.id} style={{cursor:'grab'}}>
              <p>{image.resume}</p>
          </Link>
            </motion.div>
        ))}
      </motion.div>

    </motion.div>
  )
}

export default Slider