'use client'
import MobileNavHam from "./MobileNavHam"
import { useState, useEffect } from "react"

import Image from "next/image"
import styles from './MobileNav.module.css'

export default function MobileNav() {
    const [mobileNavOpen, setMobileNavOpen] = useState(false)

    useEffect(() => {
        if (mobileNavOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'auto'
        }
    }, [mobileNavOpen])
    return (
        <>
            <MobileNavHam open={mobileNavOpen} onClick={() => setMobileNavOpen(false)}></MobileNavHam>
            <button onClick={() => setMobileNavOpen(true)} className={styles.buton} aria-label="Menu desplegable">
               <Image src='/images/menu.png' width={'30'} height={'25'} alt="Boton para abrir el menu desplegable"/>
            </button>
        </>
    )
}