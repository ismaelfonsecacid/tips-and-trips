'use client'
import React from 'react'
import jsonCard from '../json/posts.json'
import styles from './Slider.module.css'
import { motion } from 'framer-motion'
import Image from 'next/image'

const Slider = () => {
  return (
    <motion.div className={styles.slider_container}>
        <motion.div className={styles.slider} drag='x' 
        dragConstraints={{right: 0, left:-5345}} >
        {jsonCard.map(image => (
            <motion.div className={styles.item}>
                <Image src={image.img} alt="" width={'200'}height={'300'}/>
                <p>{image.resume}</p>
            </motion.div>
        ))}
        </motion.div>
        
    </motion.div>
  )
}

export default Slider