import  {jsonData}  from "@/app/services/apiCallInfoContinente";
import styles from './Page.module.css'

export default function TripPage({ params }) {

  const { nombre } = params
  const datosFiltrados = jsonData.filter(item => item.id === nombre);
  console.log(datosFiltrados[0].id)
  console.log(nombre)
  




  return (
  <div className={styles.main}>
    {datosFiltrados.map(item=>(
    <p>{item.descripcion}</p>
    ))}
  </div>
  )

  


}