'use client'

import React, { useState } from 'react';
import styles from './AgregarViaje.module.css';
import AddFormTrip from './AddFormTrip';
// import AddFormTripData from './AddFormTripData';


export default function AgregarViaje() {
  const [showAddFormTrip, setShowAddFormTrip] = useState(false);
  const [showAddFormTripData, setShowAddFormTripData] = useState(false);

  const handleClick = () => {
    setShowAddFormTrip(true);
  };

  const handleFormSubmit = () => {
    setShowAddFormTrip(false);
    setShowAddFormTripData(true);
  };




  return (
    <div className={styles.contenido2}>
      <h2>¡Comparte tu experiencia de viaje con nosotros!</h2>
      <p>
        Aquí, en nuestra empresa, nos encanta conocer también los viajes que has hecho. Valoramos las experiencias de
        nuestros clientes y nos gustaría agregar tu viaje a nuestra lista de aventuras y descubrimientos. Si has tenido
        alguna experiencia de viaje emocionante, divertida o inspiradora, ¡nos encantaría escucharla!
      </p>
      <p>
        Compartir tus historias de viaje nos permite crear una comunidad de viajeros apasionados que se animan y se
        inspiran mutuamente. Además, al agregar tu viaje a nuestra lista, también podrás ayudar a otros viajeros al
        proporcionarles recomendaciones, consejos y perspectivas personales sobre destinos y actividades.
      </p>
      <p>
        Si estás interesado en agregar tu viaje a nuestra lista de experiencias, por favor cuéntanos sobre él. Queremos
        saber a qué lugar viajaste, cuándo lo hiciste, qué actividades realizaste y cómo fue tu experiencia en general.
        No dudes en incluir detalles interesantes, anécdotas divertidas o cualquier otro aspecto que consideres
        relevante.
      </p>
      <button onClick={handleClick}>Agregar Viaje</button>
      {showAddFormTrip && <AddFormTrip onSubmit={handleFormSubmit} />}
      {/* {showAddFormTripData && <AddFormTripData />} */}
    </div>
  );
}

