'use client'
import { useState } from "react"
import datos from '../mocks/TEST.json'
import { Tips } from "./Tips"
import { TopFilter } from "./TopFilter"
import { fetchData } from "../services/apiFetchData"

export function FilterPage() {


    const [products] = useState(datos)
    console.log(Array.isArray(products))


    const [filters, setFilters] = useState(
        {
            nombre: 'all',
            minPrice: 0,
            continente: 'all',
            hotel: 'all',
            dias:'all'
        }
    )

    const filterProducts = (products) => {
        console.log(products)
        return products.filter(product => {
            return (
                product.precioViaje >= filters.minPrice &&
                (
                    filters.nombre === 'all' ||
                    product.nombre === filters.nombre
                ) &&
                (
                    filters.continente === 'all' ||
                    product.continente === filters.continente
                )
            ) &&
                (
                    filters.hotel === 'all' ||
                    product.hotel === filters.hotel
                )
             &&
                (
                    filters.dias === 'all' ||
                    product.dias === filters.dias
                )

        })
    }

    const filteredProducts = filterProducts(products)
    console.log(filteredProducts)

    return (

        <>
         <p>Aquí encontrarás una fascinante lista de nuestros diversos y emocionantes viajes, acompañada de sus precios irresistibles. Además, te brindaremos valiosos <strong>Tips</strong> que te serán de gran utilidad al organizar tu viaje soñado:</p>
            <TopFilter changeFilters={setFilters} />
            <Tips datos={filteredProducts}></Tips>
        </>

    )




}