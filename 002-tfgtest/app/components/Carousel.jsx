'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import styles from './Slider.module.css'
import { motion } from 'framer-motion'
import { jsonData } from '../services/apiCallJsonPosts'



const Slider = () => {
  return (
    <motion.div className={styles.slider_container}>
      <motion.div className={styles.slider} drag='x'
        dragConstraints={{ right: 0, left: -2150 }} >
        {jsonData.map(image => (
          <motion.div className={styles.item} key={image.id}>
            <Link href={`/trips/${image.continente}/${image.id}`} key={image.id} style={{ cursor: 'grab' }}>
              <Image src={image.img} alt={image.ciudad} width={'200'} height={'300'} />
            </Link>
            <Link href={`/trips/${image.continente}/${image.id}`} key={image.id} style={{ cursor: 'grab',textDecoration:'none' }}>
              <p className={styles.button}>{image.resume}</p>
            </Link>
          </motion.div>
        ))}
      </motion.div>

    </motion.div>
  )
}

export default Slider