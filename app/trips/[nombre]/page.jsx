import Image from "next/image";

import styles from './Page.module.css'
import { fetchData } from "@/app/services/apiFetchData";

export default async function TripPage({ params }) {
  const URL = 'Continente';
  const { nombre } = params
  const data = await fetchData(URL)
  const datosFiltrados = data.filter(item => item.id === nombre);


  return (
    <div className={styles.main}>
      {datosFiltrados.map(item => (
        <div key={item.nombre}>
          <h2>{item.nombre}</h2>

          <div className={styles.upper}>
            <Image src={item.img} width={300} height={200} alt={`Imagen del continente de ${item.nombre}`} />
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
                <Image src={item.img1} width={600} height={300} alt={`Imagen que contiene un lugar del continente ${item.nombre}`} title={`Imagen de ${item.nombre}`} />
              </li>
              <li>
                <Image src={item.img2} width={600} height={300} alt={`Imagen que contiene un lugar del continente ${item.nombre}`} title={`Imagen de ${item.nombre}`}  />
              </li>
              <li>
                <Image src={item.img3} width={600} height={300} alt={`Imagen que contiene un lugar del continente ${item.nombre}`}title={`Imagen de ${item.nombre}`}  />
              </li>
              <li>
                <Image src={item.img4} width={600} height={300} alt={`Imagen que contiene un lugar del continente ${item.nombre}`} title={`Imagen de ${item.nombre}`}  />
              </li>
            </ul>
          </div>

          <div className={styles.middle}>
            <h2 style={{marginBottom:'10px'}}>Mi opinión sobre {item.nombre}</h2>

            <p>{item.opinion_personal}</p>
          </div>

          <div className={styles.bottombox}>
            <h2 style={{marginBottom:'10px'}}>Información destacada</h2>
            <div className={styles.bottom}>
              <div className={styles.box}>
                <h3>Días gratis en museos</h3>
                <ul className={styles.museos}>
                  {item.museos.map(info => (
                    <li key={info}>{info}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h3>Pases de transportes</h3>
                <ul className={styles.pases}>
                  {item.pases.map(info => (
                    <li key={info}>{info}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h3>Precio promedio de cada comida</h3>
                <p>Todo dependerá de a dónde vayas a comer, pero el precio varía entre los {item.precio_promedio_comida}€</p>
              </div>
              <div>
                <h3>Precio promedio en vuelos</h3>
                <p>{item.precio_promedio_vuelos}€</p>
              </div>
            </div>
          </div>


        </div>
      ))}
    </div>
  )




}