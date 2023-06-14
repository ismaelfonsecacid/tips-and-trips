import Image from 'next/image'
import styles from './page.module.css'
import { FilterPage } from '../components/Filter'
import FirebaseComponent from '../components/Test'


export default function TipsPage() {



  return (


    <div className={styles.main}>

      <div className={styles.upper}>
        <div style={{ padding: '10px 50px' }}>
          <Image src='/images/mochila.png' width={150} height={150} alt='Es una mochila representando que somos mochileros' title='Mochila' />
        </div>
        <p>En Tips & Trips somos mochileros apasionados que disfrutamos de viajar de forma aventurera y <strong>económica</strong>. Nos encanta sumergirnos en diferentes culturas,
          conectar con personas locales y descubrir rincones ocultos. Valoramos la simplicidad, la autenticidad y la conexión con la naturaleza.
          Estamos aquí para compartir consejos útiles y ayudarte a disfrutar al máximo de tus aventuras mochileras.</p>
      </div>

      <p>Aquí nos enfocaremos en consejos para hacer tu viaje más económico de tres maneras diferentes. Primero, opciones muy baratas como hostales y comidas locales.
        Segundo, alternativas que ahorran dinero, como intercambio de casas y ofertas en transporte y alojamiento.
        Por último, consejos para experiencias lujosas pero económicas, como programas de lealtad y vuelos en temporada baja. Disfruta de un viaje increíble sin gastar una fortuna. </p>


      <FilterPage />
      <FirebaseComponent/>


    </div>



  )

}
