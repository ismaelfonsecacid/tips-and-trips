import Image from "next/image";
import jsonData from "../../json/continente.json";
import styles from './Page.module.css'

export default function TripPage({ params }) {

  const { nombre } = params
  const datosFiltrados = jsonData.filter(item => item.id === nombre);
  console.log(datosFiltrados[0].id)
  console.log(nombre)





  return (
    <div className={styles.main}>
      {datosFiltrados.map(item => (
        <>
          <h2>{item.nombre}</h2>

          <div className={styles.upper}>
            <Image src={item.img} width={200} height={200} alt={`Imagen del continente de ${item.nombre}`} />
            <div>
              <p>{item.descripcion}</p>
              <br />
              <h3>¿Cómo es la seguridad en {item.nombre}?</h3>
              <p>{item.seguridad}</p>
            </div>
          </div>
          <div className={styles.slider_frame}>
            <ul>
              <li>
                <Image src='/images/continentes/europa-mid.jpg' width={600} height={300} alt={`Imagen del continente de ${item.nombre}`} />
              </li>
              <li>
                <Image src='/images/continentes/europa-mid.jpg' width={600} height={300} alt={`Imagen del continente de ${item.nombre}`} />
              </li>
              <li>
                <Image src='/images/continentes/europa-mid.jpg' width={600} height={300} alt={`Imagen del continente de ${item.nombre}`} />
              </li>
              <li>
                <Image src='/images/continentes/europa-mid.jpg' width={600} height={300} alt={`Imagen del continente de ${item.nombre}`} />
              </li>
              
            </ul>
          </div>
          <div className={styles.middle}>
            <div>
              <p>{item.opinion_personal}</p>
            </div>
          </div>

        </>
      ))}
    </div>
  )




}