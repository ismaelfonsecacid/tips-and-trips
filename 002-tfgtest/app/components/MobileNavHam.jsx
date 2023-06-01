import Link from "next/link"
import Image from "next/image"
import styles from './MobileNavHam.module.css'
export default function MobileNavHam({ open, onClick }) {

    return (

        <div className={styles.allMenu} style={{ right: !open ? '-1000px' : '0' }}>
            <div className={styles.container}>
                <div className={styles.menu}>
                        <div className={styles.logoMenu}>
                            <Image
                                src="/images/logo3.png"
                                className={styles.logo}
                                width={125}
                                height={125}
                                alt="logo"
                            />
                        </div>
                    <div className={styles.flex}>
                        <button onClick={onClick} className={styles.buton} aria-label="Cerrar menu desplegable">
                            <Image src='/images/closeicono.png' width={50} height={50} alt="Boton para cerrar el menu desplegable" />
                        </button>
                    </div>
                    <div className={styles.cLink}>
                        <Link href="/" onClick={onClick} className={styles.link}>HOME</Link>
                        <Link href="/tips" onClick={onClick} className={styles.link}>TIPS</Link>
                        <Link href="/trips " onClick={onClick} className={styles.link}>TRIPS</Link>
                    </div>
                </div>
            </div>
        </div>


    )

}