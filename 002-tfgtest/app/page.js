import styles from './page.module.css'
import Posts from './components/Posts'
import Link from 'next/link'


export default function Home() {


  return (
    <div className={styles.homepage}>
      <div className={styles.first_div}>
        <div className={styles.first_div_1}>
          <h1>¡Bienvenid@ a Tips & Trips!</h1>
          <p>En este rincón virtual, te embarcarás en un emocionante viaje a
            través de los destinos más fascinantes del mundo. Estamos aquí para compartir contigo
            los mejores consejos, trucos y secretos de viaje que harán de cada aventura una experiencia inolvidable.
            Ya sea que sueñes con perderte en los exuberantes paisajes de la selva amazónica, sumergirte en las cristalinas aguas del
            Caribe o explorar las maravillas arquitectónicas de las antiguas ciudades europeas, aquí encontrarás toda la información
            que necesitas para convertir tus sueños en realidad.</p>
          <br />
          <p>Nuestra pasión por los viajes nos impulsa a brindarte contenido de
            calidad, detallado y actualizado. Queremos que te sientas inspirado/a a explorar el mundo y descubrir nuevas culturas, tradiciones y sabores.
            En <strong>Tips & Trips</strong>, no solo te daremos recomendaciones sobre los lugares más importantes para visitar, sino que también te brindaremos
            valiosos consejos sobre cómo ahorrar dinero, cómo planificar itinerarios eficientes y cómo sumergirte en la autenticidad de cada destino.</p>

        </div>
      </div>
      <div className={styles.second_div}>
        <Posts />
        <div className={styles.midboton}>
          <Link to="/trips" href='/trips#lugares' className={styles.button}>
            Ver viajes
          </Link>
        </div>
      </div>
      <div className={styles.img}>

      </div>
      <div className={styles.img}>

      </div>
    </div>
  )
}
