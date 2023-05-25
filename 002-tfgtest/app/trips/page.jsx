import React from "react";
import styles from "./Page.module.css";
import Image from "next/image";
import Carousel from "../components/Carousel";
export default async function TripsPage() {

    return (
        <div className={styles.tripspagecontainer}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <div>
                        <Image src="/images/tokyo.jpg" width={350} height={350} alt="Imagen de relleno" />
                    </div>
                    <div className={styles.textContainer}>
                        <h1 className={styles.title}>Mis Experiencias de Viaje</h1>
                        <p className={styles.description} style={{ marginLeft: '50px', marginRight: '50px' }}>
                            A lo largo de mis viajes, he descubierto que cada lugar tiene su propio encanto y belleza única. Me encanta sumergirme en la cultura local, probar la comida auténtica y explorar los puntos de interés históricos. Cada viaje me ha dejado recuerdos inolvidables y me ha enriquecido de muchas maneras. Viajar me ha enseñado a apreciar la diversidad del mundo y a ser más abierto y comprensivo.
                        </p>
                        <p className={styles.description}>
                            Siempre estoy emocionado por la próxima aventura que me espera. ¡No puedo esperar para explorar más lugares y crear nuevas historias de viaje!
                        </p>
                    </div>
                </div>
            </div>
            <div className={styles.colordiv} id="lugares">
            <h2  className={styles.subtitle}>Lugares que hemos visitado</h2>
            <Carousel/>


            </div>
            <h2 className={styles.subtitle}>Opiniones sobre mis viajes</h2>

        </div>
    );
}
