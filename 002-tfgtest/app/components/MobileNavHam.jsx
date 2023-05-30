import Link from "next/link"
import Image from "next/image"
import styles from './MobileNavHam.module.css'
export default function MobileNavHam({ open, onClick }) {

    return (
        <div className={styles.allMenu} style={{ transform: !open ? 'translateX(-1000%)' : 'none' }}>
            <div className={styles.container}>
                <div className={styles.menu}>
                    <button onClick={onClick} className={styles.buton}>
                        <Image src='/images/closeicono.png' width={'25'} height={'25'} />
                    </button>
                    <div>
                        <Link href="/" onClick={onClick} className={styles.link}>HOME</Link>
                        <Link href="/tips" onClick={onClick} className={styles.link}>TIPS</Link>
                        <Link href="/trips " onClick={onClick} className={styles.link}>TRIPS</Link>
                    </div>
                </div>
            </div>
        </div>

    )

}