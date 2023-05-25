import styles from './DobleLat.module.css'
import Image from 'next/image'
export function DobleLat() {



  return (
    <div style={{ display: 'flex' }} className={styles.main}>
      <div className={styles.triangulo}></div>
      <div className={`${styles.left} ${styles.content}`}>
        <div className={styles.contenido}>

          <Image src={"/images/guardian.png"} width={'177'} height={'89'}></Image>
          <p>Get ready for one last ride. Marvel Studios’ Guardians of the Galaxy Vol. 3, in theatres now.</p>
          <a href="">LEARN MORE</a>
          <a href="">BUY TICKETS</a>
        </div>

      </div>
      <div className={styles.imgbck}></div>
    </div>

  )
}