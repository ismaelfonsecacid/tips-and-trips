'use client'

import { useState, useId } from 'react'
import styles from "./DataFilter.module.css"

export function DataFilter({ onChange }) {

    const [minPrice, setMinPrice] = useState(0)
    const minPriceFilterId = useId()
    const categoryFilterId = useId()
    const continentFilterId = useId()
    const hotelFilterId = useId()
    const daysFilterId = useId()

    const handleChangeMinPrice = (event) => {
        setMinPrice(event.target.value)
        onChange(prevState => ({
            ...prevState,
            minPrice: event.target.value
        }))
    }
    const handleChangeDays = (event) => {
        
        onChange(prevState => ({
            ...prevState,
            dias: event.target.value
        }))
    }
    const handleChangeCategory = (event) => {

        onChange(prevState => ({
            ...prevState,
            nombre: event.target.value
        }))
    }
    const handleChangeContinent = (event) => {

        onChange(prevState => ({
            ...prevState,
            continente: event.target.value
        }))
    }
    const handleChangeHotel = (event) => {

        onChange(prevState => ({
            ...prevState,
            hotel: event.target.value
        }))
    }
    const handleResetFilters = () => {
        setMinPrice(0)
        onChange({
          minPrice: 0,
          nombre: 'all',
          continente: 'all',
          hotel: 'all',
          dias:'all'
        })
        document.getElementById(categoryFilterId).value = 'all';
        document.getElementById(continentFilterId).value = 'all';
        document.getElementById(daysFilterId).value = 'all';
        document.getElementById(hotelFilterId).value = 'all';
        document.getElementById(minPriceFilterId).value = 0;
    }
    return (
        <>
            <section className={styles.container} id='top'>
                <div>
                    <label htmlFor="price" className={styles.label}>Precio a partir de:</label>
                    <input
                        type="range"
                        id={minPriceFilterId}
                        min="300"
                        max="1100"
                        onChange={handleChangeMinPrice}
                        className={styles.rangeInput}
                    />
                    <span>{minPrice}</span>
                </div>
                <div>
                    <label htmlFor={categoryFilterId} className={styles.label}>Transporte:</label>
                    <select
                        id={categoryFilterId}
                        onChange={handleChangeCategory}
                        className={styles.selectInput}
                    >
                        <option value="all">Todas</option>
                        <option value="Con Vuelo">Con vuelo</option>
                        <option value="Con tren">Con tren</option>
                    </select>
                </div>
                <div>
                    <label htmlFor={continentFilterId} className={styles.label}>Continente:</label>
                    <select
                        id={continentFilterId}
                        onChange={handleChangeContinent}
                        className={styles.selectInput}
                    >
                        <option value="all">Todas</option>
                        <option value="Europa">Europa</option>
                        <option value="África">África</option>
                        <option value="Oceanía">Oceanía</option>
                        <option value="América">América</option>
                    </select>
                </div>
                <div>
                    <label htmlFor={hotelFilterId} className={styles.label}>Alojamiento:</label>
                    <select
                        id={hotelFilterId}
                        onChange={handleChangeHotel}
                        className={styles.selectInput}
                    >
                        <option value="all">Todas</option>
                        <option value="F">En hostal</option>
                        <option value="T">En hotel inferior a 4⭐</option>
                        <option value="TS">En hotel 4 o 5⭐</option>
                    </select>
                </div>
                <div>
                    <label htmlFor={daysFilterId} className={styles.label}>Dias:</label>
                    <select
                        id={daysFilterId}
                        onChange={handleChangeDays}
                        className={styles.selectInput}
                    >
                        <option value="all">Todas</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                    </select>
                </div>
            
            </section>
            <button onClick={handleResetFilters}>Reset Filters</button>
        </>
    )
}